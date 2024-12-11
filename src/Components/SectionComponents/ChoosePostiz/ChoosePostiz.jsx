import Container from "../../SharedComponents/Container/Container";
import curl from "../../../assets/getStarted/curl.png";
import arrow from "../../../assets/getStarted/reverseArrow.png";
import Button from "../../SharedComponents/Button/Button";
import line from "../../../assets/getStarted/line.png";

const ChoosePostiz = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-10 rounded-lg bg-[#3C1AC9] p-5 md:mx-20 md:flex-row md:p-10">
          <div className="relative space-y-5">
            <h1 className="text-2xl font-bold md:text-4xl lg:max-w-[500px]">
              Choose <span className="text-[#E064FF]">Postiz</span> to enhance
              your social media approach!
            </h1>
            <img
              src={line}
              alt=""
              className="absolute left-20 top-2 w-[110px] md:left-36 md:top-4"
            />
            <p className="text-sm text-gray-300 md:font-medium">
              Easily design, schedule, and optimize captivating content for all
              your channels.
            </p>
          </div>
          <div className="flex items-center justify-start gap-5 md:items-center md:justify-center">
            <div className="mt-9">
              <img src={curl} alt="" className=" hidden w-[70px] md:block" />
            </div>
            <Button className={"rounded-full"}>{`Get Started >>`}</Button>
            <div>
              <img src={arrow} alt="" className=" w-[40px] md:hidden" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChoosePostiz;
