import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";

/* =====================
   GLOBAL STATS
===================== */
app.get("/api/global", async (req, res) => {
  try {
    const r = await fetch(`${COINGECKO_BASE}/global`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch global stats" });
  }
});

/* =====================
   MARKET COINS
===================== */
app.get("/api/coins", async (req, res) => {
  try {
    const { page = 1, perPage = 50, order = "market_cap_desc" } = req.query;

    const params = new URLSearchParams({
      vs_currency: "usd",
      order,
      per_page: perPage,
      page,
      sparkline: "true",
      price_change_percentage: "24h",
    });

    const r = await fetch(
      `${COINGECKO_BASE}/coins/markets?${params}`
    );

    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch market data" });
  }
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
