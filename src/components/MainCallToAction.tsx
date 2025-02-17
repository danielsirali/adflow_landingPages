"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function MainCallToAction() {
  return (
    <section className="max-w-6xl mx-auto my-10 p-10 bg-red-100 rounded-lg">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to elevate your media <br /> buying experience?
          </h2>
          <p className="text-gray-700 text-sm mt-2">
            Kindly fill this form with your details about your inquiries and we
            will respond your inquiry shortly.
          </p>

          <div className="border border-gray-400 p-6 rounded-lg mt-5">
            <form action="#" method="POST">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 bg-red-100  py-2 mt-1 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 bg-red-100 py-2 mt-1 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  User type <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 bg-red-100 py-2 mt-1 focus:ring-red-500">
                  <option>Advertiser</option>
                  <option>Media House</option>
                  <option>Media Agency</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Additional information <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-300 rounded-lg px-4 bg-red-100 py-2 mt-1 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-black"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            Or call our offices
          </h3>
          <ul className="mt-6 space-y-10">
            <li className="flex items-center space-x-4">
              <i className="bx bx-envelope text-2xl text-red-600"></i>
              <div>
                <span className="text-gray-700 text-sm">Send an email</span>
                <p className="text-gray-900 text-sm font-semibold">
                  adflow@gmail.com
                </p>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <i className="bx bx-phone text-2xl text-red-600"></i>
              <div>
                <span className="text-gray-700 text-sm">Give us a call</span>
                <p className="text-gray-900 text-sm font-semibold">
                  0700000000
                </p>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <i className="bx bx-map text-2xl text-red-600"></i>
              <div>
                <span className="text-gray-700 text-sm">Office address</span>
                <p className="text-gray-900 text-sm font-semibold">
                  View park towers, Nairobi
                </p>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <i className="bx bx-time text-2xl text-red-600"></i>
              <div>
                <span className="text-gray-700 text-sm">Working hours</span>
                <p className="text-gray-900 text-sm font-semibold">
                  Mon-Sat: 10am - 5pm
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
