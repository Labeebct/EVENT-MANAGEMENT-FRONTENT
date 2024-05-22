import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import axiosInstance from "../../../instance/axiosInstance";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BookingLineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/admin/booking_chart");
        const { status, data } = response;

        if (status === 200 && data.chartData) {
          const labels = data.chartData.map(booking =>
            new Date(booking.bookedDate).toLocaleDateString()
          );
          const amounts = data.chartData.map(booking => booking.amount);

          setChartData({
            labels,
            datasets: [
              {
                label: "Booking Amount",
                data: amounts,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching booking data", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="flex flex-col justify-between" style={{ width: '80%', height: '400px', margin: 'auto' }}>
      <h2 className="py-1 font-inter font-medium text-center">Booking Amounts Over the Last Week</h2>
      {chartData ? <Line data={chartData} width={800} height={300} /> : <p>Loading...</p>}
    </div>
  );
};

export default BookingLineChart;
