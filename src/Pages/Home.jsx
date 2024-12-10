import Banner from "../Components/SectionComponents/Banner/Banner";
import PlatformComparison from "../Components/SectionComponents/PlatformComparison/PlatformComparison";
import Pricing from "../Components/SectionComponents/Pricing/Pricing";
import SocialMediaAnalytics from "../Components/SectionComponents/SocialMediaAnalytics/SocialMediaAnalytics";
import SocialMediaInbox from "../Components/SectionComponents/SocialMediaInbox/SocialMediaInbox";
import SocialMediaScheduling from "../Components/SectionComponents/SocialMediaScheduling/SocialMediaScheduling";
import Summary from "../Components/SectionComponents/Summary/Summary";

const Home = () => {
  return (
    <div className="space-y-20 bg-black">
      <Banner />
      <PlatformComparison />
      <Pricing />
      <SocialMediaScheduling />
      <SocialMediaAnalytics />
      <SocialMediaInbox />
      <Summary />
    </div>
  );
};

export default Home;
