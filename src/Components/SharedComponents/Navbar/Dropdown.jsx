import { useEffect, useRef, useState } from "react";

const Dropdown = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative z-[999]" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex cursor-pointer items-center gap-2 p-2 text-primary duration-300 hover:text-primary "
      >
        <div className="relative flex flex-col gap-[2px]">
          <h1> {navItem?.name}</h1>
        </div>
        <svg
          className={`${isOpen ? "rotate-180" : "rotate-0"} group stroke-white duration-200  group-hover:stroke-primary `}
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
          ></path>
        </svg>
      </div>

      <div
        className={`absolute left-1/2 top-full -mt-2 h-60  w-full max-w-[250px] -translate-x-1/2 transform overflow-y-auto rounded-lg bg-white shadow-md transition-all duration-300 ${
          isOpen
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        } md:left-0 md:top-[80px] md:w-max md:max-w-[250px] md:translate-x-0`}
      >
        {navItem?.subRoute?.map((service, idx) => (
          <div
            onClick={() => setIsOpen(false)}
            key={idx}
            className="flex h-[60px] items-center px-4 font-medium text-slate-600 duration-300 hover:bg-primary/10 hover:text-black"
          >
            <h1 className="text-sm">{service}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
