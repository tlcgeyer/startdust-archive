import { useState } from "react";
import "./fonts.css"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("General"); 

  const tabs = [
    "General",
    "Materials",
    "Memories",
    "Build",
    "Collectibles",
    "Studio",
    "User",
  ];

  return (
    <nav className="flex flex-row gap-1 p-2 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-lg shadow-lg border border-purple-500/30">
      {tabs.map((tab) => (
        <NavLink to={tab}
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`caveat-bold text-2xl px-4 py-2 rounded-md transition-all duration-200 ${
            activeTab === tab
              ? "bg-purple-600/80 text-white shadow-md shadow-purple-500/50"
              : "text-purple-100 hover:bg-purple-500/30 hover:animate-pulse hover:text-white"
          }`}
        >
          {tab}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
