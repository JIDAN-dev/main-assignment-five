import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}className="text-2xl text-gray-700 md:hidden"aria-label="Open menu" >
          ☰
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./logo-text.png"alt="Dev Stack"className="h-9 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <a href="#"className="font-bold text-pink-600 hover:text-gray-900">
            Home
          </a>

          <a href="#"className="text-sm font-bold text-gray-600 hover:text-gray-900">
            Technologies
          </a>

          <a href="#"className="text-sm font-bold text-gray-600 hover:text-gray-900"  >
            Projects
          </a>

          <a href="#"className="text-sm font-bold text-gray-600 hover:text-gray-900">
            About
          </a>

          <a href="#"className="text-sm font-bold text-gray-600 hover:text-gray-900">
            Contact
          </a>

        </div>

        {/* Sign In + Sign Up */}
        <div className="flex items-center gap-1 sm:gap-2">

          <button className="px-2 py-2 text-xs font-medium text-gray-700 sm:px-3 sm:text-sm">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-3 py-2 text-xs font-medium text-white sm:px-4 sm:text-sm">
            Sign Up
          </button>

        </div>

      </div>

      {/* Mobile Menu all */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <a href="#"className="font-bold text-pink-600"onClick={() => setMenuOpen(false)} >
              Home
            </a>

            <a href="#"className="font-bold text-gray-600"onClick={() => setMenuOpen(false)}>
              Technologies
            </a>

            <a href="#"className="font-bold text-gray-600"onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#"className="font-bold text-gray-600"onClick={() => setMenuOpen(false)} >
              About
            </a>

            <a href="#"className="font-bold text-gray-600"onClick={() => setMenuOpen(false)}  >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;