import React from 'react';
import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-30">
      <div className="md:hidden px-8 py-12 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Dev Stack" className="w-52" />
        </div>

        {/* Description */}
        <p className="mt-6 text-[16px] leading-8 text-slate-500">
          Curated tools, technologies, and resources for developers building modern software.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center items-center gap-6 text-[18px] text-slate-600">
          <a href="#">GitHub</a>

          <span>•</span>

          <a href="#">Twitter</a>

          <span>•</span>

          <a href="#">LinkedIn</a>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200"></div>

        {/* Copyright */}
        <div className="flex justify-between items-center text-[16px] text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <div className="hidden md:block px-10 py-12 lg:px-30">
        {/* Main Footer */}
        <div className="flex justify-between items-center mr-30">
          {/* Brand */}
          <div>
            <img src={logo} alt="Dev Stack" className="w-32" />

            <p className="mt-4 max-w-sm text-[12px] leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-5 text-[13px] text-slate-700">
              <a href="#" className="hover:text-[#DB2777]">
                GitHub
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                Twitter
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">PRODUCT</h3>

            <ul className="mt-4 space-y-3 text-[13px] text-slate-500">
              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">COMPANY</h3>

            <ul className="mt-4 space-y-3 text-[13px] text-slate-500">
              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">LEGAL</h3>

            <ul className="mt-4 space-y-3 text-[13px] text-slate-500">
              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#DB2777]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-100"></div>

        {/* Bottom */}
        <div className="flex items-center justify-between text-[13px] text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-7">
            <a href="#" className="hover:text-[#DB2777]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#DB2777]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
