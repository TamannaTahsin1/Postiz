import { MdOutlineDone } from "react-icons/md";
import {
  priceDetails,
  pricing,
  services,
} from "../../../lib/Data/PostizPricingData";

const PostizPricing = () => {
  return (
    <div className="w-full space-y-6 rounded-xl bg-secondary p-10 md:p-7 lg:p-14">
      <h1 className="mb-8 text-lg font-semibold md:text-2xl md:font-bold">
        Postiz Pricing
      </h1>
      {/* pricing features */}
      <div className="space-y-3 ">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-start gap-2 text-gray-400"
          >
            <p className="flex size-4 items-center  justify-center rounded-full bg-gray-800 md:size-6">
              <MdOutlineDone className="text-green-600" />
            </p>
            <p className="text-sm md:text-base">{item.details}</p>
          </div>
        ))}
      </div>
      {/* pricing details */}
      <div className="grid grid-cols-1 gap-2 ">
        {priceDetails.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-start gap-3 rounded-xl bg-[#242323] p-5 md:flex-row  md:items-center md:justify-between"
          >
            <div className="space-y-2">
              <h1 className="text-sm md:text-lg">{item.package}</h1>
              <h2 className="text-2xl md:text-3xl font-medium md:font-semibold">
                ${item.price}
                <span className="-mt-5 text-base font-normal ml-2">/ mo</span>
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
              className={`flex flex-col gap-3 items-start justify-start rounded-xl p-5 md:flex-row md:items-center md:justify-between ${
                item.package === "Self service installation"
                  ? "bg-gradient-to-r from-[#45007C] to-[#280033]"
                  : item.package === "Enterprise"
                    ? "bg-gradient-to-r from-[#6B007C] to-[#280033]"
                    : "bg-[#242323]"
              }`}
            >
              <div className="space-y-2">
                <h1 className="text-sm md:text-lg">{item.package}</h1>
                <h2 className="text-2xl md:text-3xl font-medium md:font-semibold">
                  {item.price}
                  <span className="-mt-5 text-base font-normal ml-2">/ mo</span>
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
