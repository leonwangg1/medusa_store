import React from "react"

export default function Refund() {
  return (
    <div className="my-5 px-10 md:px-40 lg:px-96">
      <span className="text-2xl md:text-3xl font-medium">Refund Policy</span>

      <p className="mt-2">
        We have a 30-day return policy, which means you have 30 days after
        receiving your item to request a return.
      </p>

      <p className="mt-2">
        To be eligible for a return, your item must be in the same condition
        that you received it, unworn or unused, with tags, and in its original
        packaging. You’ll also need the receipt or proof of purchase.
      </p>

      <div className="mb-5 mt-2">
        To start a return, you can contact us at{" "}
        <a className="underline">contact.mimiblooms@gmail.com</a>.{" "}
      </div>

      <span className="text-xl md:text-2xl font-medium">
        Damages and issues
      </span>

      <p className="mb-5 mt-2">
        Please inspect your order upon reception and contact us immediately if
        the item is defective, damaged or if you receive the wrong item, so that
        we can evaluate the issue and make it right.
      </p>

      <span className="text-xl md:text-2xl font-medium">
        Exceptions / non-returnable items
      </span>

      <p className="mt-2 mb-5">
        Certain types of items cannot be returned, like perishable goods (such
        as food, flowers, or plants), custom products (such as special orders or
        personalized items), and personal care goods (such as beauty products).
        We also do not accept returns for hazardous materials, flammable
        liquids, or gases. Please get in touch if you have questions or concerns
        about your specific item.
      </p>

      <span className="text-xl md:text-2xl font-medium">Exchanges</span>

      <p className="mb-5 mt-2">
        The fastest way to ensure you get what you want is to return the item
        you have, and once the return is accepted, make a separate purchase for
        the new item.
      </p>

      <span className="text-xl md:text-2xl font-medium">Refunds</span>

      <p className="mb-5 mt-2">
        We will notify you once we’ve received and inspected your return, and
        let you know if the refund was approved or not. If approved, you’ll be
        automatically refunded on your original payment method within 10
        business days. Please remember it can take some time for your bank or
        credit card company to process and post the refund too. If more than 15
        business days have passed since we’ve approved your return, please
        contact us at <a className="underline">contact.mimiblooms@gmail.com</a>.{" "}
      </p>
    </div>
  )
}
