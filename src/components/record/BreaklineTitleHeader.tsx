interface Props {
  title: string;
  time: string;
}

function BreaklineTitleHeader({ title, time }: Props) {
  return (
    <div className="flex text-white items-center font-inter">
      <span className="text-15px uppercase word-space-full w-24 leading-[18px]">{title}</span>
      <span className="text-22px">{time}</span>
    </div>
  );
}

export default BreaklineTitleHeader;
