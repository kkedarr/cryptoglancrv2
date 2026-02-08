import { useEffect, useMemo, useState } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import FiltersBar from "../components/dashboard/FiltersBar";
import MarketTable from "../components/dashboard/MarketTable";
import { fetchGlobalStats, fetchMarketCoins } from "../api/marketApi";
import MarketTableSkeleton from "../components/MarketTableSkeleton";
import { useSearch } from "../context/SearchContext";



const Home = () => {
  const [globalStats, setGlobalStats] = useState(null);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // FILTER STATE
  const { query, setQuery } = useSearch();
  const [sort, setSort] = useState("marketcap_desc");
  const [marketCap, setMarketCap] = useState("all");

  useEffect(() => {
    async function loadData() {
      try {
        const [global, market] = await Promise.all([
          fetchGlobalStats(),
          fetchMarketCoins(),
        ]);

        setGlobalStats(global);
        setCoins(market);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // FILTER + SORT LOGIC
  const filteredCoins = useMemo(() => {
    let data = [...coins];

    // Search (name + symbol)
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (coin) =>
          coin.name.toLowerCase().includes(q) ||
          coin.symbol.toLowerCase().includes(q)
      );
    }

    // Market cap filter
    if (marketCap !== "all") {
      data = data.filter((coin) => {
        if (marketCap === "large") return coin.market_cap > 10_000_000_000;
        if (marketCap === "mid")
          return (
            coin.market_cap >= 1_000_000_000 &&
            coin.market_cap <= 10_000_000_000
          );
        return true;
      });
    }

    // Sorting
    if (sort === "marketcap_desc") {
      data.sort((a, b) => b.market_cap - a.market_cap);
    }

    if (sort === "price_asc") {
      data.sort((a, b) => a.current_price - b.current_price);
    }

    return data;
  }, [coins, query, sort, marketCap]);

  /* ---------------- Loading ---------------- */
  if (loading) {
    return (
      <div className="space-y-6">
        <MarketTableSkeleton />
      </div>
    );
  }

  /* ---------------- Error ---------------- */
  if (!globalStats || !coins.length) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          Market data temporarily unavailable
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          title="Total Market Cap"
          value={`$${(globalStats.total_market_cap.usd / 1e12).toFixed(2)}T`}
          change={`${globalStats.market_cap_change_percentage_24h_usd.toFixed(
            2
          )}%`}
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

      {/* ================= FILTERS ================= */}
      <FiltersBar
        search={query}
        onSearch={setQuery}
        sort={sort}
        onSort={setSort}
        marketCap={marketCap}
        onMarketCap={setMarketCap}
        onRefresh={() => window.location.reload()}
      />

      {/* ================= TABLE ================= */}
      <MarketTable coins={filteredCoins} />
    </div>
  );
};

export default Home;
