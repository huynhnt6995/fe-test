import * as dateFns from "date-fns";

import Post from "../../types/Post";

interface Props {
  item: Post;
}

function PostItem({ item }: Props) {
  return (
    <a href={item.url}>
      <div className="hover:opacity-70">
        <div className="relative">
          <img src={item.thumbnail} className="w-full" alt="Thumb" />
          <div className="absolute bottom-0 left-0 text-white bg-primary text-15px h-6 px-2 flex items-center font-inter">
            {dateFns.format(new Date(item.createdAt), "yyyy.mm.dd HH:mm")}
          </div>
        </div>
        <div className="text-dark-600 text-15px my-2">{item.title}</div>
        <div className="flex">
          {item.tags.map((item, index) => (
            <span className="mr-2 text-xs text-primary-400" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PostItem;
