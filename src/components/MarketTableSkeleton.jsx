const Row = () => (
  <div className="animate-pulse grid grid-cols-[1.4fr_1fr_1fr_auto] gap-3 px-4 py-3 rounded-xl border">
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-gray-200" />
      <div className="space-y-1">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-2 w-10 bg-gray-200 rounded" />
      </div>
    </div>

    <div className="space-y-2 text-right">
      <div className="h-3 w-16 bg-gray-200 rounded ml-auto" />
      <div className="h-2 w-10 bg-gray-200 rounded ml-auto" />
    </div>

    <div className="h-6 bg-gray-200 rounded" />
    <div className="h-4 w-4 bg-gray-200 rounded-full ml-auto" />
  </div>
);

const MarketTableSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  );
};

export default MarketTableSkeleton;
