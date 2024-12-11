import Container from "../../SharedComponents/Container/Container";
import curl from "../../../assets/getStarted/curl.png";
import Button from "../../SharedComponents/Button/Button";
import line from "../../../assets/getStarted/line.png";
const GetStarted = () => {
  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-between gap-10 rounded-lg bg-[#3C1AC9] p-10">
          <div className="relative space-y-5">
            <h1 className="text-4xl font-bold lg:max-w-[500px]">
              Choose <span className="text-[#E064FF]">Postiz</span> to enhance
              your social media approach!
            </h1>
            <img src={line} alt="" className="absolute left-32 top-4" />
            <p className="text-sm font-medium text-gray-300">
              Easily design, schedule, and optimize captivating content for all
              your channels.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="mt-10">
              <img src={curl} alt="" className=" w-[70px]" />
            </div>
            <Button>{`Get Started >>`}</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
