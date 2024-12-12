import { useState } from "react";

const DropdownSm = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div onClick={() => setIsOpen(!isOpen)} className="group flex gap-2 ">
        <div className="relative flex flex-1 cursor-pointer flex-col gap-[2px] text-base font-medium text-slate-400 duration-300 ">
          {navItem?.name}
        </div>
        <svg
          className={`${isOpen ? "rotate-0" : "-rotate-180"} group stroke-slate-400 duration-200`}
          width={18}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`grid ${isOpen ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr]"} w-full justify-between gap-2 rounded-lg bg-secondary text-primary duration-500`}
      >
        <div className="w-full space-y-4 overflow-hidden">
          {navItem?.subRoute?.map((providesName, idx) => (
            <div
              key={idx}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-2"
            >
              <span className="text-xs">{providesName}</span>
              {/* Directly render the string */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownSm;
