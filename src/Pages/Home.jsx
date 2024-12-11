import Banner from "../Components/SectionComponents/Banner/Banner";
import CompareAlternatives from "../Components/SectionComponents/CompareAlternatives/CompareAlternatives";
import FrequentlyAskedQuestions from "../Components/SectionComponents/FAQ/FrequentlyAskedQuestions";
import GetStarted from "../Components/SectionComponents/GetStarted/GetStarted";
import PlatformComparison from "../Components/SectionComponents/PlatformComparison/PlatformComparison";
import Pricing from "../Components/SectionComponents/Pricing/Pricing";
import SocialMediaAnalytics from "../Components/SectionComponents/SocialMediaAnalytics/SocialMediaAnalytics";
import SocialMediaInbox from "../Components/SectionComponents/SocialMediaInbox/SocialMediaInbox";
import SocialMediaScheduling from "../Components/SectionComponents/SocialMediaScheduling/SocialMediaScheduling";
import Summary from "../Components/SectionComponents/Summary/Summary";
import TeamsApprovals from "../Components/SectionComponents/TeamsApprovals/TeamsApprovals";

const Home = () => {
  return (
    <div className="space-y-20 bg-black">
      <Banner />
      <PlatformComparison />
      <Pricing />
      <SocialMediaScheduling />
      <SocialMediaAnalytics />
      <TeamsApprovals />
      <SocialMediaInbox />
      <Summary />
      <CompareAlternatives />
      <GetStarted />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default Home;
