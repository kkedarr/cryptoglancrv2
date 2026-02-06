import { useEffect, useState } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import FiltersBar from "../components/dashboard/FiltersBar";
import MarketTable from "../components/dashboard/MarketTable";
import { fetchGlobalStats, fetchMarketCoins, } from "../api/marketApi";
import MarketTableSkeleton from "../components/MarketTableSkeleton";

const Home = () => {
  const [globalStats, setGlobalStats] = useState(null);
  const [coins, setCoins] = useState([]); // ✅ THIS WAS MISSING
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [global, market] = await Promise.all([
          fetchGlobalStats(),
          fetchMarketCoins(),
        ]);

        setGlobalStats(global);
        setCoins(market); // ✅ coins now defined
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <MarketTableSkeleton />
      </div>
    );
  }

  if (!globalStats || !coins.length) {
    return (
      <div className="text-center text-gray-400 py-12">
        Market data temporarily unavailable
      </div>
    );
  }


  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          title="Total Market Cap"
          value={`$${(globalStats.total_market_cap.usd / 1e12).toFixed(2)}T`}
          change={`${globalStats.market_cap_change_percentage_24h_usd.toFixed(2)}%`}
          negative={globalStats.market_cap_change_percentage_24h_usd < 0}
        />

        <StatsCard
          title="24h Volume"
          value={`$${(globalStats.total_volume.usd / 1e9).toFixed(1)}B`}
        />

        <StatsCard
          title="BTC Dominance"
          value={`${globalStats.market_cap_percentage.btc.toFixed(1)}%`}
        />

        <StatsCard
          title="Market Sentiment"
          value={
            globalStats.market_cap_change_percentage_24h_usd >= 0
              ? "Bullish"
              : "Bearish"
          }
        />
      </div>

      <FiltersBar />

      {/* ✅ coins is now defined */}
      <MarketTable coins={coins} />
    </div>
  );
};

export default Home;
