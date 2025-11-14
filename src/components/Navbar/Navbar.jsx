"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Our Services", href: "#OurServices" },
    { title: "NeuroStar TMS", href: "#NeuroStarTMS" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-background shadow-lg`}>
      <div className="max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={"/logo.png"}
                height={90}
                width={90}
                className=" w-14 lg:w-24"
                alt="logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.title} href={item.href} className="">
                {item.title}
              </Link>
            ))}

            <button className="primary_btn hover:bg-second-primary">
              Book Consultation
            </button>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text bg-secondary-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Overlay + Slide-in Drawer) */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 top-[72px] lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-secondary-background shadow-xl z-50 lg:hidden
  transform transition-transform duration-300 flex flex-col ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          {/* start  */}
          <div className="space-y-2 ">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-background transition"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* end  */}
          <div className="">
            <button className="primary_btn hover:bg-second-primary w-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
