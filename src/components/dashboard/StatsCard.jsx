const StatsCard = ({ title, value, change, negative }) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <p className="text-xs text-gray-500">{title}</p>

      <div className="flex items-center justify-between mt-2">
        <h3 className="font-semibold text-lg">
          {value ?? "—"}
        </h3>

        {change !== undefined && (
          <span
            className={`text-xs font-medium ${
              negative ? "text-red-500" : "text-green-500"
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
