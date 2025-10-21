"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-50 sticky top-0">
      {/* mobile top bar */}
      <div className="flex items-center justify-between bg-[#272727] p-4 lg:hidden">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="HPZ Crew Logo" width={100} />
        </Link>
        <button
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
          className="text-white focus:outline-none" 
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* primary navigation */}
      <nav
        id="primary-navigation"
        className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:justify-between bg-[#272727] text-white p-2 lg:px-10`}
      >
        {/* logo (desktop) */}
        <div className="hidden lg:block">
          <Link href="/" className="flex items-center p-4 lg:p-6">
            <Image src={logo} alt="HPZ Crew Logo" width={120} />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:text-xl ">
          <Link className="hover:text-[#EC1617]" href="/">
            Home
          </Link>
          <a className="hover:text-[#EC1617]" href="#reasons">
            Reasons
          </a>
          <a className="hover:text-[#EC1617]" href="#benefit">
            Benefit
          </a>
          <a className="hover:text-[#EC1617]" href="#method">
            Method
          </a>
          <a className="hover:text-[#EC1617]" href="#bestContent">
            Best Content
          </a>
        </div>

        {/* actions */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
          <Link
            className="cursor-pointer hover:bg-gray-500 duration-200 ease-in-out text-white border border-white rounded-2xl p-2.5 text-center"
            href="/crew/login"
          >
            Login
          </Link>
          <a
            className="cursor-pointer hover:bg-red-900 duration-200 ease-in-out text-white bg-[#EC1617] rounded-2xl p-2.5 text-center"
            href="#joinUs"
          >
            Gabung HPZ Crew
          </a>
        </div>
      </nav>
    </header>
  );
}
