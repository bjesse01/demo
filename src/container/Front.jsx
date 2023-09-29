import React from "react";

export const Front = () => {
  return (
    <div className="flex w-full h-screen items-center p-10 text-white">
      <div>
        <h1 className="font-bold text-4xl tracking-wide mb-3">Shop with us</h1>
        <p className="sm:w-[700px] text-xl font-normal mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          architecto voluptatem incidunt molestiae quo quisquam quibusdam,
          tempora doloribus corporis Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quibusdam, natus.
        </p>
        <button className="outline-none border-2 border-white px-5 py-1 text-xl font-semibold rounded-sm hover:bg-black hover:text-white hover:border-none hover:rounded-lg hover:py-2 hover:px-5 capitalize">
          Shop now
        </button>
      </div>
    </div>
  );
};
