"use client"

import React, { useState } from "react"
import { Toaster, useToast } from "@medusajs/ui"

// import axios from "axios" // Make sure to install axios with npm install axios

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const { toast } = useToast()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      name,
      email,
      message,
    }

    // Replace '/send' with your backend server's URL
    //     await axios.post("/send", formData)
  }

  return (
    <section className="text-gray-600 body-font relative">
      <Toaster />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg"
                  onClick={() =>
                    toast({
                      variant: "success",
                      title: "Email sent",
                      description: "Thanks for the email",
                    })
                  }
                >
                  <a href="">Send</a>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
