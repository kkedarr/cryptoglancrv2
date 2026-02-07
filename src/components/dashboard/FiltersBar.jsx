const FiltersBar = ({
  search,
  onSearch,
  sort,
  onSort,
  marketCap,
  onMarketCap,
  onRefresh,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-3">

      {/* Search + Refresh */}
      <div className="flex gap-2 w-full md:w-auto">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search coins..."
          className="flex-1 md:w-56 rounded-md px-3 py-2 text-xs md:text-sm
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            text-text-primary-light dark:text-text-primary-dark
            placeholder:text-text-secondary-light
            focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark
          "
        />

        <button
          onClick={onRefresh}
          className="px-4 py-2 rounded-md text-xs md:text-sm font-medium
            bg-primary-light dark:bg-primary-dark
            text-white
            hover:opacity-90 transition
          "
        >
          Refresh
        </button>
      </div>

      {/* Sort + Market Cap */}
      <div className="flex gap-2 w-full md:w-auto">
        <select
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          className="rounded-md px-3 py-2 text-xs md:text-sm
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            text-text-primary-light dark:text-text-primary-dark
          "
        >
          <option value="marketcap_desc">Market Cap (High → Low)</option>
          <option value="price_asc">Price (Low → High)</option>
        </select>

        <select
          value={marketCap}
          onChange={(e) => onMarketCap(e.target.value)}
          className="rounded-md px-3 py-2 text-xs md:text-sm
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            text-text-primary-light dark:text-text-primary-dark
          "
        >
          <option value="all">All Market Caps</option>
          <option value="large">Large Cap</option>
          <option value="mid">Mid Cap</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;
