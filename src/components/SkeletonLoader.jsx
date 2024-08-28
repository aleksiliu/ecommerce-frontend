const SkeletonLoader = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-lg transform shadow-md duration-300 hover:scale-105 hover:shadow-lg">

      <div className="relative w-full h-48 bg-gray-300 rounded-t-lg"></div>
  
      <div className="p-4 flex flex-col justify-between h-48">
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        </div>
        
        <div className='flex justify-between gap-4'>
          <div className="h-10 bg-gray-300 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
