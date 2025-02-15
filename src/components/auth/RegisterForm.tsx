"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface AccountType {
  id: string;
  title: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    accountType: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountTypes, setAccountTypes] = useState<AccountType[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsSubmitting(true);
  };

  useEffect(() => {
    const fetchAccountTypes = async () => {
      try {
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (apiKey) {
          headers["api-key"] = apiKey;
        }

        const response = await fetch("/api/account-types", {
          method: "GET",
          headers,
        });
        const data = await response.json();
        setAccountTypes(data);
      } catch (error) {
        console.error("Failed to fetch account types", error);
      }
    };

    fetchAccountTypes();
  }, []);

  useEffect(() => {
    const registerUser = async () => {
      if (!isSubmitting) return;

      try {
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (apiKey) {
          headers["api-key"] = apiKey;
        }

        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers,
          body: JSON.stringify({
            username: formData.fullName,
            email: formData.email,
            account_type: formData.accountType,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          const message = await response.text();
          Swal.fire("Failed to register", message, "error");
        } else {
          Swal.fire(
            "Registration successful!",
            "You will be redirected to the login page.",
            "success"
          ).then(() => {
            router.push("/auth/login");
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

    registerUser();
  }, [isSubmitting]);

  return (
    <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName" className="block text-black text-sm">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-black text-sm">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm"
          placeholder="admin@admin.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="accountType" className="block text-black text-sm">
          Account Type
        </label>
        <select
          name="accountType"
          value={formData.accountType}
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white
          rounded-lg shadow-sm"
          onChange={handleSelectChange}
        >
          <option value="">Select Account Type</option>
          {accountTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="password" className="block text-black text-sm">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-black text-sm">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="w-full py-1 bg-[#F20519] text-white border border-[#F20519] rounded-lg shadow-md hover:bg-[#037073]"
      >
        Sign Up
      </button>
      <p className="text-center text-sm text-black">
        Already have an account?{" "}
        <Link href="/auth/login">
          <span className="text-secondary hover:underline">Log In</span>
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
          className="flex items-center justify-center w-full py-2 text-sm border border-gray-300 rounded-full shadow-sm text-black"
        >
          <img
            src="/images/google-icon.png"
            alt="Google Logo"
            className="w-5 h-5 mr-2 object-cover"
          />
          Continue with Google
        </button>
      </div>
    </form>
  );
}
