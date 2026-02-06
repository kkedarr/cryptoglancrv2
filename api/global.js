export default async function handler(req, res) {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/global"
  );

  if (!response.ok) {
    return res.status(500).json({ error: "Failed to fetch global stats" });
  }

  const data = await response.json();

  res.setHeader(
    "Cache-Control",
    "s-maxage=60, stale-while-revalidate=300"
  );

  res.status(200).json(data);
}
