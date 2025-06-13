import React, { useState } from "react";

const Transaction = () => {
  const tableData = [
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "GDJZ...EG5M",
      block: 18042199,
      operations: 1,
      time: "5 hours ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "0987654321",
      block: 18042199,
      operations: 1,
      time: "4 hours ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "1122334455",
      block: 18042199,
      operations: 1,
      time: "3 hours ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "UVWX...KL8Q",
      block: 18042199,
      operations: 1,
      time: "2 hours ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "ABCD...MN9R",
      block: 18042199,
      operations: 1,
      time: "1 hour ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "JKLM...OP0S",
      block: 18042199,
      operations: 1,
      time: "10 minutes ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "7766554433",
      block: 18042199,
      operations: 1,
      time: "Just now",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "STUV...ST2U",
      block: 18042199,
      operations: 1,
      time: "6 hours ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "GHIJ...UV3V",
      block: 18042199,
      operations: 1,
      time: "Yesterday",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "VWXY...WX4W",
      block: 18042199,
      operations: 1,
      time: "2 days ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "4455667788",
      block: 18042199,
      operations: 1,
      time: "2 days ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "LMNO...OP6Y",
      block: 18042199,
      operations: 1,
      time: "2 days ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "MNOP...QR7Z",
      block: 18042199,
      operations: 1,
      time: "2 days ago",
    },
    {
      "#": "4f0a40fc0efcef6e6d1e55eaa6c9f29bfb77a9bd91f7f77ecc0aeff10fb9a892",
      source: "OPQR...ST8A",
      block: 18042199,
      operations: 1,
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
    const headers = ["#", "Source", "Block", "Operation", "Time"];
    const rows = tableData.map((row, index) => [
      row["#"],
      row.source,
      row.block,
      row.operations,
      row.time,
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transaction_data.csv";
    link.click();
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mt-12">
      <div className="flex-grow p-4 mb-14">
        <div className="flex flex-col w-full">
          <h1 className="text-xl font-medium py-2 px-4 border-b border-gray-300 w-full">
            Transactions
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
                  Source
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Block
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
              {getPageData().map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200 text-gray-700  max-w-xs text-center overflow-hidden truncate text-xs">
                    {row["#"]}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-white bg-darkblue rounded-xl max-w-xs text-center overflow-hidden truncate text-xs h-auto w-0">
                    {row.source}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.block}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {row.operations}
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

export default Transaction;
