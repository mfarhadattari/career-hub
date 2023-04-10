import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "underline text-purple-400" : "")}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
