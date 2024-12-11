import { MdOutlineDone } from "react-icons/md";
import { priceDetails, pricing } from "../../../lib/Data/BufferPricingData";

const BufferPricing = () => {
  return (
    <div className="w-full  space-y-3 rounded-xl bg-secondary p-10 md:p-7 lg:p-14 ">
      <h1 className="mb-8 text-2xl font-bold">Buffer Pricing</h1>
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
            className="flex flex-col items-start justify-start gap-3 rounded-xl bg-[#242323] p-5 md:flex-row  md:items-center md:justify-between"
          >
            <div className="space-y-2">
              <h1 className="text-sm md:text-lg">{item.package}</h1>
              <h2 className="text-2xl font-medium md:text-3xl md:font-semibold">
                ${item.price}
                <span className="-mt-5 ml-2 text-base font-normal">/ mo</span>
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
  );
};

export default BufferPricing;
