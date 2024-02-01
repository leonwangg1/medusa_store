"use client"

import { Cart, PaymentSession } from "@medusajs/medusa"
import { loadStripe } from "@stripe/stripe-js"
import React, { useState, useEffect } from "react"
import StripeWrapper from "./stripe-wrapper"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY
const stripePromise = stripeKey ? loadStripe(stripeKey) : null
const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

type WrapperProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ cart, children }) => {
  const [providerId, setProviderId] = useState<string | null>(null)
  const isStripe = providerId?.includes("stripe")

  useEffect(() => {
    const paymentSession = cart.payment_session as PaymentSession

    setProviderId(paymentSession?.provider_id)
  }, [cart.payment_session])

  if (!providerId) return null

  if (isStripe && providerId && stripePromise) {
    return (
      <StripeWrapper
        paymentSession={cart.payment_session!}
        stripeKey={stripeKey}
        stripePromise={stripePromise}
      >
        {children}
      </StripeWrapper>
    )
  }

  if (providerId === "paypal" && paypalClientId !== undefined && cart) {
    return (
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          currency: cart?.region.currency_code.toUpperCase(),
          intent: "authorize",
          components: "buttons",
        }}
      >
        {children}
      </PayPalScriptProvider>
    )
  }

  return <div>{children}</div>
}

export default Wrapper
