"use client"; 

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function OtpForm() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [counter, setCounter] = useState(30);
  const router = useRouter();

  useEffect(() => {
    let timer: any;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [counter]);

  const handleChange = (element: any, index: any) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enteredOtp = otp.join("");

    try {
      const headers = {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY || "",
      };

      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers,
        body: JSON.stringify({ otp: enteredOtp }),
      });

      if (!response.ok) {
        const error = await response.json();
        Swal.fire("Failed to verify", error.message, "error");
      } else {
        const data = await response.json();
        Swal.fire(
          "OTP Verified!",
          "You will be redirected shortly.",
          "success"
        ).then(() => {
          const roleTitle = data.user?.role?.title;

          if (roleTitle === "Media House") {
            router.push("http://209.38.120.126:5174");
          } else if (roleTitle === "Advertiser") {
            router.push("http://209.38.120.126:5173");
          } else {
            router.push("/");
          }
        });
        
      }
    } catch (error: any) {
      Swal.fire({
        title: "Failed to retrieve otp",
        text: error.message || "An unknown error occurred",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
      <div className="flex justify-between space-x-3">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-12 h-10 px-4 text-center form-control border border-gray-300 bg-white rounded-lg "
            value={data}
            onChange={(e) => handleChange(e.target, index)}
          />
        ))}
      </div>
      <div className="text-center">
        {counter > 0 ? (
          <span className="text-sm flex justify-end">Resend in {counter} seconds</span>
        ) : (
          <Link href="#" onClick={() => setCounter(30)}>
            <p className="text-sm flex text-red-500 justify-end underline">Request again</p>
          </Link>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-1 text-sm bg-[#FDDCDF] border-[#FDDCDF] border text-[#F20519] rounded-lg shadow-md hover:bg-[#F20519] hover:text-white"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
}
