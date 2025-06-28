import { useState } from "react";
import { twMerge } from "tailwind-merge";

import logo from "@/assets/icons/logo.svg";
import hamburger from "@/assets/icons/hamburger.svg";
import home from "@/assets/icons/home.svg";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img className="block mr-[10px]" src={logo} alt="" />
        </div>
        <button onClick={() => setSidebarOpen(true)}>
          <img src={hamburger} alt="" />
        </button>
      </nav>
      {/* Sidebar overlay with transition, opacity, and pointer-events controlled by sidebarOpen */}
      <div
        className={twMerge(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
        tabIndex={-1}
        aria-hidden={!sidebarOpen}
        role="button"
      />
      {/* Sidebar menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex={-1}
        aria-hidden={!sidebarOpen}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <img className="block mr-[10px]" src={logo} alt="" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <button
              className="text-gray-900 font-medium w-full text-left"
              onClick={() => setSidebarOpen(false)}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              className="text-gray-900 font-medium w-full text-left"
              onClick={() => setSidebarOpen(false)}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              className="text-gray-900 font-medium w-full text-left"
              onClick={() => setSidebarOpen(false)}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className="text-gray-900 font-medium w-full text-left"
              onClick={() => setSidebarOpen(false)}
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};
