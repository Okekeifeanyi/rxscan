import React, { useState } from "react";

const Operation = () => {
  const tableData = [
    {
      account: "1234567890",
      operation: "Transferred 100 π",
      time: "5 hours ago",
      transaction: "#12345",
      type: "67890",
    },
    {
      account: "0987654321",
      operation: "Received 50 π",
      time: "4 hours ago",
      transaction: "#12346",
      type: "67891",
    },
    {
      account: "1122334455",
      operation: "Transferred 200 π",
      time: "3 hours ago",
      transaction: "#12347",
      type: "67892",
    },
    {
      account: "5566778899",
      operation: "Received 300 π",
      time: "2 hours ago",
      transaction: "#12348",
      type: "67893",
    },
    {
      account: "3344556677",
      operation: "Transferred 120 π",
      time: "1 hour ago",
      transaction: "#12349",
      type: "67894",
    },
    {
      account: "9988776655",
      operation: "Received 500 π",
      time: "10 minutes ago",
      transaction: "#12350",
      type: "67895",
    },
    {
      account: "7766554433",
      operation: "Transferred 30 π",
      time: "Just now",
      transaction: "#12351",
      type: "67896",
    },
    {
      account: "6655443322",
      operation: "Received 200 π",
      time: "6 hours ago",
      transaction: "#12352",
      type: "67897",
    },
    {
      account: "5544332211",
      operation: "Transferred 150 π",
      time: "Yesterday",
      transaction: "#12353",
      type: "67898",
    },
    {
      account: "4455667788",
      operation: "Received 80 π",
      time: "2 days ago",
      transaction: "#12354",
      type: "67899",
    },
    {
      account: "4455667788",
      operation: "Received 80 π",
      time: "2 days ago",
      transaction: "#12354",
      type: "67899",
    },
    {
      account: "4455667788",
      operation: "Received 80 π",
      time: "2 days ago",
      transaction: "#12354",
      type: "67899",
    },
    {
      account: "4455667788",
      operation: "Received 80 π",
      time: "2 days ago",
      transaction: "#12354",
      type: "67899",
    },
    {
      account: "4455667788",
      operation: "Received 80 π",
      time: "2 days ago",
      transaction: "#12354",
      type: "67899",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to slice the table data into chunks based on current page
  const getPageData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return tableData.slice(startIndex, endIndex);
  };
  const exportToCSV = () => {
    const headers = ["Account", "Operation", "Transaction", "Type", "Time"];
    const rows = tableData.map((row, index) => [
      row.account,
      row.operation,
      row.transaction,
      row.type,
      row.time,
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "operations_data.csv";
    link.click();
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mt-12">
      <div className="flex-grow p-4 mb-14">
        <div className="flex flex-col w-full">
          <h1 className="text-xl font-medium py-2 px-4 border-b border-gray-300 w-full">
            OPERATIONS
          </h1>
          {/* Pagination buttons */}
          <div className="flex justify-between mt-4">
            {currentPage > 1 && (
              <button
                onClick={handlePreviousPage}
                className="px-3 py-1.5 text-xs border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-auto"
              >
                Previous page
              </button>
            )}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ml-auto"
            >
              Next page
            </button>
          </div>
        </div>

        {/* Table container */}
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Account
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Operation
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Transaction
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Type
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {getPageData().map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200 text-white bg-darkblue rounded-xl max-w-xs text-center overflow-hidden truncate text-xs h-auto w-0">
                    {row.account}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.operation}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.transaction}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.type}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
        <div className="flex justify-center items-center h-20 mt-4">
          <button
            onClick={exportToCSV}
            className="px-3 py-1.5 text-xs border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100"
          >
            Export data as CSV
          </button>
        </div>
      </div>
    </div>

  );
};

export default Operation;
