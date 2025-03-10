"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import icons
import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="text-[rgb(166,172,183)] p-4 h-28">
      <div className="container lg:mx-auto lg:flex lg:justify-between lg:items-center lg:px-[113px]">
        {/* Logo */}
        <Link href="/" className="ml-[15.5px] mt-[1px]">
          <Image src="/neeca-logo.webp" alt="Logo" width={68.5} height={68.5} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FiMenu /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="hidden flex-col lg:flex lg:flex-row text-[#9da4b0] gap-[39px] font-[500] text-lg mr-[-4px] mt-[12px] items-start lg:items-center">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Tips", path: "/tips" },
              { name: "News", path: "/news" },
              { name: "Products", path: "/products" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`hover:text-[rgb(249,102,46)] ${
                    pathname === item.path ? "text-orange-500 font-[500]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 hover:text-gray-100 text-white bg-[rgb(249,102,46)] px-[12px] py-[6px] rounded-md transition-transform duration-300 hover:-translate-y-2"
              >
                Register a company
                <GoArrowRight size={30} className="text-white font-bold" />
              </Link>
            </li>
            <li className="ml-3">
              <Link
                href="/signin"
                className={`hover:text-[rgb(249,102,46)] ${
                  pathname === "/signin" ? "text-[rgb(249,102,46)] font-semibold" : ""
                }`}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Appears when `isOpen` is true) */}
      {isOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full bg-white shadow-md z-50 p-4">
          <ul className="flex flex-col text-[#9da4b0] gap-4 text-lg">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Tips", path: "/tips" },
              { name: "News", path: "/news" },
              { name: "Products", path: "/products" },
            ].map((item) => (
              <li key={item.path} className="border-b pb-2">
                <Link
                  href={item.path}
                  className={`hover:text-[rgb(249,102,46)] ${
                    pathname === item.path ? "text-orange-500 font-[500]" : ""
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 hover:text-gray-100 text-white bg-[rgb(249,102,46)] px-[12px] py-[0px] rounded-md transition-transform duration-300 hover:-translate-y-2"
                onClick={() => setIsOpen(false)}
              >
                Register a company
                <GoArrowRight size={30} className="text-white font-bold" />
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/signin"
                className={`hover:text-[rgb(249,102,46)] ${
                  pathname === "/signin" ? "text-[rgb(249,102,46)] font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
