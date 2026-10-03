"use client";

import { useState } from "react";
import Link from "next/link";
import { X, MessageCircle } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function FloatingButtons() {
  const [showHelp, setShowHelp] = useState(true);

  return (
    <>
      {/* LEFT FLOATING SOCIAL BUTTONS */}
      <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-2 sm:left-6">

        {/* WhatsApp */}
        <Link
          href="https://wa.me/923023753153"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={29} />
        </Link>

        {/* Email */}
        <a
          href="mailto:YOUR_EMAIL@example.com"
          aria-label="Email"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF4B5C] text-white shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope size={25} />
        </a>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/digital_allies1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaInstagram size={27} />
        </Link>

      </div>


      {/* RIGHT HELP BUTTON */}
      {showHelp && (
        <div className="fixed bottom-6 right-4 z-50 sm:right-6">

          {/* Close */}
          <button
            onClick={() => setShowHelp(false)}
            aria-label="Close help"
            className="absolute -right-1 -top-7 flex h-6 w-6 items-center justify-center text-slate-950 transition-colors hover:text-[#19C2C1]"
          >
            <X size={18} />
          </button>

          {/* Help Text */}
          <div className="absolute bottom-16 right-0 whitespace-nowrap rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-xl ring-1 ring-slate-200">
            How can we help?
          </div>

          {/* WhatsApp Chat */}
          <Link
            href="https://wa.me/923023753153"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#19C2C1] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#16aeae]"
          >
            <MessageCircle size={30} />

            {/* Notification */}
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-black text-white ring-2 ring-white">
              1
            </span>
          </Link>

        </div>
      )}
    </>
  );
}