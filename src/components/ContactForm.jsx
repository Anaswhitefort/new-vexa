"use client";

import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          budget: "",
        });
      } else {
        setMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="$1K – $5K"
                name="budget"
                value="25"
                checked={formData.budget === "25"}
                onChange={handleChange}
              />
              <RadioInput
                label="$5K – $25K"
                name="budget"
                value="5"
                checked={formData.budget === "50"}
                onChange={handleChange}
              />
              <RadioInput
                label="$25K – $100K"
                name="budget"
                value="25"
                checked={formData.budget === "100"}
                onChange={handleChange}
              />
              <RadioInput
                label="More than $100K"
                name="budget"
                value="100"
                checked={formData.budget === "150"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {message && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              message.includes("success") || message.includes("Thank you")
                ? "bg-green-50 text-green-900"
                : "bg-red-50 text-red-900"
            }`}
          >
            {message}
          </div>
        )}
        <Button type="submit" className="mt-10" disabled={loading}>
          {loading ? "Sending..." : "Let's work together"}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
