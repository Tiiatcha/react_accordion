import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SideNavLayout = () => {
  const pendingLink =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  const activeLink =
    "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
  return (
    <>
      <div id="left_nav" className="sm:w-[160px] bg-slate-200">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? pendingLink : isActive ? activeLink : ""
              }
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accordion"
              className={({ isActive, isPending }) =>
                isPending ? pendingLink : isActive ? activeLink : ""
              }
            >
              Accordion
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SideNavLayout;
