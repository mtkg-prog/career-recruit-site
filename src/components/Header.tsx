"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "会社を知る", href: "#about" },
  { label: "仕事を知る", href: "#jobs" },
  { label: "人を知る", href: "#interviews" },
  { label: "募集職種", href: "#positions" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
            isScrolled || isOpen ? "text-[#1a3a2a]" : "text-white"
          }`}
        >
          <span className="text-sm font-medium block leading-tight">
            株式会社キャリア
          </span>
          <span className="text-xs tracking-widest">RECRUIT</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-[#1a3a2a]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#final-cta"
            className="rounded-full bg-[#40916c] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#358a60]"
          >
            エントリー
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            isScrolled || isOpen ? "text-[#1a3a2a]" : "text-white"
          }`}
          aria-label="メニューを開く"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-[#1a3a2a]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#final-cta"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-[#40916c] px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#358a60]"
          >
            エントリー
          </a>
        </nav>
      </div>
    </header>
  );
}
