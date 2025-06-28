import arrowDown from "@/assets/icons/arrow-down.svg";
import primaryCheck from "@/assets/icons/primary-check.svg";

import { roles } from "@/utils/constants";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const RolesTable = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  return (
    <table
      className="w-full border border-gray-200"
      style={{
        boxShadow: "0px 2px 4px -2px #1018280F, 0px 4px 8px -2px #1018281A",
      }}
    >
      <thead>
        <tr className="bg-gray-50 border-y border-gray-200 py-3 px-6">
          <th className="py-3 px-6">
            <div className="flex items-center">
              <div
                className={twMerge(
                  "w-5 h-5 bg-white border border-gray-300 rounded-[6px] mr-3 flex justify-center items-center",
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
              <span className="font-medium text-xs tracking-0 text-gray-500">
                Name
              </span>
              <img src={arrowDown} alt="" className="inline-block ml-1" />
            </div>
          </th>
          <th className="font-medium text-xs tracking-0 text-gray-500 text-left">
            Date Created
          </th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role, idx) => (
          <tr key={idx} className="bg-white border-y border-gray-200 py-3 px-6">
            <td className="py-6 px-6">
              <div className="flex items-center">
                <div
                  className={twMerge(
                    "w-5 h-5 bg-white border border-gray-300 rounded-[6px] mr-3 flex justify-center items-center",
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
            <td className="text-sm tracking-0 text-gray-500 text-left">
              {role.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
