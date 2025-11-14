import Link from "next/link";
import React from "react";

const Footer = () => {
  // Navigation items should match the Navbar for consistency
  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Our Services", href: "#OurServices" },
    { title: "NeuroStar TMS", href: "#NeuroStarTMS" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className={`bg-primary py-8 text-secondary-background`}>
      <div className="max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        {/* Footer Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4 pb-3 border-b border-secondary-background">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={` text-sm font-normal transition duration-200 hover:text-secondary-background/90`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Copyright Information */}
        <p className="mb-2 text-center">
          &copy; {new Date().getFullYear()} TRANQUIL MIND CENTER. All Rights
          Reserved.
        </p>

        {/* Disclaimer */}
        <p className={`mt-2 text-xs text-center`}>
          Providing advanced NeuroStar TMS therapy to help individuals overcome
          depression and reclaim their well-being. Safe. Effective. Drug-Free.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
