import { MdOutlineDone } from "react-icons/md";
import Container from "../../SharedComponents/Container/Container";
import Title from "../../SharedComponents/Title/Title";
import { IoCloseOutline } from "react-icons/io5";

const TeamsApprovals = () => {
  const data = [
    {
      title: "Postiz – Teams & Approvals",
      features: [
        { feature: "Approval Workflows", icon: "MdOutlineDone" },
        { feature: "Assign Users To Posts", icon: "MdOutlineDone" },
        { feature: "Leave Comments On Posts", icon: "MdOutlineDone" },
        { feature: "Assign Users To Messages", icon: "MdOutlineDone" },
        { feature: "Tag Team Members In Comments", icon: "MdOutlineDone" },
      ],
    },
    {
      title: "Buffer – Teams & Approvals",
      features: [
        { feature: "Approval Workflows", icon: "MdOutlineDone" },
        { feature: "Assign Users To Posts", icon: "IoCloseOutline" },
        { feature: "Leave Comments On Posts", icon: "IoCloseOutline" },
        { feature: "Assign Users To Messages", icon: "IoCloseOutline" },
        { feature: "Tag Team Members In Comments", icon: "IoCloseOutline" },
      ],
    },
  ];

  return (
    <Container>
      <div className="space-y-10  md:mx-20">
        <Title className="text-2xl md:text-3xl" text="Teams & Approvals" />
        <div className="flex flex-col justify-between gap-5  md:flex-row">
          {data.map((item,idx) => (
            <div
              key={idx}
              className="w-full space-y-5 rounded-xl  bg-secondary p-7 md:p-14 "
            >
              <h1 className="text-lg md:text-2xl font-medium md:font-bold">{item.title}</h1>
              <div className="space-y-3">
                {item.features.map((feature) => (
                  <div
                    key={feature.feature}
                    className="flex items-center gap-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-full bg-gray-800">
                      {feature.icon === "MdOutlineDone" ? (
                        <MdOutlineDone className="text-green-600" />
                      ) : (
                        <IoCloseOutline className="text-red-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{feature.feature}</p>
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

export default TeamsApprovals;
