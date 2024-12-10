import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import BufferInbox from "./BufferInbox";
import PostizInbox from "./PostizInbox";

const SocialMediaInbox = () => {
  return (
    <Container>
      <Title text="Social Media Inbox" />
      <div className="flex flex-col items-start justify-center  gap-5 py-10 md:mx-20 md:flex-row">
        <PostizInbox />
        <BufferInbox />
      </div>
    </Container>
  );
};

export default SocialMediaInbox;
