import React from "react";

export const Products = () => {
  return (
    <div className="w-full h-screen bg-white p-2">
      <div className="text-black flex justify-center items-center flex-col w-full py-14">
        <h3 className="text-gray-500 font-semibold text-lg uppercase tracking-wide">
          Popular products
        </h3>
        <h1 className="font-bold text-4xl tracking-wider mb-3">Our Products</h1>
        <p className="font-semibold text-gray-600 sm:w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          pariatur eveniet quo iure similique ex sequi voluptate non vel
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Id, quo!
        </p>
      </div>

      <div className="flex">
        <div className="bg-black flex-1">hello</div>
        <div className="bg-blue-100 flex-1">why</div>
        <div className="bg-red-100 flex-1">wait</div>
      </div>
    </div>
  );
};
