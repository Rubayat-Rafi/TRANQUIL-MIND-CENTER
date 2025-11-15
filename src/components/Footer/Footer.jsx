import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-b from-[#020e10] to-[#000000]"
    >
      <div className="max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-12">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-secondary-background uppercase">
              Tranquil Mind Center
            </h3>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              Your Partner in Mental Wellness
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-linear-to-r from-transparent via-primary to-transparent mx-auto"></div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-4 text-secondary-background">
            <Link
              href="/"
              className="text-sm hover:text-primary transition-colors duration-200 relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
            </Link>

            <span className="text-primary">•</span>

            <Link
              href="/"
              className="text-sm hover:text-primary transition-colors duration-200 relative group"
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
            </Link>

            <span className="text-primary">•</span>

            <Link
              href="/"
              className="text-sm hover:text-primary transition-colors duration-200 relative group"
            >
              Patient Rights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <div className="pt-2">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Tranquil Mind Center. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
