import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { InputBox } from "./input-box";

import logo from "@/assets/icons/logo.svg";
import hamburger from "@/assets/icons/hamburger.svg";
import home from "@/assets/icons/home.svg";
import dashboard from "@/assets/icons/dashboard.svg";
import projects from "@/assets/icons/projects.svg";
import tasks from "@/assets/icons/tasks.svg";
import reporting from "@/assets/icons/reporting.svg";
import users from "@/assets/icons/users.svg";
import support from "@/assets/icons/support.svg";
import settings from "@/assets/icons/settings.svg";
import search from "@/assets/icons/search.svg";
import logout from "@/assets/icons/logout.svg";

import user1 from "@/assets/images/user-1.png";
import navImage from "@/assets/images/nav-image.png";

const topLinks = [
  {
    title: "Home",
    icon: home,
  },
  {
    title: "Dashboard",
    icon: dashboard,
    count: 10,
  },
  {
    title: "Projects",
    icon: projects,
  },
  {
    title: "Tasks",
    icon: tasks,
  },
  {
    title: "Reporting",
    icon: reporting,
  },
  {
    title: "Users",
    icon: users,
  },
];

const bottomLinks = [
  {
    title: "Support",
    icon: support,
  },
  {
    title: "Settings",
    icon: settings,
  },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="w-full fixed top-0 z-30 lg:hidden">
        {" "}
        <nav className="p-4 flex justify-between items-center bg-white ">
          <div className="flex items-center">
            <img className="block mr-[10px]" src={logo} alt="" />
          </div>
          <button onClick={() => setSidebarOpen(true)}>
            <img src={hamburger} alt="" />
          </button>
        </nav>
        <div className="w-full h-[1px] bg-gray-200" />
      </div>

      {/* Sidebar overlay with transition, opacity, and pointer-events controlled by sidebarOpen */}
      <div
        className={twMerge(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden",
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
        className={twMerge(
          "fixed top-0 left-0 h-full w-[80vw] max-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col lg:translate-x-0 lg:static lg:w-[280px] lg:h-screen lg:overflow-y-auto lg:shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        tabIndex={-1}
        aria-hidden={!sidebarOpen}
      >
        <div className="p-4 flex justify-between items-center">
          <img className="block mr-[10px]" src={logo} alt="" />
        </div>
        <div className="px-4">
          <InputBox
            iconSrc={search}
            placeholder="Olivia Rhye"
            iconClassname="top-3 left-[14px]"
            className="mt-0"
          />
        </div>

        <div className="mt-2 px-4">
          <ul
            className="border border-gray-100 rounded-lg py-4"
            style={{
              boxShadow:
                "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
            }}
          >
            {topLinks.map((topLink, idx) => (
              <li key={idx}>
                <a
                  href="/"
                  className="flex justify-between items-center px-3 py-2 transition hover:bg-gray-50"
                >
                  <div className="flex">
                    <img
                      src={topLink.icon}
                      alt=""
                      className="inline-block mr-3"
                    />
                    <em className="not-italic font-medium text-gray-700">
                      {topLink.title}
                    </em>
                  </div>
                  {topLink.count && (
                    <div className="w-9 h-6 bg-gray-100 flex justify-center items-center rounded-2xl font-medium text-sm text-gray-700">
                      {topLink.count}
                    </div>
                  )}
                </a>
              </li>
            ))}
            <li className="font-medium text-gray-700 px-3 py-2">Drew Cano</li>
          </ul>
        </div>
        <div className="grow lg:hidden" />
        <div className="border-b border-gray-200 pb-6 mx-4 lg:mt-4 lg:border-0">
          <ul>
            {bottomLinks.map((bottomLink, idx) => (
              <li key={idx}>
                <a
                  href="/"
                  className="flex justify-between items-center px-3 py-2 transition hover:bg-gray-50"
                >
                  <div className="flex">
                    <img
                      src={bottomLink.icon}
                      alt=""
                      className="inline-block mr-3"
                    />
                    <em className="not-italic font-medium text-gray-700">
                      {bottomLink.title}
                    </em>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 rounded-lg mx-4 px-4 py-5  hidden lg:block">
          <h3 className="font-medium text-sm text-gray-900 mb-1">
            New features available!
          </h3>
          <em className="not-italic text-sm text-gray-500">
            Check out the new dashboard view. Pages now load faster
          </em>
          <img
            className="inline-block rounded-[6px] my-4"
            src={navImage}
            alt=""
          />
          <div>
            <button className="font-medium text-sm text-gray-500 mr-3 transition hover:text-gray-400">
              Dismiss
            </button>
            <button className="font-medium text-sm text-primary-700 transition hover:text-primary-900">
              What's new?
            </button>
          </div>
        </div>
        <div className="flex items-start mt-6 px-4 pb-8 lg:border-t lg:border-gray-200 lg:pt-6 lg:mx-4 lg:px-0">
          <img
            className="w-10 h-10 rounded-full inline-block mr-3"
            src={user1}
            alt=""
          />
          <div className="flex flex-col">
            <em className="not-italic font-medium text-gray-900 text-sm">
              Olivia Rhyne
            </em>
            <em className="not-italic text-sm text-gray-500">
              olivia@untitledui.com
            </em>
          </div>
          <div className="grow" />
          <button className="w-9 h-9 rounded-lg flex justify-center items-center transition hover:bg-gray-50">
            <img src={logout} alt="" />
          </button>
        </div>
      </aside>
    </>
  );
};
