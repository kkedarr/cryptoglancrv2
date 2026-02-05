const BASE_URL = "/api";

export async function fetchGlobalStats() {
  const res = await fetch(`${BASE_URL}/global`);
  if (!res.ok) throw new Error("Failed to fetch global stats");
  const json = await res.json();
  return json.data;
}

export async function fetchMarketCoins(options = {}) {
  const {
    page = 1,
    perPage = 50,
    order = "market_cap_desc",
  } = options;

  const params = new URLSearchParams({
    vs_currency: "usd",
    order,
    per_page: String(perPage),
    page: String(page),
    sparkline: "true",
    price_change_percentage: "24h",
  });

  const res = await fetch(
    `${BASE_URL}/coins/markets?${params.toString()}`
  );

  if (!res.ok) throw new Error("Failed to fetch market data");
  return res.json();
}
