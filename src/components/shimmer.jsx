const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-50 min-h-screen">
      {Array(14)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[250px] h-[300px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl shadow-md overflow-hidden relative shimmer-card"
          >
            {/* Simulated content sections */}
            <div className="w-full h-[60%] bg-gray-300 animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer-overlay"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
