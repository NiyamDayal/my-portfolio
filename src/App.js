// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CodeMeetsDesign from "./components/CodeMeetsDesign";

import ReportList from "./components/ReportList";
import StockHeatmap from "./components/StockHeatmap";
import Home from "./components/Home";
import GlassmorphicShowcase from "./components/Glassmorphic";

function App() {
  return (
    <Router>
    <div className="App bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/codemeetsdesign">Code Meets Design</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/stock-heatmap">Stock Heatmap</Link>
          </li>
          <li>
            <Link to="/glassmorphic">Glassmorphic</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codemeetsdesign" element={<CodeMeetsDesign />} />
        <Route path="/reports" element={<ReportList />} />
        <Route path="/stock-heatmap" element={<StockHeatmap />} />
        <Route path="/glassmorphic" element={<GlassmorphicShowcase />} />
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
