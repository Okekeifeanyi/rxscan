// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import Logo from "../assets/images/RalexLogo.png";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { href: "/operations", label: "Operations" },
//     { href: "/payments", label: "Payments" },
//     { href: "/transactions", label: "Transactions" },
//     { href: "/blocks", label: "Blocks" },
//   ];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
//   }, [isMobileMenuOpen]);

//   return (
//     <header className="bg-white text-darkblue fixed top-0 w-full z-50 shadow-md">
//       <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <a href="/" className="hover:text-gray-400">
//             <img src={Logo} alt="Ralex Logo" className="h-10 w-10" />
//           </a>
//           <h2 className="text-darkblue text-xl font-bold">Ralexscan</h2>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 px-2 py-1 font-productSans"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Buttons */}
//         <div className="hidden lg:flex space-x-4">
     
//           <Link to="/wallet">
//           <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 px-4 rounded-full hover:bg-darkblue hover:text-white transition duration-300">
//             Wallet
//           </button>
//           </Link>
//           <Link to="/wallet">
//           <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 px-4 rounded-full hover:bg-darkblue hover:text-white transition duration-300">
//             Signin
//           </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="block lg:hidden text-gray-400 focus:outline-none"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle Mobile Menu"
//           aria-expanded={isMobileMenuOpen}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white text-darkblue shadow-lg z-10`}
//       >
//         <nav className="flex flex-col space-y-4 py-4 px-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
//               onClick={closeMobileMenu}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//         {/* Mobile Menu Buttons */}
//         <div className="flex flex-col space-y-4 mt-4 px-6">
    
//           <Link to="/wallet">
//           <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 rounded-full hover:bg-darkblue hover:text-white transition duration-300">
//             Wallet
//           </button>
//           </Link>
   
//         </div>
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-2 text-gray-700"
//           onClick={closeMobileMenu}
//           aria-label="Close Mobile Menu"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/images/RalexLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/operations", label: "Operations" },
    { href: "/payments", label: "Payments" },
    { href: "/transactions", label: "Transactions" },
    { href: "/blocks", label: "Blocks" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white text-darkblue fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="relative flex items-center justify-between py-4 px-4 md:px-6 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="hover:text-gray-400">
            <img src={Logo} alt="Ralex Logo" className="h-10 w-10" />
          </Link>
          <h2 className="text-darkblue text-xl font-bold">Ralexscan</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 px-2 py-1 font-productSans"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/wallet">
            <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 px-4 rounded-full hover:bg-darkblue hover:text-white transition duration-300">
              Wallet
            </button>
          </Link>
          <Link to="/wallet">
            <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 px-4 rounded-full hover:bg-darkblue hover:text-white transition duration-300">
              Signin
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="block lg:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"} overflow-hidden`}>
        <div className="bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex flex-col space-y-4">
            <Link to="/wallet" onClick={closeMobileMenu}>
              <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 rounded-full hover:bg-darkblue hover:text-white transition duration-300 w-full">
                Wallet
              </button>
            </Link>
            <Link to="/wallet" onClick={closeMobileMenu}>
              <button className="border-2 border-darkblue text-black font-productSans font-medium py-2 rounded-full hover:bg-darkblue hover:text-white transition duration-300 w-full">
                Signin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
