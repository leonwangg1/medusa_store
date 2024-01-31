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
  const paymentSession = cart.payment_session as PaymentSession
  const isStripe = paymentSession?.provider_id?.includes("stripe")

  console.log("cart:", cart)
  console.log("paymentSession:", cart.payment_session)
  console.log("isStripe:", isStripe)

  // if (isStripe && paymentSession && stripePromise) {
  console.log("Rendering StripeWrapper")
  return (
    <StripeWrapper
      paymentSession={paymentSession}
      stripeKey={stripeKey}
      stripePromise={stripePromise}
    >
      {children}
    </StripeWrapper>
  )
  // }

  if (
    paymentSession?.provider_id === "paypal" &&
    paypalClientId !== undefined &&
    cart
  ) {
    console.log("Rendering PayPalScriptProvider")
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

  // console.log("Rendering Else")
  // return <div>{children}</div>
}

export default Wrapper
