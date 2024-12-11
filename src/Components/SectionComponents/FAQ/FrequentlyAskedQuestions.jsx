import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import doodle from "../../../assets/getStarted/doodle.png";
import Accordion from "./Accordion";

const FrequentlyAskedQuestions = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-20 md:mx-20 md:flex-row">
        <div className="space-y-4">
          <Title
            className={"text-center md:max-w-[150px] md:text-start"}
            text="Frequently asked questions"
          />
          <img src={doodle} className="mx-auto w-[150px]" alt="" />
        </div>
        <Accordion />
      </div>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
