import { MdOutlineDone } from "react-icons/md";
import {
  priceDetails,
  pricing,
  services,
} from "../../../lib/Data/PostizPricingData";

const PostizPricing = () => {
  return (
    <div className="bg-secondary w-full space-y-6 rounded-xl p-10 md:p-7 lg:p-14">
      <h1 className="mb-8 text-2xl font-bold">Postiz Pricing</h1>
      {/* pricing features */}
      <div className="space-y-3 ">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-start gap-2 text-gray-400"
          >
            <p className="flex size-6  items-center justify-center rounded-full bg-gray-800">
              <MdOutlineDone className="text-green-600" />
            </p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
      {/* pricing details */}
      <div className="grid grid-cols-1 gap-2 ">
        {priceDetails.map((item) => (
          <div
            key={item.id}
            className="flex flex-col  items-start justify-start rounded-xl bg-[#242323] p-5 md:flex-row  md:items-center md:justify-between"
          >
            <div className="space-y-2">
              <h1 className="text-lg">{item.package}</h1>
              <h2 className="text-3xl font-semibold">
                ${item.price}
                <span className="-mt-5 text-base font-normal">/ mo</span>
              </h2>
            </div>
            <div className=" space-y-1 text-balance text-sm text-gray-300 md:w-[32%]">
              <p className="">Social Sets: {item.socialSets}</p>
              <p className="">Users: {item.users}</p>
            </div>
          </div>
        ))}
      </div>
      {/* prime service  */}
      <div className="space-y-5">
        <h1>On-premise services & Enterprise</h1>
        <div className="grid grid-cols-1 gap-2 ">
          {services.map((item) => (
            <div
              key={item.package}
              className={`flex flex-col items-start justify-start rounded-xl p-5 md:flex-row md:items-center md:justify-between ${
                item.package === "Self service installation"
                  ? "bg-gradient-to-r from-[#45007C] to-[#280033]"
                  : item.package === "Enterprise"
                    ? "bg-gradient-to-r from-[#6B007C] to-[#280033]"
                    : "bg-[#242323]"
              }`}
            >
              <div className="space-y-2">
                <h1 className="text-lg">{item.package}</h1>
                <h2 className="text-3xl font-semibold">
                  {item.price}
                  <span className="-mt-5 text-base font-normal">/ mo</span>
                </h2>
              </div>
              <div className="space-y-1 text-balance text-sm text-gray-300 md:w-[32%]">
                <p className="">Social Sets: {item.socialSets}</p>
                <p className="">Users: {item.users}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostizPricing;
