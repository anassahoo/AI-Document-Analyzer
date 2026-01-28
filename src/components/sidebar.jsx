import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineViewGrid, HiOutlineDocumentText, HiOutlineClock, HiOutlineStar, HiOutlineCog, HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ user }) => {
  const menuItems = [
    { name: "Dashboard", icon: <HiOutlineViewGrid />, active: true },
    { name: "Documents", icon: <HiOutlineDocumentText /> },
    { name: "History", icon: <HiOutlineClock /> },
    { name: "Favorites", icon: <HiOutlineStar /> },
  ];

  return (
    <aside className="h-full w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 flex flex-col p-4 transition-colors">

      {/* User Profile */}
      <div className="flex items-center gap-3 p-3 mb-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold">
          {user?.charAt(0)?.toUpperCase() || "U"}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-white capitalize">{user || "Guest"}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Active User</p>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">Menu</p>
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all text-sm font-medium
                ${item.active
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                }
              `}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-slate-700 pt-4 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all text-sm font-medium">
          <span className="text-xl"><HiOutlineCog /></span>
          <span>Settings</span>
        </div>

        <Link to="/">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all text-sm font-medium">
            <span className="text-xl"><HiOutlineLogout /></span>
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
