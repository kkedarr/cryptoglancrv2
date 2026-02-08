const CoinNews = ({ coin }) => {
  return (
    <div className="card space-y-4">
      <h3 className="font-medium">External Links</h3>

      <ul className="text-sm space-y-2">
        {coin.links.homepage[0] && (
          <li>
            <a href={coin.links.homepage[0]} target="_blank" className="text-accent-light">
              Official Website →
            </a>
          </li>
        )}
        {coin.links.whitepaper && (
          <li>
            <a href={coin.links.whitepaper} target="_blank" className="text-accent-light">
              Whitepaper →
            </a>
          </li>
        )}
        {coin.links.subreddit_url && (
          <li>
            <a href={coin.links.subreddit_url} target="_blank" className="text-accent-light">
              Reddit →
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CoinNews;
