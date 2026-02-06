const FiltersBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-3">

      {/* ROW 1 — Search + Refresh */}
      <div className="flex gap-2 w-full md:w-auto">
        <input
          placeholder="Search coins..."
          className="
            flex-1 md:w-56
            rounded-md px-3 py-2
            text-xs md:text-sm

            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark

            text-text-primary-light dark:text-text-primary-dark
            placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-light

            hover:border-primary-light dark:border-primary-light

            focus:outline-none focus:ring-2
            focus:ring-accent-light dark:focus:ring-accent-dark

            transition
          "
        />

        <button
          className="
            shrink-0 px-4 py-2 rounded-md
            text-xs md:text-sm font-medium

            bg-primary-light dark:bg-primary-dark
            text-white

            border border-primary-light dark:border-primary-dark

            hover:opacity-90
            active:scale-[0.98]

            focus:outline-none focus:ring-2
            focus:ring-accent-light dark:focus:ring-accent-dark

            transition
          "
        >
          Refresh
        </button>
      </div>

      {/* ROW 2 — Sort + Market Cap */}
      <div className="flex gap-2 w-full md:w-auto">
        <select
          className="
            flex-1 md:flex-none
            rounded-md px-3 py-2
            text-xs md:text-sm

            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark

            text-text-primary-light dark:text-text-primary-dark

            hover:border-primary-light dark:hover:border-primary-dark

            focus:outline-none focus:ring-2
            focus:ring-accent-light dark:focus:ring-accent-dark

            transition
          "
        >
          <option>Market Cap (High → Low)</option>
          <option>Price (Low → High)</option>
        </select>

        <select
          className="
            flex-1 md:flex-none
            rounded-md px-3 py-2
            text-xs md:text-sm

            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark

            text-text-primary-light dark:text-text-primary-dark

            hover:border-primary-light dark:hover:border-primary-dark

            focus:outline-none focus:ring-2
            focus:ring-accent-light dark:focus:ring-accent-dark

            transition
          "
        >
          <option>All Market Caps</option>
          <option>Large Cap</option>
          <option>Mid Cap</option>
        </select>
      </div>

    </div>
  );
};

export default FiltersBar;
