"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
// import { useDispatch } from 'react-redux';
// import { User } from '../types';

export default function OtpForm() {
  const [formData, setFormData] = useState({
    otp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  // const dispatch = useDispatch();

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

      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        Swal.fire("Failed to verify", message, "error");
      } else {
        // const data: { user: User } = await response.json();
        const data = await response.json(); 
        // dispatch(setUser(data.user)); 
        Swal.fire("OTP Verified!", "You will be redirected shortly.", "success").then(() => {
          // Redirect based on role
          if (data.user.role.title === "Media House") {
            router.push("http://203.29.5173");
          } else if (data.user.role.title === "Advertiser") {
            router.push("http://202.393");
          } else {
            router.push("/");
          }
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
        <label htmlFor="otp" className="block text-black text-sm">
          OTP
        </label>
        <input
          type="text"
          id="otp"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm"
          placeholder="XXXXXX"
          value={formData.otp}
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
