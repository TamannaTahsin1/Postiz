import Container from "../../SharedComponents/Container/Container";
import curl from "../../../assets/getStarted/curl.png";
import arrow from "../../../assets/getStarted/reverseArrow.png";
import Button from "../../SharedComponents/Button/Button";
import line from "../../../assets/getStarted/line.png";
const GetStarted = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-10 rounded-lg bg-[#3C1AC9] p-10 md:flex-row">
          <div className="relative space-y-5">
            <h1 className="text-4xl font-bold lg:max-w-[500px]">
              Choose <span className="text-[#E064FF]">Postiz</span> to enhance
              your social media approach!
            </h1>
            <img
              src={line}
              alt=""
              className="absolute left-36 top-4 w-[110px]"
            />
            <p className="text-sm font-medium text-gray-300">
              Easily design, schedule, and optimize captivating content for all
              your channels.
            </p>
          </div>
          <div className="flex items-start justify-between gap-2 md:items-center md:justify-center">
            <div className="mt-9">
              <img src={curl} alt="" className=" hidden w-[70px] md:block" />
            </div>
            <Button>{`Get Started >>`}</Button>
            <div>
              <img src={arrow} alt="" className=" w-[40px] md:hidden" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
