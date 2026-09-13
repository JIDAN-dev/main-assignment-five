function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center justify-center rounded-lg">
              <img src="./logo-text.png" alt="Dev Stack" />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links dot dekhabe */}
            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-gray-600 md:justify-start md:gap-5">
              <a href="#" className="hover:text-gray-900">GitHub</a>
              <span className="text-gray-400 md:hidden">&bull;</span>
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <span className="text-gray-400 md:hidden">&bull;</span>
              <a href="#" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>

          {/* Product  er jonno*/}
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">Technologies</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company er jonno*/}
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal er jonno*/}
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom er jonno*/}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;