import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SidePanel from "./components/navigationSidePanel/SidePanel";
import "./applayout.scss";
import useAuth from "../../features/auth/hook/UseAuth";
const AppLayout = () => {
  const { fetchCurrentUser } = useAuth();

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return (
    <div className="appLayout">
      <Navbar />
      <div className="appLayoutBody">
        <SidePanel />
        <main className="appLayoutContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
