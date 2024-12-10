import cn from "../../../lib/cn";

const Title = ({ text, className }) => {
  return (
    <h2 className={cn("text-primary text-3xl font-semibold text-center", className)}>{text}</h2>
  );
};

export default Title;
