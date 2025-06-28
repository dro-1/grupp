import mail from "@/assets/icons/mail.svg";
import add from "@/assets/icons/add.svg";
import download from "@/assets/icons/download.svg";

import { RadioButton } from "@/components/radio-button";
import { ActiveRoleCard } from "@/components/active-role-card";
import { activeRoles } from "@/utils/constants";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { RolesTable } from "@/components/roles-table";
import { Navbar } from "@/components/navbar";

const tabs = ["My details", "Plan", "Roles", "Notifications", "Integrations"];

export const Settings = () => {
  const [selectedRoleID, setSelectedRoleID] = useState("");
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 pt-8 pb-12 tracking-0">
        <div className="px-4">
          <h1 className="font-medium text-2xl mb-1">Settings</h1>
          <p className="text-gray-500">
            Manage your team and preferences here.
          </p>
        </div>
        <div className="mt-6 -300 flex px-4 overflow-x-auto">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={twMerge(
                "px-4 py-2 shrink-0 font-medium text-sm text-gray-700 bg-white border border-gray-300",
                idx == 0 && "rounded-l-lg",
                idx == tabs.length - 1 && "rounded-r-lg"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <main className="mt-8">
          <div className="px-4 border-b border-gray-200 pb-5">
            <h2 className="font-medium text-lg  text-gray-900 mb-1">
              User Roles
            </h2>
            <p className="text-sm text-gray-500">
              Update your roles details and information
            </p>
          </div>
          <div className="px-4 mt-6 border-b border-gray-200 pb-5">
            <h3 className="font-medium text-sm text-gray-700">
              Connected email
            </h3>
            <em className="not-italic text-sm text-gray-500 inline-block mb-5">
              Select role account
            </em>
            <div className="space-y-4">
              <RadioButton
                id="regular"
                name="role"
                content={
                  <div className="flex flex-col relative -top-[4px]">
                    <em className="not-italic font-medium text-sm text-gray-700">
                      My account email
                    </em>
                    <em className="not-italic text-sm text-gray-500">
                      olivia@untitledui.com
                    </em>
                  </div>
                }
              />
              <RadioButton
                name="role"
                id="alternative"
                content={
                  <div className="flex flex-col relative -top-[4px] w-full">
                    <em className="not-italic font-medium text-sm text-gray-700">
                      An alternative email
                    </em>
                    <div className="mt-3 relative rounded-md transition-shadow duration-300 focus-within:shadow-[0_4px_0_0_#f4ebff,0_-4px_0_0_#f4ebff,4px_0_0_0_#f4ebff,-4px_0_0_0_#f4ebff]">
                      <img
                        className="absolute top-[15.33px] left-[15.67px]"
                        src={mail}
                        alt=""
                      />
                      <input
                        className="peer px-[14px] py-[10px] bg-white border border-gray-300 rounded-lg w-full text-gray-900 pl-[42px] outline-none transition focus:border-primary-500 relative z-10"
                        placeholder="billing@untitledui.com"
                      />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
          <div className="px-4 mt-6">
            <h3 className="font-medium text-sm text-gray-700">Active Role</h3>
            <em className="not-italic text-sm text-gray-500 inline-block mb-5">
              Select active role available to the user.
            </em>
            <div className="space-y-3">
              {activeRoles.map((activeRole) => (
                <ActiveRoleCard
                  key={activeRole.id}
                  activeRole={activeRole}
                  selected={activeRole.id == selectedRoleID}
                  onClick={() => setSelectedRoleID(activeRole.id)}
                />
              ))}
            </div>
            <button className="flex mt-4 font-medium text-sm text-gray-500">
              <img src={add} alt="" className="inline-block mr-2" />
              Add role to user
            </button>
          </div>
          <div className="mt-8 tracking-0">
            <div className="px-4">
              <h3 className="text-gray-900 font-medium text-lg mb-4">
                User Roles
              </h3>
              <button className="bg-white border border-gray-300 py-[10px] px-4 rounded-lg flex font-medium text-sm text-gray-700 mb-[25px]">
                <img src={download} alt="" className="inline-block mr-2" />
                Download all
              </button>
            </div>

            <RolesTable />
          </div>
        </main>
      </div>
    </div>
  );
};
