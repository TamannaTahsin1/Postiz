import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";

const CompareAlternatives = () => {
  const data = [
    {
      title: "Postiz – Compare Alternatives",
      comparisons: [
        "Postiz vs. Later",
        "Postiz vs. Hootsuite",
        "Postiz vs. Loomly",
        "Postiz vs. Planoly",
        "Postiz vs. Sendible",
        "Postiz vs. Socialpilot",
        "Postiz vs. Sprout social",
        "Postiz vs. Iconosquare",
        "Postiz vs. Hopperhq",
      ],
    },
    {
      title: "Buffer – Compare Alternatives",
      comparisons: [
        "Buffer vs. Later",
        "Buffer vs. Hootsuite",
        "Buffer vs. Loomly",
        "Buffer vs. Planoly",
        "Buffer vs. Sendible",
        "Buffer vs. Socialpilot",
        "Buffer vs. Sprout social",
        "Buffer vs. Iconosquare",
        "Buffer vs. Hopperhq",
      ],
    },
  ];

  return (
    <Container>
      <div className="space-y-10  md:mx-20">
        <Title text="Compare Alternatives" />
        <div className="flex flex-col justify-between gap-5  md:flex-row">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="w-full space-y-5 rounded-xl bg-secondary p-14 "
            >
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <div className="space-y-2">
                {item.comparisons.map((comparison, dataIdx) => (
                  <div
                    key={dataIdx}
                    className="flex items-center gap-2 text-gray-200"
                  >
                    <p>{comparison}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CompareAlternatives;
