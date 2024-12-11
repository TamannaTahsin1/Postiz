import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import PlatformCard from "./PlatformCard";

const PlatformComparison = () => {
  return (
    <Container>
      <Title className="text-2xl md:text-3xl" text="Platform Comparison" />
      <div className="py-10">
        <PlatformCard />
      </div>
    </Container>
  );
};

export default PlatformComparison;
