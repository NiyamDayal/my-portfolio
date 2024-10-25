import React from "react";
import { useNavigate } from "react-router-dom";

// Sample GIF URLs (replace with your own GIFs)
const codeMeetsDesignGif = "https://media.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif";
const reportsGif = "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif";
const stockHeatmapGif = "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif";

const Home = () => {
  const navigate = useNavigate();  // React Router hook for navigation

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to my portfolio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Code Meets Design Card */}
        <div 
          className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
          onClick={() => navigate("/codemeetsdesign")}  // Navigate on click
        >
          <img src={codeMeetsDesignGif} alt="Code Meets Design GIF" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Code Meets Design</h2>
            <p className="text-gray-600 mt-2">Explore how code integrates with design seamlessly.</p>
          </div>
        </div>
        
        {/* Reports Card */}
        <div 
          className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
          onClick={() => navigate("/reports")}  // Navigate on click
        >
          <img src={reportsGif} alt="Reports GIF" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Reports</h2>
            <p className="text-gray-600 mt-2">Dive into concise and insightful reports.</p>
          </div>
        </div>
        
        {/* Stock Heatmap Card */}
        <div 
          className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
          onClick={() => navigate("/stock-heatmap")}  // Navigate on click
        >
          <img src={stockHeatmapGif} alt="Stock Heatmap GIF" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Stock Heatmap</h2>
            <p className="text-gray-600 mt-2">Visualize stock performance with an interactive heatmap.</p>
          </div>
        </div>

        <div 
          className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
          onClick={() => navigate("/glassmorphic")}  // Navigate on click
        >
          <img src={stockHeatmapGif} alt="glassmorphic GIF" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Glasmorphic</h2>
            <p className="text-gray-600 mt-2">Visualize glassmorphic images.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
