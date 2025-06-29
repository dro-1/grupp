import { ReactNode, useRef } from "react";

type RadioButtonProps = {
  content: ReactNode;
  name: string;
  id: string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  content,
  name,
  id,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current!.checked = true;
  };
  return (
    <label onClick={handleClick} className="flex items-start" htmlFor={id}>
      <input
        ref={inputRef}
        type="radio"
        className="peer hidden"
        name={name}
        id={id}
      />

      <div className="w-4 h-4 border cursor-pointer border-gray-300 rounded-full transition bg-white mr-2 relative after:absolute after:w-[6px] after:h-[6px] after:bg-primary-600 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-1/2 after:opacity-0 after:transition lg:hover:bg-primary-50 lg:hover:border-primary-600 peer-checked:bg-primary-50 peer-checked:border-primary-600 peer-checked:after:opacity-100" />
      {content}
    </label>
  );
};
