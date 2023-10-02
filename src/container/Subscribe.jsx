import React from "react";

export const Subscribe = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-14 px-5"
      id="subscribe"
    >
      <h1 className="text-white sm:text-4xl text-3xl text-center mt-5 tracking-wide font-semibold">
        Get notified on each updates.
      </h1>
      <div className="sm:w-[650px] w-full my-7">
        <form className="flex flex-row">
          <input
            type="email"
            className="outline-none tracking-wider py-1 px-3 border-2 sm:text-xl text-base border-white bg-transparent w-full text-white placeholder:italic"
            placeholder="Enter your email address"
          />
          <input
            type="submit"
            value="Subscribe"
            className="py-2 px-4 border-2 sm:text-xl text-base border-white bg-transparent text-white uppercase font-bold hover:bg-white hover:text-black"
          />
        </form>
      </div>
      <p className="sm:w-[550px] w-full text-white text-lg font-medium text-center tracking-wide">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
        placeat ullam eveniet qui enim explicabo culpa nesciunt nisi maxime quos
        doloribus porro esse vero sint harum. Labore nemo, odit dicta
        consectetur cum doloribus nobis? Quod quam numquam voluptas temporibus
        tempora!
      </p>
    </div>
  );
};
