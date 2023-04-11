import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 pt-28">
      <div className="container mx-auto px-20 grid grid-cols-2 justify-between gap-5">
        <div className="mb-20">
          <h1 className="text-7xl font-extrabold leading-snug">
            <span className="block">One Step Closer To Your</span>{" "}
            <span className=" block text-purple-600">Dream Job</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 text-justify font-medium leading-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-purple-500 text-white px-7 py-4 text-xl font-medium rounded-lg mt-8 ">Get Started</button>
        </div>
        <img src="./src/assets/bannar.png" alt="" className="h-full w-full" />
      </div>
    </header>
  );
};

export default Header;
