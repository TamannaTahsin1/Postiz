import { BufferAnalyticsData } from "../../../lib/Data/BufferAnalyticsData";

const BufferAnalytics = () => {
  return (
    <div className="w-full space-y-6 rounded-xl bg-secondary p-7 md:p-14">
      <h1 className="text-lg font-medium md:text-2xl md:font-bold">
        Buffer - Analytics & Reporting
      </h1>
      <div>
        {BufferAnalyticsData.map((item, idx) => (
          <div key={idx} className="mb-4">
            <h1 className="mb-2 text-sm font-medium">{item.title}</h1>
            <div className="space-y-2">
              {item.postizData.map((data, dataIdx) => (
                <div
                  key={dataIdx}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <div className="flex size-6 items-center justify-center rounded-full bg-gray-800">
                    {data.icon}
                  </div>
                  <p className="text-wrap text-sm">{data.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BufferAnalytics;
