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

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        Swal.fire("Failed to login", message, "error");
      } else {
        router.push("/auth/otp");
      }
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire("Failed to login", error.message, "error");
      } else {
        Swal.fire("Failed to login", "An unknown error occurred", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm"
          placeholder="admin@admin.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-black text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:outline-none"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center text-sm">
        <Link href="/auth/forgotPassword">
          <span className="text-red-500 hover:underline">Forgot Password</span>
        </Link>
      </div>

      <button
        type="submit"
        className="w-full py-1 text-sm bg-[#FDDCDF] border-[#FDDCDF] border text-[#F20519] rounded-lg shadow-md hover:bg-[#F20519] hover:text-white"
        disabled={isSubmitting}
      >
        Log In
      </button>

      <p className="text-center text-sm text-black">
        Don't have an account?{" "}
        <Link href="/auth/register">
          <span className="text-red-500 hover:underline">Sign Up</span>
        </Link>
      </p>

      <div className="flex items-center space-x-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-sm text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="space-y-4 text-black">
        <button
          type="button"
          className="flex items-center justify-center w-full py-2 text-sm border border-gray-300 rounded-lg shadow-sm text-black"
        >
          <img
            src="/images/google-icon.png"
            alt="Kaziforce Logo"
            className="w-5 h-5 mr-2 object-cover"
          />
          Continue with Google
        </button>
      </div>
    </form>
  );
}
