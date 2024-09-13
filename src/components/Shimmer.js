import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-700 h-6 w-48 rounded-md"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array(5).fill("").map((_, index) => (
          <div key={index} className="bg-gray-700 h-64 w-full rounded-md"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
