export default async function handler(req, res) {
  const { page = 1, perPage = 50, order = "market_cap_desc" } = req.query;

  const params = new URLSearchParams({
    vs_currency: "usd",
    order,
    per_page: perPage,
    page,
    sparkline: "true",
    price_change_percentage: "24h",
  });

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?${params}`
  );

  if (!response.ok) {
    return res.status(500).json({ error: "Failed to fetch market data" });
  }

  const data = await response.json();

  res.setHeader(
    "Cache-Control",
    "s-maxage=60, stale-while-revalidate=300"
  );

  res.status(200).json(data);
}
