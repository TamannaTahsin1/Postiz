import { MdOutlineDone } from "react-icons/md";
import { priceDetails, pricing } from "../../../lib/Data/BufferPricingData";

const BufferPricing = () => {
  return (
    <div className="bg-secondary w-full space-y-3 rounded-xl p-14 ">
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
            className="flex items-center justify-between rounded-xl  bg-[#242323] p-5"
          >
            <div>
              <h1 className="text-lg">{item.package}</h1>
              <h2 className="text-3xl font-semibold">
                ${item.price}{" "}
                <span className="-mt-5 text-base font-normal">/ mo</span>
              </h2>
            </div>
            <div className="w-[32%] space-y-1 text-balance text-sm text-gray-300">
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