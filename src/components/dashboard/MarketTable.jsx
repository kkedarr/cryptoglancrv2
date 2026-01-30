import Sparkline from "../Sparkline";
import FavoriteButton from "../FavoriteButton";

/**
 * Temporary mock data.
 * Later this will come from CoinGecko API.
 */
const coins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$68,500",
    change: "+1.25%",
    cap: "$1.35T",
    sparkline: [65000, 65200, 64800, 66000, 67000, 68500],
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,800",
    change: "+3.10%",
    cap: "$450B",
    sparkline: [3600, 3620, 3580, 3700, 3750, 3800],
  },
  {
    id: "ripple",
    name: "Ripple",
    symbol: "XRP",
    price: "$0.62",
    change: "-0.75%",
    cap: "$30B",
    sparkline: [0.68, 0.66, 0.65, 0.64, 0.63, 0.62],
  },
];

const MarketTable = () => {
  return (
    <>
      {/* =====================================================
          MOBILE — FIGMA-MATCHED CARD ROW
      ====================================================== */}
      <div className="md:hidden space-y-3">
        {/* Mobile column headings */}
        <div
          className="
            grid grid-cols-[1.4fr_1fr_1fr_auto]
            gap-3
            px-4
            text-[11px]
            font-semibold
            uppercase
            tracking-wide
            text-text-secondary-light
            dark:text-text-secondary-dark
          "
        >
          <span>Coin</span>
          <span className="text-right">Price</span>
          <span className="text-center">7d</span>
          <span className="text-right">Fav</span>
        </div>

        {coins.map((coin) => {
          const positive = !coin.change.startsWith("-");

          return (
            <div
              key={coin.id}
              className="
                grid grid-cols-[1.4fr_1fr_1fr_auto]
                items-center
                gap-2
                rounded-xl
                border border-border-light dark:border-border-dark
                bg-surface-light dark:bg-surface-dark
                px-4 py-3
              "
            >
              {/* COLUMN 1 — Coin */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-9 w-9 rounded-full bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center text-xs font-semibold text-accent-light dark:text-accent-dark">
                  {coin.symbol[0]}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate text-text-primary-light dark:text-text-primary-dark">
                    {coin.name}
                  </p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {coin.symbol}
                  </p>
                </div>
              </div>

              {/* COLUMN 2 — Price & Change */}
              <div className="text-right space-y-1">
                <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                  {coin.price}
                </p>

                <span
                  className={`inline-block text-[11px] font-semibold px-2 py-[2px] rounded-full
                    ${
                      positive
                        ? "bg-success/10 text-success"
                        : "bg-danger/10 text-danger"
                    }
                  `}
                >
                  {coin.change}
                </span>
              </div>

              {/* COLUMN 3 — Sparkline */}
              <div className="flex justify-center">
                <Sparkline data={coin.sparkline} positive={positive} />
              </div>

              {/* COLUMN 4 — Favorite */}
              <div className="flex justify-end">
                <FavoriteButton coin={coin} />
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          DESKTOP — ORIGINAL TABLE (UNCHANGED)
      ====================================================== */}
      <div className="hidden md:block bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark">
            <tr>
              <th className="p-3 text-left">Coin</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">24h Change</th>
              <th className="p-3 text-left">Market Cap</th>
              <th className="p-3 text-left">7d Trend</th>
              <th className="p-3 text-left w-10">Favorite</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => {
              const positive = !coin.change.startsWith("-");

              return (
                <tr
                  key={coin.id}
                  className="border-t border-border-light dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <td className="p-3 font-medium text-text-primary-light dark:text-text-primary-dark">
                    {coin.name}{" "}
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">
                      {coin.symbol}
                    </span>
                  </td>

                  <td className="p-3 text-text-primary-light dark:text-text-primary-dark">
                    {coin.price}
                  </td>

                  <td
                    className={`p-3 font-medium ${
                      positive ? "text-success" : "text-danger"
                    }`}
                  >
                    {coin.change}
                  </td>

                  <td className="p-3 text-text-primary-light dark:text-text-primary-dark">
                    {coin.cap}
                  </td>

                  <td className="p-3">
                    <Sparkline data={coin.sparkline} positive={positive} />
                  </td>

                  <td className="p-3">
                    <FavoriteButton coin={coin} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MarketTable;
