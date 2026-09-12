function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">

              <div className="flex items-center justify-center rounded-lg">
                <img src="/src/assets/logo-text.png" alt="" />
              </div>

            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">

              <a href="#">GitHub</a>

              <a href="#">Twitter </a>

              <a href="#">LinkedIn</a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">


            <li>
              <a href="#" className="hover:text-gray-900">
                 Home
            </a>
                </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>

              
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">

              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">

              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                 Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-900">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;