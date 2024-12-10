import postiz from "../../../assets/platform/logo.png";
import buffer from "../../../assets/platform/bufferImg.png";
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
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg p-10 ${
              card.title === "Postiz"
                ? "bg-gradient-to-r from-[#24005E] to-[#5608D5] "
                : "bg-[#1A1919]"
            }`}
          >
            <img
              src={card.logo === "postiz" ? postiz : buffer}
              alt={card.title}
            />
            <h2 className="mt-4 text-2xl font-bold text-white">{card.title}</h2>
            <p className="mt-2 text-gray-300">{card.description}</p>
          </div>
        ))}
        {/* VS Element */}
        <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-xl bg-black font-bold text-white shadow-lg">
          VS
        </div>
      </div>
    </Container>
  );
};

export default PlatformCard;
