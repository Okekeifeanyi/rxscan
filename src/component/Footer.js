import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/RalexLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#05163b] text-white py-12 px-6 sm:px-12 md:px-20 font-roboto">
      <div className="max-w-7xl mx-auto flex flex-col xs:flex-row md:flex-row justify-between gap-10">
        {/* Logo & Brand */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ralex Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-2xl font-bold tracking-wide">Powered by Ralex</span>
          </div>
          <p className="text-sm text-gray-300 max-w-xs">
            Ralexscan is a Block Explorer and Analytics Platform for Ralex, a decentralized smart contracts platform.
          </p>
        </div>

        {/* Footer Menu */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-base font-semibold mb-2">Quick Links</span>
          <Link to="/ralex-whitepaper/introduction" className="hover:underline">
            Whitepaper
          </Link>
          <Link to="/support" className="hover:underline">
            Support / FAQs
          </Link>
          <Link to="/Conditions" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacyPolicy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-3">
          <span className="text-base font-semibold mb-1">Follow Us</span>
          <div className="flex gap-4 text-lg">
            <a
              href="https://x.com/Ralex_Tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100083292881505"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.linkedin.com/company/101612701/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.youtube.com/@RalexNetworks-life"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://t.me/+N8A_yFcsTdYzODM0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>

      {/* Rights */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Ralex Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
