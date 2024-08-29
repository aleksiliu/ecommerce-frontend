import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-lg transform shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-48 bg-gray-300 rounded-t-lg animate-pulse"></div>
  
      <div className="p-4 flex flex-col justify-between mb-2">
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 animate-pulse"></div>
        </div>
        
        <div className='flex justify-between gap-4 mt-8'>
          <div className="h-10 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
