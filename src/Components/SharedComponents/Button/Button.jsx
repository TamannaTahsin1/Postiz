import cn from "../../../lib/cn";

const Button = ({ className, type, children }) => {
  return (
    <button
      type={type}
      className={cn(
        "group btn-font flex min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-md border border-primary bg-primary px-6  py-2 text-xs  font-semibold text-[#252525] duration-200 hover:border hover:border-primary hover:bg-transparent hover:text-primary md:text-base ",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
