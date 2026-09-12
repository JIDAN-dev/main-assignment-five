function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-2">
          <div>
            <img src="/src/assets/logo-text.png" alt="" />
          </div>

          
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-pink-600 font-bold hover:text-gray-900">
            Home
          </a>

          <a href="#" className="text-sm text-gray-600 font-bold hover:text-gray-900">
            Technologies
          </a>

          <a href="#" className="text-sm text-gray-600 font-bold hover:text-gray-900">
            Projects
          </a>

          <a href="#" className="text-sm text-gray-600 font-bold hover:text-gray-900">
            About
          </a>

          <a href="#" className="text-sm text-gray-600 font-bold hover:text-gray-900">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 text-sm font-medium text-gray-700 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;