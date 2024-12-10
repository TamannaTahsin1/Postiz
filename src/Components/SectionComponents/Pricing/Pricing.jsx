import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import BufferPricing from "./BufferPricing";
import PostizPricing from "./PostizPricing";

const Pricing = () => {
  return (
    <Container>
      <Title text="Pricing & Plans" />
      <div className="mx-20 flex items-start justify-center gap-5 py-10">
        <PostizPricing />
        <BufferPricing />
      </div>
    </Container>
  );
};

export default Pricing;
