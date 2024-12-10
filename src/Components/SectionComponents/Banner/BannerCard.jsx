import bannerImage from "../../../assets/banner/bannerImg.png";
import Button from "../../SharedComponents/Button/Button";

const BannerCard = () => {
  return (
    <div className="relative  flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#37CEFF] to-[#ec4899] p-10 md:flex md:flex-row lg:h-[380px]">
      <div className="space-y-5 text-start">
        <p className="text-lg font-semibold">One-stop platform</p>
        <h1 className="max-w-[750px] text-5xl font-bold ">
          Postiz is an open-source tool for social media scheduling
        </h1>
        <p className="max-w-lg ">
          Provides tools to manage social media, build an audience, generate
          leads, and grow your business.
        </p>
        <Button className="w-[30%] rounded-full border-[1px] border-gray-300 bg-white ">
          {`Get Started >>`}
        </Button>
      </div>
      <div>
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
