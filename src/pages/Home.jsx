import StatsCard from "../components/dashboard/StatsCard";
import FiltersBar from "../components/dashboard/FiltersBar";
import MarketTable from "../components/dashboard/MarketTable";

const Home = () => {
  return (
    <div className="space-y-8">

      {/* =====================================================
          MOBILE LAYOUT
      ====================================================== */}
      <div className="md:hidden space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-sm md:text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            Crypto Market Overview
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs md:text-sm mt-1">
            Track real-time cryptocurrency prices and trends
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatsCard
            title="Total Market Cap"
            value="$2.34T"
            change="↑ +1.24%"
          />
          <StatsCard
            title="24h Volume"
            value="$98.7B"
            change="↓ -0.56%"
            negative
          />
          <StatsCard
            title="BTC Dominance" 
            value="52.3%" 
            change="↑ +0.1%" 
          />

          <StatsCard 
            title="Market Sentiment" 
            value="Bullish" 
          />
        </div>

        {/* Filters */}
        <FiltersBar />

        {/* ✅ Market (mobile handled inside MarketTable now) */}
        <MarketTable />
      </div>

      {/* =====================================================
          DESKTOP LAYOUT
      ====================================================== */}
      <div className="hidden md:block space-y-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Crypto Market Overview
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Track real-time cryptocurrency prices and trends
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Total Market Cap" value="$2.34T" change="↑ +2.1%" />
          <StatsCard title="24h Volume" value="$120B" change="↓ -0.5%" negative />
          <StatsCard title="BTC Dominance" value="52.3%" change="↑ +0.1%" />
          <StatsCard title="Market Sentiment" value="Bullish" />
        </div>

        {/* Filters */}
        <FiltersBar />

        {/* Table */}
        <MarketTable />
      </div>
    </div>
  );
};

export default Home;
