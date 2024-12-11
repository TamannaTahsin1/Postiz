import bannerImage from "../../../assets/banner/bannerImg.png";
import Button from "../../SharedComponents/Button/Button";
import circle from "../../../assets/banner/circle.svg";
const BannerCard = () => {
  return (
    <div className="relative  flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#37CEFF] to-[#ec4899] p-5 md:flex md:flex-row md:p-10 lg:h-[380px]">
      <div className="relative space-y-5 text-start">
        <p className="text-base font-semibold md:text-lg">One-stop platform</p>
        <h1 className="max-w-[750px] text-2xl font-bold md:text-5xl ">
          Postiz is an open-source tool for social media scheduling
        </h1>
        <img
          src={circle}
          className="absolute -left-4 top-4 w-24 md:w-40"
          alt=""
        />
        <p className="max-w-lg text-sm md:text-base">
          Provides tools to manage social media, build an audience, generate
          leads, and grow your business.
        </p>
        <Button className="rounded-full border-[1px] border-gray-300 bg-white md:w-[30%] ">
          {`Get Started >>`}
        </Button>
      </div>
      <div className="hidden md:block">
        <img
          src={bannerImage}
          alt=""
          className="absolute bottom-0 right-0 w-[420px]"
        />
      </div>
    </div>
  );
};

export default BannerCard;
