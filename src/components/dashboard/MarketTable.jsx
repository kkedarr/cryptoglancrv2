import Sparkline from "../Sparkline";
import FavoriteButton from "../FavoriteButton";

const formatPrice = (value) =>
  `$${value.toLocaleString(undefined, {
    minimumFractionDigits: value < 1 ? 4 : 2,
  })}`;

const formatMarketCap = (value) => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  return `$${value.toLocaleString()}`;
};

const MarketTable = ({ coins = [] }) => {
  return (
    <>
      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div className="md:hidden space-y-3">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-3 px-4 text-[11px] font-semibold uppercase tracking-wide text-text-secondary-light dark:text-text-secondary-dark">
          <span>Coin</span>
          <span className="text-right">Price</span>
          <span className="text-center">7d</span>
          <span className="text-right">Fav</span>
        </div>

        {coins.map((coin) => {
          const positive = coin.price_change_percentage_24h >= 0;

          return (
            <div
              key={coin.id}
              className="
                grid grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-3
                rounded-xl border
                border-border-light dark:border-border-dark
                bg-surface-light dark:bg-surface-dark
                px-4 py-3
                hover:shadow-sm
                transition
              "
            >
              {/* Coin */}
              <div className="flex items-center gap-3 min-w-0">
                {coin.image ? (
                  <img
                    src={coin.image}
                    alt={coin.name}
                    loading="lazy"
                    className="h-7 w-7 rounded-full ring-1 ring-border-light dark:ring-border-dark"
                  />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center text-xs font-semibold text-text-primary-light dark:text-text-primary-dark">
                    {coin.symbol.toUpperCase()[0]}
                  </div>
                )}

                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate text-text-primary-light dark:text-text-primary-dark">
                    {coin.name}
                  </p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {coin.symbol.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="text-right space-y-1">
                <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                  {formatPrice(coin.current_price)}
                </p>

                <span
                  className={`inline-flex items-center text-[11px] font-semibold px-2 py-[2px] rounded-full ${
                    positive
                      ? "bg-success/10 text-success"
                      : "bg-danger/10 text-danger"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>

              {/* Sparkline */}
              <div className="flex justify-center">
                <Sparkline
                  data={coin.sparkline_in_7d?.price || []}
                  positive={positive}
                />
              </div>

              {/* Favorite */}
              <div className="flex justify-end">
                <FavoriteButton coin={coin} />
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div className="hidden md:block bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/2 dark:bg-white/5 border-b border-border-light dark:border-border-dark">
            <tr className="text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wide text-[11px]">
              <th className="p-4 text-left">Coin</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">24h Change</th>
              <th className="p-4 text-left">Market Cap</th>
              <th className="p-4 text-left">7d Trend</th>
              <th className="p-4 w-10"></th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin, idx) => {
              const positive = coin.price_change_percentage_24h >= 0;

              return (
                <tr
                  key={coin.id}
                  className="
                    border-t border-border-light dark:border-border-dark
                    hover:bg-black/5 dark:hover:bg-white/5
                    transition
                  "
                >
                  <td className="p-4 font-medium">
                    <div className="flex items-center gap-3 min-w-0">
                      {coin.image ? (
                        <img
                          src={coin.image}
                          alt={coin.name}
                          loading="lazy"
                          className="h-6 w-6 rounded-full ring-1 ring-border-light dark:ring-border-dark"
                        />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center text-xs font-semibold text-text-primary-light dark:text-text-primary-dark">
                          {coin.symbol.toUpperCase()[0]}
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate text-text-primary-light dark:text-text-primary-dark">
                          {coin.name}
                        </p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                          {coin.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-text-primary-light dark:text-text-primary-dark">
                    {formatPrice(coin.current_price)}
                  </td>

                  <td
                    className={`p-4 font-semibold ${
                      positive ? "text-success" : "text-danger"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>

                  <td className="p-4 text-text-primary-light dark:text-text-primary-dark">
                    {formatMarketCap(coin.market_cap)}
                  </td>

                  <td className="p-4">
                    <Sparkline
                      data={coin.sparkline_in_7d?.price || []}
                      positive={positive}
                    />
                  </td>

                  <td className="p-4">
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
