import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import BufferAnalytics from "./BufferAnalytics";
import PostizAnalytics from "./PostizAnalytics";

const SocialMediaAnalytics = () => {
  return (
    <div>
      <Container>
        <Title text="Social Media Analytics & Reporting" />
        <div className="flex flex-col items-start justify-center  gap-5 py-10 md:mx-20 md:flex-row">
          <PostizAnalytics />
          <BufferAnalytics />
        </div>
      </Container>
    </div>
  );
};

export default SocialMediaAnalytics;
