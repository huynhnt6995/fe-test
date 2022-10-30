import React from "react";
import * as dateFns from "date-fns";

import Diary from "../../types/Diary";

interface Props {
  item: Diary;
}

function DiaryItem({ item }: Props) {
  const dateTime = dateFns.format(new Date(item.createdAt), "yyyy.mm.dd HH:mm");
  const [date, time] = dateTime.split(" ");

  return (
    <div className="border-dark-200 border-2 w-full p-4 cursor-pointer hover:opacity-70">
      <div className="text-lg font-inter">{date}</div>
      <div className="text-lg font-inter">{time}</div>
      <div className="text-xs">{item.title}</div>
      <div className="text-xs">{item.content}</div>
    </div>
  );
}

export default React.memo(DiaryItem);
