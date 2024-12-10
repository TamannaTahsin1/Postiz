import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import PlatformCard from "./PlatformCard";

const PlatformComparison = () => {
  return (
    <Container>
      <Title text="Platform Comparison" />
      <div className="py-10">
        <PlatformCard />
      </div>
    </Container>
  );
};

export default PlatformComparison;
