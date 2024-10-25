// src/components/CodeMeetsDesign.js
import React from "react";

function CodeMeetsDesign() {
  return (
    <div className="flex h-screen">
      {/* Left Side: UI Design */}
      <div className="flex-1 bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-8">User Interface</h1>
        <div className="space-y-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Click Me
          </button>
          <input
            type="text"
            placeholder="Enter text"
            className="border border-gray-300 rounded-lg py-2 px-4 w-80"
          />
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Sample Card</h2>
            <p className="text-gray-600">This is a UI card component</p>
          </div>
        </div>
      </div>

      {/* Right Side: Code */}
      <div className="flex-1 bg-gray-900 text-gray-300 p-10 font-mono">
        <h1 className="text-3xl font-bold text-white mb-8">Code</h1>
        <pre className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-x-auto">
          <code>
{`
<button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
  Click Me
</button>
<input type="text" placeholder="Enter text" className="border border-gray-300 rounded-lg py-2 px-4 w-80" />
<div className="bg-white p-6 shadow-lg rounded-lg">
  <h2 className="text-xl font-semibold">Sample Card</h2>
  <p className="text-gray-600">This is a UI card component</p>
</div>
`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeMeetsDesign;
