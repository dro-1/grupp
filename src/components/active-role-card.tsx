import roleIcon from "@/assets/icons/role.svg";
import check from "@/assets/icons/check.svg";
import { twMerge } from "tailwind-merge";
import { ActiveRole } from "@/types/types";

type RoleCardProps = {
  activeRole: ActiveRole;
  selected: boolean;
  onClick: () => void;
};

export const ActiveRoleCard: React.FC<RoleCardProps> = ({
  activeRole,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "flex p-4 bg-white border border-gray-200 rounded-lg",
        selected && "border-primary-300 bg-primary-50"
      )}
    >
      <div className="bg-white w-[45px] h-[31px] border border-[#f2f4f7] flex justify-center items-center rounded-[6px] mr-3">
        <img src={roleIcon} alt="" />
      </div>
      <div className="grow tracking-0 flex flex-col">
        <em
          className={twMerge(
            "not-italic font-medium text-sm text-gray-700",
            selected && "text-primary-800"
          )}
        >
          {activeRole.roleName}
        </em>
        <em
          className={twMerge(
            "not-italic text-[#70798C] text-sm",
            selected && "text-primary-600"
          )}
        >
          Last active {activeRole.lastActiveDate}
        </em>
        <div className="mt-2">
          <button
            className={twMerge(
              "text-gray-500 font-medium text-sm mr-3",
              selected && "text-primary-500"
            )}
          >
            Set as default
          </button>
          <button className="text-primary-700 font-medium text-sm">Edit</button>
        </div>
      </div>
      <div
        className={twMerge(
          "w-4 h-4 bg-white border border-gray-300 rounded-full flex justify-center items-center transition",
          selected && "bg-primary-600 border-primary-600"
        )}
      >
        <img src={check} alt="" />
      </div>
    </div>
  );
};
