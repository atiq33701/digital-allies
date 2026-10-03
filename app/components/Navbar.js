"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative h-20 w-30 overflow-hidden rounded-lg py-2.5">
              <Image
                src="/images/digital-logo.png"
                alt="Digital Allies Dubai"
                width={120} height={120}
                className="object-contain"
              />
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden items-center gap-1 md:flex">

            {/* Navigation Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                  <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                    ? "text-[#19C2C1]"
                    : "text-slate-700 hover:text-[#19C2C1]"
                }`}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#19C2C1] transition-all duration-300 ${
                      isActive ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </Link>
              );
            })}

            {/* ================= SOCIAL ICONS ================= */}
<div className="flex gap-3">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/digital_allies1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 bg-white transition-all duration-300 hover:border-[#19C2C1] hover:bg-[#19C2C1] hover:text-white text-[#19C2C1] hover:scale-90"
              >
              <FaInstagram size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923023753153"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-slate-200 text-white rounded-full transition-all duration-300 hover:border-[#19C2C1] bg-[#19C2C1] hover:text-white hover:scale-90"
              >
              <FaWhatsapp size={20} />
            </a>
          </div>
                </div>
              

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 transition-all duration-300 hover:border-[#19C2C1] hover:bg-[#19C2C1] hover:text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-5">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative h-10 w-16 overflow-hidden rounded-lg">
              <Image
                src="/images/digital-logo.png"
                alt="Digital Allies Dubai"
                   width={120} height={120}
                className="object-contain"
              />
            </div>

        
          </Link>

          {/* Close */}
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-all duration-300 hover:border-[#19C2C1] hover:bg-[#19C2C1] hover:text-white"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-1 flex-col px-5 py-8">


          <div className="flex flex-col gap-2">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between rounded-xl px-5 py-4 text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#19C2C1]/10 text-[#19C2C1]"
                      : "text-slate-700 hover:bg-[#19C2C1]/10 hover:text-[#19C2C1]"
                  }`}
                >
                  <span>{link.name}</span>

                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}

          </div>

          {/* ================= MOBILE SOCIAL ICONS ================= */}
          <div className="mt-8 border-t border-slate-200 pt-6">

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Follow Us
            </p>

            <div className="flex gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digital_allies1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#E4405F] transition-all duration-300 hover:border-[#19C2C1] hover:bg-[#19C2C1] hover:text-white"
              >
                <FaInstagram size={21} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923023753153"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#25D366] transition-all duration-300 hover:border-[#19C2C1] hover:bg-[#19C2C1] hover:text-white"
              >
                <FaWhatsapp size={21} />
              </a>

            </div>
          </div>
        </div>

      </aside>
    </>
  );
}