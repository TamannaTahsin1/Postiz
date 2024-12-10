import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import BufferScheduling from "./BufferScheduling";
import PostizScheduling from "./PostizScheduling";

const SocialMediaScheduling = () => {
  return (
    <div>
      <Container>
        <Title text="Social Media Scheduling & Publishing" />
        <div className="md:mx-20 flex flex-col items-start  justify-center gap-5 py-10 md:flex-row">
          <PostizScheduling />
          <BufferScheduling />
        </div>
      </Container>
    </div>
  );
};

export default SocialMediaScheduling;
