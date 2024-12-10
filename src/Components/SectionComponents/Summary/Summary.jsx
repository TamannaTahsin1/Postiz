import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";

const Summary = () => {
  return (
    <Container>
      <div className="space-y-10">
        <Title text="Summary" />
        <div className="bg-secondary space-y-5 rounded-xl p-10 text-start lg:mx-20">
          <h1 className=" text-sm font-bold">
            Which platform is the most affordable?
          </h1>
          <p className="text-gray-400">
            The most affordable plan is the Standart plan from Postiz. It starts
            from $29 per month, and includes 1 social set (which includes 1
            social profiles), and 1 users.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Summary;
