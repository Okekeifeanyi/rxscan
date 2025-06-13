import React, {useState}from "react";


const Payments = () => {
   
  const tableData = [
    {
      payment: "Created Account GDJZ...EG5M with balance 10",
      transaction: "7d785cfb073c54b92402c9d8102...",
      type: "create_account",
      account: "1234567890",
      time: "5 hours ago",
    },
    {
      payment: "Paid 50 π for subscription",
      transaction: "8e845dff173d67d93503bce8203...",
      type: "payment",
      account: "0987654321",
      time: "4 hours ago",
    },
    {
      payment: "Transferred 15 π to UVWX...KL8Q",
      transaction: "9f956eff283e78f04614cdf9304...",
      type: "payment",
      account: "1122334455",
      time: "3 hours ago",
    },
    {
      payment: "Created Account UVWX...KL8Q with balance 25",
      transaction: "1a157f10493f89g15725def1405...",
      type: "create_account",
      account: "5566778899",
      time: "2 hours ago",
    },
    {
      payment: "Received 30 π from ABCD...MN9R",
      transaction: "2b268g215a4g90h26836ef2516...",
      type: "payment",
      account: "3344556677",
      time: "1 hour ago",
    },
    {
      payment: "Created Account JKLM...OP0S with balance 50",
      transaction: "3c379h326b5h01i37947fg3627...",
      type: "create_account",
      account: "9988776655",
      time: "10 minutes ago",
    },
    {
      payment: "Paid 100 π for premium service",
      transaction: "4d480i437c6i12j48058gh4738...",
      type: "payment",
      account: "7766554433",
      time: "Just now",
    },
    {
      payment: "Created Account STUV...ST2U with balance 60",
      transaction: "5e591j548d7j23k59169hi5849...",
      type: "create_account",
      account: "6655443322",
      time: "6 hours ago",
    },
    {
      payment: "Transferred 25 π to GHIJ...UV3V",
      transaction: "6f602k659e8k34l60270ij6950...",
      type: "payment",
      account: "5544332211",
      time: "Yesterday",
    },
    {
      payment: "Created Account VWXY...WX4W with balance 45",
      transaction: "7g713l76af9l45m71381jk7a61...",
      type: "create_account",
      account: "4455667788",
      time: "2 days ago",
    },
    {
      payment: "Paid 30 π for hosting services",
      transaction: "7g713l76af9l45m71381jk7a61...",
      type: "payment",
      account: "4455667788",
      time: "2 days ago",
    },
    {
      payment: "Created Account LMNO...OP6Y with balance 55",
      transaction: "7g713l76af9l45m71381jk7a61...",
      type: "create_account",
      account: "4455667788",
      time: "2 days ago",
    },
    {
      payment: "Transferred 60 π to MNOP...QR7Z",
      transaction: "7g713l76af9l45m71381jk7a61...",
      type: "payment",
      account: "4455667788",
      time: "2 days ago",
    },
    {
      payment: "Created Account OPQR...ST8A with balance 70",
      transaction: "7g713l76af9l45m71381jk7a61...",
      type: "create_account",
      account: "4455667788",
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
    const headers = ["Account", "Payments", "Transaction", "Type", "Time"];
    const rows = tableData.map((row, index) => [
      row.account,
      row.payment,
      row.transaction,
      row.type,
      row.time,
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payments_data.csv";
    link.click();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mt-12">
      <div className="flex-grow p-4 mb-14">
        <div className="flex flex-col w-full">
          <h1 className="text-xl font-medium py-2 px-4 border-b border-gray-300 w-full">
            PAYMENTS
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
                  Payments
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
                    {row.payment}
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



export default Payments;
