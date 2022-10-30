import Recommendation from "../../types/Recommendation";

interface Props {
  item: Recommendation;
}

function RecommendItem({ item }: Props) {
  return (
    <a href={item.url} className="hover:opacity-70 bg-dark-600 flex flex-col flex-1 justify-center items-center py-6">
      <span className="word-space-full text-primary text-22px text-center font-inter">{item.title}</span>
      <span className="bg-white h-px w-14 mb-2 mt-10px"></span>
      <span className="text-white text-lg">{item.description}</span>
    </a>
  );
}

export default RecommendItem;
