import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import "./Navbar.css";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    window.scrollY > 30 ? setScrolling(true) : setScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "subscribe",
      title: "Subscribe",
    },
  ];

  return (
    <nav
      className={`${
        scrolling ? "-translate-y-16" : "translate-y-0"
      } transition-transform transform shadow-lg bg-white w-full flex py-3 justify-between items-center fixed px-6`}
    >
      {/* Logo */}
      <h1 className="text-3xl text-primary">
        <a href="#home">Hello</a>
      </h1>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-secondary" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="w-[28px] h-[28px]" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <AiOutlineClose className="text-2xl cursor-pointer" />
          ) : (
            <AiOutlineMenuUnfold className="text-3xl cursor-pointer" />
          )}
        </div>

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-black absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins sm:font-medium font-semibold cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
