"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function CallToAction() {
  return (
    <section className="bg-red-50 py-12 px-6 mr-10 ml-10 rounded-lg">
      <div className="px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Ready to Elevate Your Advertising Strategy?
          </h2>
          <p className="text-black mb-6 text-sm">
            Fill out the form below with your details and questions about our
            innovative media buying platform. We will review your inquiry and
            get back to you promptly with the information you need to transform
            your ad campaigns.
          </p>
          <h3 className="text-xl font-semibold text-black mb-4">
            Book your free consultation
          </h3>

          <div className="bg-transparent border border-gray-300 rounded-lg p-6">
            <form>
              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 font-medium"
                  htmlFor="name"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 font-medium"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 font-medium"
                  htmlFor="user-type"
                >
                  I am a
                </label>
                <select
                  id="user-type"
                  className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>Advertiser</option>
                  <option>Media House</option>
                  <option>Media Agency</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 font-medium"
                  htmlFor="message"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F20519] text-white h-10 flex items-center justify-center py-3 border border-red-500 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Send message
              </button>
            </form>
          </div>

          <p className="mt-6 text-black text-sm font-bold">
            Don’t wait—take the first step toward a smarter, more efficient
            advertising experience with Adflow!
          </p>
        </div>
      </div>
    </section>
  );
}
