import Button from "../../SharedComponents/Button/Button";
import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import postizImg from "../../../assets/getStarted/postiz.png";

const GetStarted = () => {
  return (
    <div className="rounded-xl bg-secondary">
      <Container>
        <div className="space-y-5 px-5 py-4 text-center md:py-12 lg:py-24 ">
          <Title
            className={"text-3xl font-bold md:text-5xl"}
            text={"Ready to get started?"}
          />
          <p className="mx-auto max-w-[250px] text-sm text-gray-400 md:text-base">
            Elevate your social media planning and achieve new heights of
            efficiency and effectiveness with Postiz.
          </p>
          <div className="flex justify-center">
            <Button className={"rounded-full"}>{`Get Started >>`}</Button>
          </div>
          <div className="relative pt-32 lg:pt-64">
            <img
              src={postizImg}
              className="absolute top-11 mx-auto md:left-0 md:right-0 md:top-2 lg:top-1"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
