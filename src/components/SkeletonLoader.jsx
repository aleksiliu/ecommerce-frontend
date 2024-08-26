const SkeletonLoader = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg transform shadow-md duration-300">
      <div className="relative w-full h-48 bg-gray-300 rounded-t-lg"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="mt-auto w-full h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
