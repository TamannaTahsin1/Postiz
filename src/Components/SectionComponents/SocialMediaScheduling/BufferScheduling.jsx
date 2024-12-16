import { BufferSchedulingData } from "../../../lib/Data/BufferSchedulingData";

const BufferScheduling = () => {
  return (
    <div className="bg-secondary w-full space-y-6 rounded-xl p-7 lg:p-10">
      <h1 className="text-lg lg:text-2xl font-medium md:font-bold">Buffer - Scheduling & Publishing</h1>
      <div>
        {BufferSchedulingData?.map((item, idx) => (
          <div key={idx} className="mb-4">
            <h1 className="mb-2 text-sm font-medium">{item.title}</h1>
            <div className="space-y-2">
              {item.postizData?.map((data, dataIdx) => (
                <div
                  key={dataIdx}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <div className="flex size-6 items-center justify-center rounded-full bg-gray-800">
                    {data.icon}
                  </div>
                  <p className="text-sm">{data.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BufferScheduling;
