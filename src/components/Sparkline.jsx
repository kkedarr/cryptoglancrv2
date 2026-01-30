import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const Sparkline = ({ data = [], positive }) => {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        data,
        borderColor: positive ? "#16A34A" : "#DC2626",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div
      className="
        w-[48px] h-[18px]
        md:w-28 md:h-10
        flex items-center
      "
    >
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }, // better for mobile
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
          elements: {
            line: {
              borderWidth: 1.6, // thinner looks better on mobile
            },
          },
        }}
      />
    </div>
  );
};

export default Sparkline;
