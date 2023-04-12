import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Loader from "../components/Loader/Loader";


const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
    </div>
  );
};

export default Layout;
