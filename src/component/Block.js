import React, { useState } from "react";

const Block = () => {
  const tableData = [
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "5 hours ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "4 hours ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "3 hours ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "2 hours ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "1 hour ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "10 minutes ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "Just now",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "6 hours ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "Yesterday",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "2 days ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "2 days ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "2 days ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "2 days ago",
    },
    {
      "#": "18042291",
      transactions: "12 successful / 0 failed",
      time: "2 days ago",
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
    const headers = ["#", "Transactions", "Time"];
    const rows = tableData.map((row) => [row["#"], row.transactions, row.time]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "blocks_data.csv";
    link.click();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mt-12">
      <div className="flex-grow p-4 mb-14">
        <div className="flex flex-col w-full">
          <h1 className="text-xl font-medium py-2 px-4 border-b border-gray-300 w-full">
            Blocks
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
              {getPageData().map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b">
                  <td className="px-6 py-3 text-xs text-gray-700 truncate">
                    {row["#"]}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.transactions}
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

export default Block;
