import Banner from "../Components/SectionComponents/Banner/Banner";
import PlatformComparison from "../Components/SectionComponents/PlatformComparison/PlatformComparison";
import Pricing from "../Components/SectionComponents/Pricing/Pricing";
import SocialMediaScheduling from "../Components/SectionComponents/SocialMediaScheduling/SocialMediaScheduling";

const Home = () => {
  return (
    <div className="space-y-20 bg-black">
      <Banner />
      <PlatformComparison />
      <Pricing />
      <SocialMediaScheduling />
    </div>
  );
};

export default Home;
