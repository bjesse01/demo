import React from "react";

export const Card = ({ data }) => {
  return (
    <div className="p-2 w-[150px]">
      <div>
        <img
          src={data.images[0]}
          alt="coverImage"
          className="w-[140px] h-[180px] rounded-lg"
        />
      </div>
      <h1 className="text-xl font-semibold ml-2 mt-1">{data.name}</h1>
      <div className="ml-2 mt-1">
        <p>
          <span>&#8358;</span>
          {data.price}
        </p>
      </div>
    </div>
  );
};
