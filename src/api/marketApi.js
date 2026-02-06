const BASE_URL = "/api";

export async function fetchMarketCoins(params = {}) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/coins?${query}`);
  if (!res.ok) throw new Error("Failed to fetch market data");

  return res.json();
}

export async function fetchGlobalStats() {
  const res = await fetch(`${BASE_URL}/global`);
  if (!res.ok) throw new Error("Failed to fetch global stats");

  const json = await res.json();
  return json.data; // 👈 IMPORTANT (explained below)
}
