const Stat = ({ label, value }) => (
  <div className="p-4 rounded-lg border">
    <p className="text-xs text-text-secondary-light">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

const CoinStats = ({ coin }) => {
  const md = coin.market_data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Stat label="Market Cap" value={`$${md.market_cap.usd.toLocaleString()}`} />
      <Stat label="Circulating Supply" value={`${md.circulating_supply.toLocaleString()} ${coin.symbol.toUpperCase()}`} />
      <Stat label="All-Time High" value={`$${md.ath.usd.toLocaleString()}`} />
      <Stat label="24h Volume" value={`$${md.total_volume.usd.toLocaleString()}`} />
    </div>
  );
};

export default CoinStats;
