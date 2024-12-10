import { PostizInboxData } from "../../../lib/Data/PostizInboxData";

const PostizInbox = () => {
  return (
    <div className="bg-secondary w-full space-y-6 rounded-xl p-14">
      <h1 className="text-2xl font-bold">Postiz -Social Media Inbox</h1>
      <div>
        {PostizInboxData.map((item, idx) => (
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

export default PostizInbox;
