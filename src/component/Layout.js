import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Layout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="bg-gray-300 min-h-screen px-4 sm:px-6 md:px-12 py-8 mt-14">
      {/* Search Bar and Icons */}
      <div className="mb-0">
        <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <div className="flex items-center flex-1 space-x-4 border rounded-3xl p-4 sm:p-6 max-w-full md:max-w-3xl">
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by account, block, or transaction ID"
              className="flex-1 px-4 py-2 sm:py-3 border-none focus:ring-2 focus:ring-blue-400 bg-white rounded-full text-sm md:text-base"
            />
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-gray-600 rounded-full hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              <i className="fas fa-question-circle text-lg sm:text-2xl"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-4 sm:right-16 top-16 w-80 sm:w-[30rem] bg-white shadow-2xl rounded-3xl border border-gray-200 p-4 sm:p-6 z-50">
                {/* Close Button */}
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                <h3 className="font-semibold text-lg sm:text-xl mb-4 text-center">
                  Search By
                </h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-base text-center">
                      Account ID
                    </h4>
                    <p className="text-sm text-gray-500 mb-2 text-center">
                      Also called a Public Key or Public Address
                    </p>
                    <input
                      type="search"
                      placeholder="BUZFSIMVRQXNOZAQGQSGGG9SUM4WPFCS4X7664AZFFBGAO7OKWTNR"
                      className="w-full p-2 sm:p-3 rounded-xl border border-gray-300"
                    />
                  </li>
                  <li>
                    <h4 className="font-semibold text-base text-center">
                      Transaction Hash
                    </h4>
                    <input
                      type="search"
                      placeholder="Enter Transaction Hash"
                      className="w-full p-2 sm:p-3 rounded-xl border border-gray-300"
                    />
                  </li>
                  <li>
                    <h4 className="font-semibold text-base text-center">
                      Block
                    </h4>
                    <input
                      type="search"
                      placeholder="16769676"
                      className="w-full p-2 sm:p-3 rounded-xl border border-gray-300"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-200"
          >
            <i className="fas fa-search text-lg sm:text-xl"></i>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
