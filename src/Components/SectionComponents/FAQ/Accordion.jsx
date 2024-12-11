import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "How easy is it to switch from Buffer to Postiz?",
      description:
        "Very easy, and only takes minutes. Our social set setup is quick & easy so you will be up and running in no time.",
    },
    {
      title: "Can I use Postiz & Buffer at the same time safely?",
      description:
        "Yes, you can use Postiz and Buffer simultaneously without issues, as they operate independently. Just ensure you manage schedules to avoid overlapping or duplicate posts.",
    },
    {
      title:
        "I'm paying for Buffer, but don't want to pay double while I get setup - can I get a extended trial?",
      description:
        "You can contact Postiz's customer support to request an extended trial, explaining your current situation. Many companies offer flexibility to attract new users transitioning from another tool.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className=" rounded-lg">
      {dataArr.map((PerAccordion, idx) => (
        <div
          key={idx}
          className="my-2 rounded-lg border border-gray-800 bg-secondary p-5 drop-shadow-lg *:mix-blend-difference"
        >
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between  font-semibold text-white outline-none"
          >
            <span>{PerAccordion.title}</span>
            <span className="rounded-full">
              <MdKeyboardArrowDown
                className={`origin-center transform transition duration-500 ease-out ${isOpen === idx && "!rotate-180"}`}
              />
            </span>
          </button>
          <div
            className={`grid overflow-hidden text-gray-300 transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] pb-1 pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              {PerAccordion.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
