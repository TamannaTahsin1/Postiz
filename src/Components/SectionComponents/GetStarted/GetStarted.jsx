import Button from "../../SharedComponents/Button/Button";
import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import postizImg from "../../../assets/getStarted/postiz.png";
const GetStarted = () => {
  return (
    <div className="rounded-xl bg-secondary">
      <Container>
        <div className="space-y-5 px-5 pt-24 text-center ">
          <Title
            className={"text-5xl font-bold"}
            text={"Ready to get started?"}
          />
          <p className="mx-auto max-w-[400px]">
            Elevate your social media planning and achieve new heights of
            efficiency and effectiveness with Postiz.
          </p>
          <div className="flex justify-center">
            <Button>{`Get Started >>`}</Button>
          </div>
          <div>
            <img src={postizImg} className="mx-auto " alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
