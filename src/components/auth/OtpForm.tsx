"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (apiKey) {
        headers["api-key"] = apiKey;
      }

      const response = await fetch("/api/auth/otp", {
        method: "POST",
        headers,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        Swal.fire("Failed to login", message, "error");
      } else {
        Swal.fire(
          "Login successful!",
          "You will be redirected to the homepage.",
          "success"
        ).then(() => {
          router.push("/");
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire("Failed to retrieve otp", error.message, "error");
      } else {
        Swal.fire(
          "Failed to retrieve otp",
          "An unknown error occurred",
          "error"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-black text-sm">
          OTP
        </label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm"
          placeholder="XXXXXX"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full py-1 bg-[#F20519] border border-[#F20519] text-white rounded-lg shadow-md hover:bg-black"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
}
