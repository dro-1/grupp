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
        "flex p-4 bg-white border cursor-pointer border-gray-200 rounded-lg max-w-[784px]",
        selected && "border-primary-300 bg-primary-50"
      )}
      data-testid={`active-role-card-${activeRole.id}`}
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
              "text-gray-500 font-medium text-sm mr-3 transition lg:hover:text-gray-700",
              selected && "text-primary-500"
            )}
          >
            Set as default
          </button>
          <button className="text-primary-700 font-medium text-sm transition lg:hover:text-primary-900">
            Edit
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "w-4 h-4 bg-white border border-gray-300 rounded-full flex justify-center items-center transition",
          selected && "bg-primary-600 border-primary-600"
        )}
        data-testid="checkmark-container"
      >
        <img src={check} alt="" />
      </div>
    </div>
  );
};
