import Exercise from "../../types/Exercise";

interface Props {
  item: Exercise;
}

function ExerciseItem({ item }: Props) {
  return (
    <div className="border-b border-solid border-dark-100">
      <div className="flex items-center mt-2">
        <div className="w-4">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="text-15px text-white flex-1 leading-22px">{item.title} ({item.description})</div>
        <div className="text-primary text-lg leading-22px font-inter">{item.time}</div>
      </div>
      <div className="ml-4 text-primary text-15px leading-[18px] m-0.5 font-inter">{item.kcal}kcal</div>
    </div>
  );
}

export default ExerciseItem;
