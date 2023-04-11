import React, { useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative py-10 px-10 md:px-20 w-full ">
      <img
        src="src/assets/Vector.png"
        alt=""
        className="h-[100px] w-[150px] absolute bottom-0 left-0"
      />
      <img
        src="src/assets/Vector-1.png"
        alt=""
        className="h-[100px] w-[150px] absolute top-0 right-0"
      />
      <div className="flex justify-between items-center md:px-20 py-5 w-full">
        <h1 className="text-4xl font-bold">Build Career</h1>

        <div onClick={() => setMenuOpen(!menuOpen)} className="z-40 md:hidden text-3xl" >
          {
            menuOpen ? <FontAwesomeIcon icon={faClose}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          }
        </div>

        <ul
          className={`md:flex gap-5 items-center text-lg font-medium absolute md:static p-5 ${
            menuOpen ? "top-36 right-2 bg-slate-100" : "-top-36 right-0 bg-transparent"
          }`}
        >
          <NavigationLink to={"/"}>Home</NavigationLink>
          <NavigationLink to={"/statistics"}>Statistics</NavigationLink>
          <NavigationLink to={"/applied-job"}>Applied Jobs</NavigationLink>
          <NavigationLink to={"/blogs"}>Blogs</NavigationLink>
        </ul>
        <button className="text-white bg-purple-400 px-5 py-2 rounded-lg text-xl font-bold hidden md:block">
          Start Applying
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
