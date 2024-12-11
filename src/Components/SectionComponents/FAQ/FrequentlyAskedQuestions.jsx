import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import doodle from "../../../assets/getStarted/doodle.png";
import Accordion from "./Accordion";

const FrequentlyAskedQuestions = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="space-y-4">
          <Title
            className={"max-w-[150px] text-start"}
            text="Frequently asked questions"
          />
          <img src={doodle} className="w-[150px]" alt="" />
        </div>
        <Accordion />
      </div>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
