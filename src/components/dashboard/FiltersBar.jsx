const FiltersBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-3">

      {/* ROW 1 — Search + Refresh */}
      <div className="flex gap-2 w-full md:w-auto">
        <input
          placeholder="Search coins..."
          className="
            border rounded-md px-3 py-2
            text-xs md:text-sm
            flex-1 md:w-56
          "
        />

        <button
          className="
            bg-indigo-600 text-white
            px-3 py-2 rounded-md
            text-xs md:text-sm
            shrink-0
          "
        >
          Refresh
        </button>
      </div>

      {/* ROW 2 — Market Cap Filters */}
      <div className="flex gap-2 w-full md:w-auto">
        <select className="border rounded-md px-3 py-2 text-xs md:text-sm flex-1 md:flex-none">
          <option>Market Cap (High → Low)</option>
          <option>Price (Low → High)</option>
        </select>

        <select className="border rounded-md px-2 py-2 text-xs md:text-sm flex-1 md:flex-none">
          <option>All Market Caps</option>
          <option>Large Cap</option>
          <option>Mid Cap</option>
        </select>
      </div>

    </div>
  );
};

export default FiltersBar;
