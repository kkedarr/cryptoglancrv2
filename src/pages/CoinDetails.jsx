import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCoinDetails, fetchCoinMarketChart } from "../api/coinApi";
import CoinPriceChart from "../components/coin/CoinPriceChart";
import CoinStats from "../components/coin/CoinStats";
import CoinNews from "../components/coin/CoinNews";
import { Heart } from "lucide-react";

const RANGE_MAP = {
  "1D": 1,
  "7D": 7,
  "1M": 30,
  "1Y": 365,
};

const CoinDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState(null);
  const [chart, setChart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeRange, setActiveRange] = useState("7D");
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    loadData(7);
  }, [id]);

  const loadData = async (days) => {
    setLoading(true);

    const [details, chartData] = await Promise.all([
      fetchCoinDetails(id),
      fetchCoinMarketChart(id, days),
    ]);

    setCoin(details);
    setChart(chartData);
    setLoading(false);
  };

  const handleRangeChange = (range) => {
    setActiveRange(range);
    loadData(RANGE_MAP[range]);
  };

  if (loading || !coin) return <div className="h-64" />;

  const price = coin.market_data.current_price.usd;
  const change = coin.market_data.price_change_percentage_24h;

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-sm flex items-center justify-between">

        <div className="flex items-center gap-4">
          <img
            src={coin.image.large}
            className="h-12 w-12 rounded-full"
          />

          <div>
            <h1 className="text-lg font-semibold">
              {coin.name}{" "}
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                ({coin.symbol.toUpperCase()})
              </span>
            </h1>

            <div className="flex items-end gap-3">
              <p className="text-3xl font-bold">
                ${price.toLocaleString()}
              </p>

              <span
                className={`text-sm font-semibold ${
                  change >= 0 ? "text-success" : "text-danger"
                }`}
              >
                {change.toFixed(2)}% (24H)
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            ← Back to Market
          </button>

          <button className="p-2 rounded-full border border-border-light dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= CHART ================= */}
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">

            <h3 className="font-semibold text-lg">Price Chart</h3>

            <div className="flex items-center gap-3">

              {["1D", "7D", "1M", "1Y"].map((range) => (
                <button
                  key={range}
                  onClick={() => handleRangeChange(range)}
                  className={`px-3 py-1.5 rounded-md text-xs border font-medium transition
                    ${
                      range === activeRange
                        ? "bg-indigo-600/10 border-indigo-600 text-indigo-600"
                        : "border-border-light dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/10"
                    }
                  `}
                >
                  {range}
                </button>
              ))}

              {/* Volume Toggle */}
              <button
                onClick={() => setShowVolume((v) => !v)}
                className="flex items-center gap-2 ml-2"
              >
                <div
                  className={`w-10 h-5 rounded-full relative transition ${
                    showVolume ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-3 w-3 bg-white rounded-full transition ${
                      showVolume ? "right-1" : "left-1"
                    }`}
                  />
                </div>
                <span className="text-xs">Volume</span>
              </button>
            </div>
          </div>

          <CoinPriceChart
            data={chart}
            showVolume={showVolume}
          />
        </div>

        {/* ================= NEWS ================= */}
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-sm">
          <CoinNews coin={coin} />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
