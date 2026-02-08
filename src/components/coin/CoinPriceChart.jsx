import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const CoinPriceChart = ({ data = {}, showVolume }) => {
  if (!data.prices) return null;

  const chartData = data.prices.map((p, i) => ({
    time: new Date(p[0]).toLocaleDateString(),
    price: p[1],
    volume: data.total_volumes?.[i]?.[1] || 0,
  }));

  return (
    <div className="h-[360px]">

      <ResponsiveContainer width="100%" height="100%">

        <ComposedChart data={chartData}>

          <CartesianGrid
            strokeDasharray="3 3"
            strokeOpacity={0.25}
          />

          <XAxis
            dataKey="time"
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 11 }}
            tickFormatter={(v) =>
              `$${Number(v).toLocaleString()}`
            }
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(v) =>
              `$${Number(v).toLocaleString()}`
            }
          />

          <Legend verticalAlign="bottom" />

          {showVolume && (
            <Bar
              dataKey="volume"
              fill="#6366f1"
              opacity={0.2}
              barSize={20}
            />
          )}

          <Line
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
          />

        </ComposedChart>

      </ResponsiveContainer>

    </div>
  );
};

export default CoinPriceChart;
