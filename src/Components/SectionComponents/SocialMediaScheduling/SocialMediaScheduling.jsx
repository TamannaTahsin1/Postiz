import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import BufferScheduling from "./BufferScheduling";
import PostizScheduling from "./PostizScheduling";

const SocialMediaScheduling = () => {
  return (
    <div>
      <Container>
        <Title
          className="text-2xl md:text-3xl"
          text="Social Media Scheduling & Publishing"
        />
        <div className="flex flex-col items-start justify-center  gap-5 py-10 md:mx-20 md:flex-row">
          <PostizScheduling />
          <BufferScheduling />
        </div>
      </Container>
    </div>
  );
};

export default SocialMediaScheduling;
