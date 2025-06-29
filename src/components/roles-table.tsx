import arrowDown from "@/assets/icons/arrow-down.svg";
import primaryCheck from "@/assets/icons/primary-check.svg";
import greenCheck from "@/assets/icons/green-check.svg";
import lightDownload from "@/assets/icons/light-download.svg";
import { getPaginationPages } from "@/utils/pagination";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { RoleUsersCard } from "./role-users-card";
import { useRoles } from "@/hooks/api";

export const RolesTable = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const { roles } = useRoles(page);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pagination logic
  const totalPages = 15;
  const { startPage, endPage, middlePages } = getPaginationPages({
    page,
    totalPages,
    windowWidth,
  });

  console.log(roles);

  return (
    <>
      <table
        className="w-full border border-gray-200 max-w-[700px] min-[700px]:ml-4 lg:ml-8 lg:max-w-[unset] lg:w-[calc(100%-64px)]"
        style={{
          boxShadow: "0px 2px 4px -2px #1018280F, 0px 4px 8px -2px #1018281A",
        }}
      >
        <thead>
          <tr className="bg-gray-50 border-y border-gray-200 py-3 px-6">
            <th className="py-3 px-6">
              <div className="flex items-center group">
                <div
                  className={twMerge(
                    "w-5 h-5 bg-white cursor-pointer border border-gray-300 rounded-[6px] mr-3 flex justify-center items-center transition lg:hover:border-primary-600 lg:hover:bg-primary-50",
                    selectedRoles.length == roles.length &&
                      "border-primary-600 bg-primary-50"
                  )}
                  onClick={() => {
                    if (selectedRoles.length != roles.length) {
                      setSelectedRoles(roles.map((role) => role.name));
                    } else {
                      setSelectedRoles([]);
                    }
                  }}
                >
                  <img
                    src={primaryCheck}
                    alt=""
                    className={twMerge(
                      "w-[12px] hidden",
                      selectedRoles.length == roles.length && "block"
                    )}
                  />
                </div>
                <span className="font-medium text-xs tracking-0 text-gray-500 transition group-lg:hover:text-gray-700">
                  Name
                </span>
                <img src={arrowDown} alt="" className="inline-block ml-1" />
              </div>
            </th>
            <th className="py-3 px-6 font-medium text-xs tracking-0 text-gray-500 text-left hidden sm:table-cell transition lg:hover:text-gray-700">
              Type
            </th>
            <th className="py-3 px-6 font-medium text-xs tracking-0 text-gray-500 text-left transition lg:hover:text-gray-700">
              Date Created
            </th>
            <th className="py-3 px-6 font-medium text-xs tracking-0 text-gray-500 text-left hidden md:table-cell transition lg:hover:text-gray-700">
              Status
            </th>
            <th className="py-3 px-6 font-medium text-xs tracking-0 text-gray-500 text-left hidden xl:table-cell transition lg:hover:text-gray-700">
              Role Users
            </th>
            <th className="py-3 px-6 font-medium text-xs tracking-0 text-gray-500 text-left hidden xl:table-cell"></th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, idx) => (
            <tr
              key={idx}
              className="bg-white border-y border-gray-200 py-3 px-6 transition lg:hover:bg-gray-50"
            >
              <td className="py-6 px-6">
                <div className="flex items-center">
                  <div
                    className={twMerge(
                      "w-5 h-5 bg-white border cursor-pointer border-gray-300 rounded-[6px] mr-3 flex justify-center items-center transition lg:hover:border-primary-600 lg:hover:bg-primary-50",
                      selectedRoles.includes(role.name) &&
                        "border-primary-600 bg-primary-50"
                    )}
                    onClick={() => {
                      if (selectedRoles.includes(role.name)) {
                        setSelectedRoles((selectedRoles) =>
                          selectedRoles.filter((iRole) => iRole != role.name)
                        );
                      } else {
                        setSelectedRoles((selectedRoles) => [
                          ...selectedRoles,
                          role.name,
                        ]);
                      }
                    }}
                  >
                    <img
                      src={primaryCheck}
                      alt=""
                      className={twMerge(
                        "w-[12px] hidden",
                        selectedRoles.includes(role.name) && "block"
                      )}
                    />
                  </div>
                  <span className="font-medium text-sm tracking-0 text-gray-900">
                    {role.name}
                  </span>
                </div>
              </td>
              <td className="py-6 px-6 text-sm tracking-0 text-gray-500 text-left hidden sm:table-cell">
                {role.type}
              </td>
              <td className="py-6 px-6 text-sm tracking-0 text-gray-500 text-left">
                {role.date}
              </td>
              <td className="py-6 px-6 text-sm tracking-0 text-gray-500 text-left hidden md:table-cell">
                {role.status == "Active" && (
                  <div className="flex items-center justify-center w-[67px] h-[22px] rounded-2xl font-medium text-xs tracking-0 bg-success-50 text-success-700">
                    <img
                      src={greenCheck}
                      alt=""
                      className="inline-block mr-1"
                    />
                    Active
                  </div>
                )}
                {role.status == "In Active" && (
                  <div className="flex items-center justify-center w-[67px] h-[22px] rounded-2xl font-medium text-xs tracking-0 bg-orange text-gray-6">
                    {role.status}
                  </div>
                )}
              </td>
              <td className="py-6 px-6 text-sm tracking-0 text-gray-500 text-left hidden xl:table-cell">
                <RoleUsersCard images={role.users} />
              </td>
              <td className="py-6 px-6 hidden xl:table-cell">
                <button>
                  <img src={lightDownload} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination section */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          key={1}
          className={twMerge(
            "px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-medium text-sm transition lg:hover:bg-primary-50 lg:hover:border-primary-600",
            page === 1 && "bg-primary-50 border-primary-600 text-primary-700"
          )}
          onClick={() => setPage(1)}
        >
          1
        </button>
        {startPage > 2 && <span className="px-2">...</span>}
        {middlePages.map((num) => (
          <button
            key={num}
            className={twMerge(
              "px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-medium text-sm transition lg:hover:bg-primary-50 lg:hover:border-primary-600",
              page === num &&
                "bg-primary-50 border-primary-600 text-primary-700"
            )}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}
        {endPage < totalPages - 1 && <span className="px-2">...</span>}
        <button
          key={totalPages}
          className={twMerge(
            "px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-medium text-sm transition lg:hover:bg-primary-50 lg:hover:border-primary-600",
            page === totalPages &&
              "bg-primary-50 border-primary-600 text-primary-700"
          )}
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </button>
      </div>
    </>
  );
};
