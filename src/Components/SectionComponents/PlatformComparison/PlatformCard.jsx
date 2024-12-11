import postiz from "../../../assets/platform/logo.png";
import buffer from "../../../assets/platform/bufferLogo.svg";
import Container from "../../SharedComponents/Container/Container";

const PlatformCard = () => {
  const cardData = [
    {
      logo: "postiz",
      title: "Postiz",
      description:
        "Postiz helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.",
    },
    {
      logo: "buffer",
      title: "Buffer",
      description:
        "Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.",
    },
  ];

  return (
    <Container>
      <div className="relative grid grid-cols-1 gap-4 md:mx-10 md:grid-cols-2">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-5 md:p-10 ${
              card.title === "Postiz"
                ? "bg-gradient-to-r from-[#24005E] to-[#5608D5] "
                : "bg-secondary"
            }`}
          >
            <img
              src={card.logo === "postiz" ? postiz : buffer}
              alt={card.title}
            />
            <h2 className="mt-4 text-lg font-bold md:text-2xl ">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-gray-300 md:text-base">
              {card.description}
            </p>
          </div>
        ))}
        <div className="absolute left-1/2 top-[48%] flex size-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-xl bg-black font-bold shadow-lg md:top-1/2">
          VS
        </div>
      </div>
    </Container>
  );
};

export default PlatformCard;
