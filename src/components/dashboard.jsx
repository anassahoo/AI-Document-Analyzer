import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";

const Dashboard = ({ user }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#f3f4f6] dark:bg-slate-950 transition-colors">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar user={user} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
