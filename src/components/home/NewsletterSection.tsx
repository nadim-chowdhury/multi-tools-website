"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
    // Reset the email state after submission
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest tools and features. Enter your email
          below to subscribe.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center"
        >
          <input
            type="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 sm:mt-0 sm:ml-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
