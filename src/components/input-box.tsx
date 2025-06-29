import { twMerge } from "tailwind-merge";

type InputBoxProps = {
  iconSrc: string;
  placeholder: string;
  iconClassname?: string;
  className?: string;
};

export const InputBox: React.FC<InputBoxProps> = ({
  iconSrc,
  placeholder,
  iconClassname,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "mt-3 relative rounded-md transition-shadow duration-300 focus-within:shadow-[0_4px_0_0_#f4ebff,0_-4px_0_0_#f4ebff,4px_0_0_0_#f4ebff,-4px_0_0_0_#f4ebff]",
        className
      )}
      data-testid="input-box"
    >
      <img
        className={twMerge(
          "absolute top-[15.33px] left-[15.67px] z-20",
          iconClassname
        )}
        src={iconSrc}
        alt=""
      />
      <input
        className="peer px-[14px] py-[10px] bg-white border border-gray-300 rounded-lg w-full text-gray-900 pl-[42px] outline-none transition focus:border-primary-500 relative z-10"
        placeholder={placeholder}
      />
    </div>
  );
};
