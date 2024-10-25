// src/components/ReportDetail.js
import React from "react";

function ReportDetail({ report, goBack }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <button
        onClick={goBack}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Reports
      </button>
      <h2 className="text-3xl font-bold mb-4">{report.name} - Details</h2>
      <p className="mb-4 text-gray-700">{report.description}</p>

      <div className="space-y-4">
        {Object.entries(report.data).map(([key, value], index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">{key}:</h3>
            {typeof value === "object" ? (
              <ul className="list-disc list-inside">
                {Object.entries(value).map(([subKey, subValue], subIndex) => (
                  <li key={subIndex}>
                    <span className="font-medium">{subKey}:</span> {subValue}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportDetail;
