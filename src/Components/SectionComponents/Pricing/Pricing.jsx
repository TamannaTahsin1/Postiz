import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import BufferPricing from "./BufferPricing";
import PostizPricing from "./PostizPricing";

const Pricing = () => {
  return (
    <Container>
      <Title text="Pricing & Plans" />
      <div className="flex flex-col items-start justify-center gap-5 py-10 md:mx-20 md:flex-row">
        <PostizPricing />
        <BufferPricing />
      </div>
    </Container>
  );
};

export default Pricing;
