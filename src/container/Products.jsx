import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../components/Loading";
import { Card } from "../components/Card";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://mainserver-78df.onrender.com/data";

    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full bg-gray-200 py-10" id="product">
      <div className="text-black flex justify-center items-center flex-col w-full mb-10 mt-4">
        <h3 className="text-gray-500 font-semibold text-lg uppercase tracking-wide">
          Popular products
        </h3>
        <h1 className="font-bold text-4xl tracking-wider mb-3">Our Products</h1>
        <p className="font-semibold text-gray-600 sm:w-[400px] sm:px-0 px-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          pariatur eveniet quo iure similique ex sequi voluptate non vel
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Id, quo!
        </p>
      </div>

      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-10">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>

      <div className="w-full text-center mt-4">
        <h3 className="text-2xl font-semibold text-gray-500">
          For more Products
        </h3>
        <button className="outline-none mt-3 px-8 py-1 text-xl font-semibold rounded-lg text-white bg-gray-900">
          Visit Shop
        </button>
      </div>
    </div>
  );
};
