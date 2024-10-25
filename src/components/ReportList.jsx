// src/components/ReportList.js
import React, { useState } from "react";
import ReportDetail from "./ReportDetail";

const reportsData = [
  {
    id: 1,
    name: "Sales Report",
    description: "Monthly sales performance.",
    data: {
      totalSales: "$500,000",
      regions: {
        North: "$200,000",
        South: "$150,000",
        East: "$100,000",
        West: "$50,000",
      },
    },
  },
  {
    id: 2,
    name: "Customer Satisfaction Report",
    description: "Customer feedback analysis.",
    data: {
      totalReviews: 1500,
      satisfaction: {
        positive: 1200,
        neutral: 200,
        negative: 100,
      },
    },
  },
  {
    id: 3,
    name: "Inventory Report",
    description: "Stock levels and turnover.",
    data: {
      totalStock: 1000,
      categories: {
        Electronics: 300,
        Furniture: 200,
        Clothing: 500,
      },
    },
  },
];

function ReportList() {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const goBack = () => {
    setSelectedReport(null);
  };

  return (
    <div className="container mx-auto p-4">
      {selectedReport ? (
        <ReportDetail report={selectedReport} goBack={goBack} />
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Reports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportsData.map((report) => (
              <div
                key={report.id}
                className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                onClick={() => handleReportClick(report)}
              >
                <h3 className="text-xl font-semibold mb-2">{report.name}</h3>
                <p className="text-gray-600">{report.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportList;
