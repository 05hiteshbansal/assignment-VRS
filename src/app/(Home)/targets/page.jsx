"use client";
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const TargetPage = () => {
  const targetData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Target',
        data: [1000, 1200, 1500, 1300, 1600, 1800],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Achieved',
        data: [900, 1100, 1400, 1200, 1500, 1700],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const revenueDeficitData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue Deficit',
        data: [100, 100, 100, 100, 100, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const customerReachData = {
    labels: ['Region A', 'Region B', 'Region C', 'Region D'],
    datasets: [
      {
        label: 'Customer Reach',
        data: [300, 400, 500, 600],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Targeted Reach',
        data: [350, 450, 550, 650],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto md:p-4 text-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Target Dashboard</h1>
      
      <div className="grid lg:grid-cols-2 sm:grid-cols-0 gap-8">
        <div className="bg-white md:p-6 p-1 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Monthly Targets vs Achieved</h2>
          <Bar data={targetData} />
        </div>
        
        <div className="bg-white md:p-6 p-1 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Revenue Deficit</h2>
          <Line data={revenueDeficitData} />
        </div>
      </div>
      
      <div className="bg-white md:p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Customer Reach vs Targeted Reach</h2>
        <Bar data={customerReachData} />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Special Offers</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Offer 1: 20% off on all products</li>
          <li>Offer 2: Buy one get one free</li>
          <li>Offer 3: Free shipping on orders over $50</li>
        </ul>
      </div>
    </div>
  );
};

export default TargetPage;