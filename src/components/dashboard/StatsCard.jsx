const StatsCard = ({ title, value, change, negative }) => {
  return (
    <div
      className="
        bg-surface-light dark:bg-surface-dark

        border border-border-light dark:border-border-dark

        rounded-xl p-4 transition
      "
    >
      <p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
        {title}
      </p>

      <div className="flex items-center justify-between mt-2">
        <h3 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
          {value ?? "—"}
        </h3>

        {change !== undefined && (
          <span
            className={`text-xs font-semibold ${
              negative ? "text-danger" : "text-success"
            }`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;