import Exercise from "./Exercise";


export default interface UserExercise {
  id: string;
  groupName: string;
  date: string;
  items: Exercise[];
}
