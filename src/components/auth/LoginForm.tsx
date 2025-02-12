import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="w-full max-w-sm space-y-6">
      <div>
        <label htmlFor="email" className="block text-black text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm"
          placeholder="admin@admin.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-black text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-center text-sm text-[#037073]">
        <Link href="/auth/forgotPassword">
          <span className="text-secondary hover:underline">
            Forgot Password
          </span>
        </Link>
      </div>

      <button
        type="submit"
        className="w-full py-1 bg-[#F20519] border border-[#F20519] text-white rounded-lg shadow-md hover:bg-[#037073]"
      >
        Log In
      </button>

      <p className="text-center text-sm text-black">
        Don't have an account?{" "}
        <Link href="/auth/register">
          <span className="text-secondary hover:underline">Sign Up</span>
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
