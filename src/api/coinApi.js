import axios from "axios";

const BASE = "https://api.coingecko.com/api/v3";

export const fetchCoinDetails = async (id) => {
  const { data } = await axios.get(
    `${BASE}/coins/${id}`,
    {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
      },
    }
  );
  return data;
};

export const fetchCoinMarketChart = async (id, days = 7) => {
  const { data } = await axios.get(
    `${BASE}/coins/${id}/market_chart`,
    {
      params: { vs_currency: "usd", days },
    }
  );
  return data.prices;
};
