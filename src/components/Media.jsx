import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const Media = () => {
  return (
    <div
      className={`bg-gray-200 justify-between items-center flex py-1 px-5 w-full`}
    >
      <div className="flex items-center sm:ml-8">
        <div className="bg-black p-1 text-white text-lg rounded-full mx-2 cursor-pointer">
          <a href="foo">
            <FaFacebookF />
          </a>
        </div>
        <div className="bg-black p-1 text-white text-lg rounded-full mx-2 cursor-pointer">
          <a href="foo">
            <FaTwitter />
          </a>
        </div>
        <div className="bg-black p-1 text-white text-lg rounded-full mx-2 cursor-pointer">
          <a href="foo">
            <FaInstagram />
          </a>
        </div>
        <div className="bg-black p-1 text-white text-lg rounded-full mx-2 cursor-pointer">
          <a href="foo">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center sm:mr-20">
        <a href="tel:+2349035528300">
          <HiPhone className="text-2xl text-blue-500 sm:mx-5 mx-2 cursor-pointer" />
        </a>
        <a href="mailto:bernardsonj01@gmail.com">
          <HiMail className="text-2xl text-blue-500 sm:mx-5 mx-2 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
