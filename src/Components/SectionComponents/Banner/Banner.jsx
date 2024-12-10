import Button from "../../SharedComponents/Button/Button";
import Container from "../../SharedComponents/Container/Container";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <Container>
      <div className="h-[90vh] space-y-5 p-20 text-center">
        <h1 className="mx-auto  text-xl font-bold md:text-3xl lg:max-w-[800px] lg:text-6xl">
          Postiz and Buffer comparison
        </h1>
        <p className="mx-auto text-balance text-xs lg:max-w-lg">{`Postiz's superior scheduling flow, competitor tracking, and client management make it the best Buffer alternative.`}</p>
        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <Button className="w-[20%] rounded-full border-[1px] border-gray-300 bg-white ">
            {`Get Started >>`}
          </Button>
        </div>
        <div className="hidden md:block lg:pt-16">
          <BannerCard />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
