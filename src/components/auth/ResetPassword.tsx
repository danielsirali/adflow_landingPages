import Link from "next/link";

export default function ResetForm() {
  return (
    <form className="w-full max-w-sm space-y-6 items-center justify-center">
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
      <button
        type="submit"
        className="w-full py-1 text-sm bg-[#FDDCDF] border-[#FDDCDF] border text-[#F20519] rounded-lg shadow-md hover:bg-[#F20519] hover:text-white"
      >
        Submit
      </button>
    </form>
  );
}