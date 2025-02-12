import LoginForm from "@/components/auth/LoginForm";
import { Suspense } from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex flex-col p-10 w-full md:w-1/2 px-4 md:px-10 bg-green-50 md:bg-transparent">
        <div className="flex justify-center md:mt-0 sm:mt-8 md:justify-start">
          <Link href="/">
            <img
              src="/images/adflow_logo.png"
              alt="Kaziforce Logo"
              className="w-30 h-8"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Back!
          </h1>
          <p className="text-black text-sm mb-8">
            Ready to Manage Your Bookings?
          </p>
          <div className="w-full max-w-sm">
            <Suspense fallback={<div>Loading...</div>}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full h-screen md:w-1/2 p-4 bg-white justify-center">
        <img
          src="/images/auth_rectangle.png"
          alt="People collaborating"
          className="w-auto h-auto p-4 object-cover"
        />
      </div>
    </div>
  );
}
