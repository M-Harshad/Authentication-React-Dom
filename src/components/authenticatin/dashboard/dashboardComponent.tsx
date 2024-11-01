import React, { useEffect, useState, } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

interface SalesData {
  date: string;
  sales: number;
}

const DashboardComponent: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/sales');
        const data = await response.json();
        console.log('Fetched Data:', data);
        setSalesData(data);
        console.log(salesData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: salesData.map(item => item.date), // Corrected
    datasets: [
      {
        label: 'Sales',
        data: salesData.map(item => item.sales),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[1000px] mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
      {salesData.length === 0 ? (
        <p>No sales data available.</p>
      ) : (
        <Line data={data} options={options} />
      )}
    {console.log(salesData.length)}
    </div>

  );
  
};

export default DashboardComponent;
