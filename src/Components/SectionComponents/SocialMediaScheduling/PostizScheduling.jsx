import { PostizSchedulingData } from "../../../lib/Data/PostizSchedulingData";

const PostizScheduling = () => {
  return (
    <div className="bg-secondary w-full space-y-6 rounded-xl p-7 md:p-14">
      <h1 className="text-lg md:text-2xl font-medium md:font-bold">Postiz - Scheduling & Publishing</h1>
      <div>
        {PostizSchedulingData.map((item, idx) => (
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

export default PostizScheduling;
