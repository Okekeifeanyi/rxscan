import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const tableData = [
    {
      account: "1234567890",
      operation: "Transferred 100 π",
      time: "5 hours ago",
      block: "#12345",
      ops: "67890",
      transactions: "5/10",
      "#": "18042291",
      transaction2: "5 / 0",
      block2: "18042199",
      operation2: "1",
      "2#": "4fa40fc.....",
    },
    {
      account: "0987654321",
      operation: "Received 50 π",
      time: "4 hours ago",
      block: "#12346",
      ops: "67891",
      transactions: "6/10",
      "#": "18042291",
      transaction2: "7/ 0",
      block2: "18042199",
      operation2: "1",
      "2#": "4fa40fc0......",
    },
    {
      account: "1122334455",
      operation: "Transferred 200 π",
      time: "3 hours ago",
      block: "#12347",
      ops: "67892",
      transactions: "7/10",
      "#": "18042291",
      transaction2: "8 / 0",
      block2: "18042199",
      operation2: "1",
      "2#": "4fa40fc0efc.....",
    },
    {
      account: "5566778899",
      operation: "Received 300 π",
      time: "2 hours ago",
      block: "#12348",
      ops: "67893",
      transactions: "8/10",
      "#": "18042291",
      transaction2: "6 / 0",
      block2: "18042199",
      operation2: "1",
      "2#": "4fa40fc0e.....",
    },
  ];
  return (
    <div className="bg-gray-300 min-h-screen px-4 sm:px-6 py-8">
      {/* Mainnet Metrics */}
      <div className="bg-white p-4 sm:p-6 mt-6 max-w-3xl mx-auto rounded-md shadow-md">
        <h3 className="text-lg sm:text-xl font-medium py-2 border-b border-gray-300">
          Mainnet Metrics
        </h3>
        <div className="flex flex-col space-y-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">
                  Total Migrated Mining Rewards
                </td>
                <td className="px-4 py-3 text-sm">400000000 Ralex</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">
                  Currently Locked Mining Rewards
                </td>
                <td className="px-4 py-3 text-sm">400000000 Ralex</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Operations and Transactions */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6">
        <div className="flex-grow bg-white p-4 sm:p-6 rounded-md shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg sm:text-xl font-medium border-b border-gray-300">
              Latest Operations
            </h1>
            <a href="/operations">
              <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 focus:outline-none">
                View All
              </button>
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left border-b border-gray-200">
                    Account
                  </th>
                  <th className="px-4 py-2 text-left border-b border-gray-200">
                    Operation
                  </th>
                  <th className="px-4 py-2 text-left border-b border-gray-200">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm bg-darkblue rounded-xl text-white w-0 h-0">
                      {row.account}
                    </td>
                    <td className="px-4 py-2 text-sm">{row.operation}</td>
                    <td className="px-4 py-2 text-sm">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0 space-y-6 lg:w-1/3">
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between">
              <h1 className="text-lg sm:text-xl font-medium border-b border-gray-300">
                Latest Transactions
              </h1>
              <a href="/transactions">
                <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 focus:outline-none">
                  View All
                </button>
              </a>
            </div>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      #
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Block
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Ops
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm">{row["2#"]}</td>
                      <td className="px-4 py-2 text-sm">{row.block2}</td>
                      <td className="px-4 py-2 text-sm">{row.operation2}</td>
                      <td className="px-4 py-2 text-sm">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between">
              <h1 className="text-lg sm:text-xl font-medium border-b border-gray-300">
                Latest Blocks
              </h1>
              <a href="/blocks">
                <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 focus:outline-none">
                  View All
                </button>
              </a>
            </div>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      #
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Transaction
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm">{row["#"]}</td>
                      <td className="px-4 py-2 text-sm">{row.transaction2}</td>
                      <td className="px-4 py-2 text-sm">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
