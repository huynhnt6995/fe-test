import * as dateFns from "date-fns";
import BreaklineTitleHeader from "../../components/record/BreaklineTitleHeader";

import UserExercise from "../../types/UserExercise";
import ExerciseItem from "./ExcerciseItem";

interface Props {
  userExercise: UserExercise;
}

function UserExerciseItem({ userExercise }: Props) {
  return (
    <div className="px-6 mb-5">
      <BreaklineTitleHeader title={userExercise.groupName} time={dateFns.format(new Date(userExercise.date), "yyyy.mm.dd")}/>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
        {userExercise.items.map((item) => (
          <ExerciseItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default UserExerciseItem;
