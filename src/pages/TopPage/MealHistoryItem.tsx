import * as dateFns from "date-fns";

import MealHistory from "../../types/MealHistory";

interface Props {
  item: MealHistory;
}

function MealHistoryItem({ item }: Props) {
  return (
    <a href={item.url} className="flex relative hover:opacity-70">
      <img src={item.image} className="w-full" alt="img" />
      <div className="absolute left-0 bottom-0 bg-primary text-white text-15px p-2 font-inter">
        {dateFns.format(new Date(item.createdAt), "mm.dd")}.{item.type}
      </div>
    </a>
  );
}

export default MealHistoryItem;
