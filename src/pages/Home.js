import React from "react";
import { Front } from "../container/Front";
import { Products } from "../container/Products";
import { Subscribe } from "../container/Subscribe";

export const Home = () => {
  return (
    <>
      <Front />
      <Products />
      <Subscribe />
    </>
  );
};
