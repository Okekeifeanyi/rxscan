// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import Operation from "./component/Operation";
// import Block from "./component/Block";
// import Transaction from "./component/Transaction";
// import Payments from "./component/Payments";
// import Layout from "./component/Layout";
// import Wallet from "./component/walletComp/Wallet";
// import CreateWallet from "./component/walletComp/CreateWallet ";
// import WalletCreated  from "./component/walletComp/WalletCreated";
// import WalletBalance from "./component/walletComp/WalletBalance";
// import SendPage from "./component/walletComp/SendPage ";
// import Footer from "./component/Footer";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/operations" element={<Operation />} />
//           <Route path="/transactions" element={<Transaction />} />
//           <Route path="/blocks" element={<Block />} />
//           <Route path="/payments" element={<Payments />} />
//           <Route path="/wallet" element={<Wallet />} />
//           <Route path="/createwallet" element={<CreateWallet />} />
//           <Route path="/wallet-created" element={<WalletCreated />} />
//           <Route path="/wallet-balance" element={<WalletBalance />} />
//           <Route path="/send" element={<SendPage />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Layout>
//          <Footer/>
//     </Router>
 
//   );
// }
// export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Operation from "./component/Operation";
import Block from "./component/Block";
import Transaction from "./component/Transaction";
import Payments from "./component/Payments";
import Layout from "./component/Layout";
import Wallet from "./component/walletComp/Wallet";
import CreateWallet from "./component/walletComp/CreateWallet";
import WalletCreated from "./component/walletComp/WalletCreated";
import WalletBalance from "./component/walletComp/WalletBalance";
import SendPage from "./component/walletComp/SendPage";
import Footer from "./component/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-darkblue transition-colors duration-500">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded shadow-md"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/operations" element={<Operation />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/blocks" element={<Block />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/createwallet" element={<CreateWallet />} />
            <Route path="/wallet-created" element={<WalletCreated />} />
            <Route path="/wallet-balance" element={<WalletBalance />} />
            <Route path="/send" element={<SendPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
