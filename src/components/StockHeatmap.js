import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const StockHeatmap = () => {
  const [stockData, setStockData] = useState([]);
  const heatmapRef = useRef(null);
  const apiKey = '7LKZcOQ51rCNh5h8ERe3jh9gS7wpsrnduRbT3Qdn'; // Replace with your StockData.org API key
  const stockSymbol = 'AAPL,TSLA,MSFT'; 

  useEffect(() => {
    const dateFrom = '2024-09-01';
    const dateTo = '2024-10-01';  // Limiting the date range for now

    // Fetch stock data
    fetch(`https://api.stockdata.org/v1/data/eod?symbols=${stockSymbol}&date_from=${dateFrom}&date_to=${dateTo}&api_token=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const processedData = processStockData(data);
        setStockData(processedData);
      })
      .catch(error => console.error('Error fetching stock data:', error));
  }, [stockSymbol, apiKey]);

  useEffect(() => {
    if (stockData.length > 0) {
      createHeatmap();  // Create the heatmap when data is ready
    }
  }, [stockData]);

  const processStockData = (data) => {
    const historicalPrices = data.data;

    // Processing stock data with potential multiple values per day
    const processed = historicalPrices.map((dayData) => {
      return {
        date: dayData.date,  // Date of the stock data
        close: dayData.close  // Closing price (use for multiple points in a day if available)
      };
    });

    return processed;
  };

const createHeatmap = () => {
const svg = d3.select(heatmapRef.current);

const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background-color", "rgba(0, 0, 0, 0.7)")
    .style("color", "white")
    .style("padding", "8px")
    .style("border-radius", "4px")
    .style("pointer-events", "none")
    .style("font-size", "12px")
    .style("z-index", "10")
    .style("opacity", 0);  // Initially hidden

const margin = { top: 20, right: 20, bottom: 20, left: 50 };
const width = 800 - margin.left - margin.right;

// Ensure that the 'days' array is correctly pulling unique dates from the stock data
const days = [...new Set(stockData.map(d => d3.timeFormat('%Y-%m-%d')(new Date(d.date))))];
const svgHeight = days.length * 25;
const height = svgHeight - margin.top - margin.bottom;

svg.attr("height", svgHeight);
svg.selectAll("*").remove();  // Clear the SVG before drawing

const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Assume 24 hours or fixed time intervals on the X-axis
const xScale = d3.scaleBand()
    .domain(d3.range(24))  // 24-hour timespan
    .range([0, width])
    .padding(0.05);

// Correct Y-axis with unique dates as labels
const yScale = d3.scaleBand()
    .domain(days)  // Use the unique dates on the Y-axis
    .range([0, height])
    .padding(0.2);

// Color scale based on stock prices
const colorScale = d3.scaleSequential(d3.interpolateRdYlGn)
    .domain([d3.min(stockData, d => d.close), d3.max(stockData, d => d.close)]);

// Create heatmap cells based on time (x) and date (y)
g.selectAll(".hour")
    .data(stockData)
    .enter().append("rect")
    .attr("x", (d, i) => xScale(i % 24))  // Time-based on 24-hour range
    .attr("y", d => yScale(d3.timeFormat('%Y-%m-%d')(new Date(d.date))))  // Correct Y-scale with unique dates
    .attr("width", xScale.bandwidth())
    .attr("height", yScale.bandwidth())
    .attr("fill", d => colorScale(d.close))
    .on("mouseover", (event, d) => {
    tooltip.transition().duration(200).style("opacity", 0.9);  // Show the tooltip
    tooltip.html(`
        <strong>Date:</strong> ${d3.timeFormat('%Y-%m-%d')(new Date(d.date))} <br/>
        <strong>Closing Price:</strong> $${d.close.toFixed(2)}
    `)
    .style("left", (event.pageX + 10) + "px")  // Position the tooltip
    .style("top", (event.pageY - 28) + "px");
    })
    .on("mousemove", (event) => {
    tooltip.style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");  // Update tooltip position
    })
    .on("mouseout", () => {
    tooltip.transition().duration(500).style("opacity", 0);  // Hide the tooltip
    });

// Add Y-axis
g.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).tickValues(days));  // Show all date labels
};
    

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Stock Price Heatmap</h2>
      <svg ref={heatmapRef} className="border border-gray-300 shadow-md" width="800"></svg>
    </div>
  );
};

export default StockHeatmap;
