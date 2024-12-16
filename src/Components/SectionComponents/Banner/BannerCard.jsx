import bannerImage from "../../../assets/banner/bannerImg.png";
import Button from "../../SharedComponents/Button/Button";
import circle from "../../../assets/banner/circle.svg";
import tiktok from "../../../assets/banner/tiktok.svg";
import insta from "../../../assets/banner/insta.svg";
import blur from "../../../assets/banner/blurIcon.svg";
import youtube from "../../../assets/banner/youtube.svg";

const BannerCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#37CEFF] to-[#ec4899] p-5 md:flex md:flex-row md:p-10 lg:h-[380px]">
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
        <p className="max-w-md text-sm md:text-base xl:max-w-lg">
          Provides tools to manage social media, build an audience, generate
          leads, and grow your business.
        </p>
        <Button className="min-w-[80px] rounded-full border-[1px] border-gray-300 bg-white md:w-[30%] ">
          {`Get Started >>`}
        </Button>
      </div>
      <div>
        {/* className="hidden  lg:block" */}
        <div>
          <img
            src={bannerImage}
            alt=""
            className="absolute bottom-0 right-0 w-[150px] md:w-[230px] lg:w-[300px] xl:w-[420px]"
          />
        </div>
        <div>
          <img
            src={tiktok}
            alt=""
            className="absolute bottom-16 left-[50%] md:left-[60%] w-[20px] md:bottom-14 md:w-[30px] lg:w-[40px] xl:w-[50px]"
          />
          <img
            src={insta}
            alt=""
            className="absolute right-[8%] top-52 w-[30px] md:top-60 md:w-[40px] lg:top-44 xl:right-[20%] xl:top-28 xl:w-[70px]"
          />
          <img
            src={blur}
            alt=""
            className="absolute bottom-0 left-[50%] w-[40px] md:left-[40%] md:w-[100px]"
          />
          <img
            src={youtube}
            alt=""
            className="absolute right-[10%] top-0 w-[40px] md:w-[60px]  xl:w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
