import Button from "../../SharedComponents/Button/Button";
import Container from "../../SharedComponents/Container/Container";
import BannerCard from "./BannerCard";
import line from "../../../assets/banner/line2.svg";
import tornedo from "../../../assets/banner/tonedo.svg";
import highlight from "../../../assets/banner/highlight.svg";
const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={tornedo} className="absolute w-12 md:w-44" alt="" />
        <img
          src={highlight}
          className="absolute  right-0 w-10 md:w-28"
          alt=""
        />
      </div>
      <Container>
        <div className=" space-y-5 py-5 text-center lg:p-20">
          <div className="space-y-2">
            <h1 className="mx-auto text-balance text-3xl font-bold lg:max-w-[800px] lg:text-6xl">
              Postiz and Buffer comparison
            </h1>
            <img
              src={line}
              className="mx-auto w-[200px] lg:flex lg:justify-end"
              alt=""
            />
            <p className="mx-auto text-balance text-xs md:text-sm lg:max-w-lg">{`Postiz's superior scheduling flow, competitor tracking, and client management make it the best Buffer alternative.`}</p>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <Button className="rounded-full border-[1px] border-gray-300 bg-white md:w-[20%] ">
              {`Get Started >>`}
            </Button>
          </div>
          <div className="pt-8 lg:pt-16">
            <BannerCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
