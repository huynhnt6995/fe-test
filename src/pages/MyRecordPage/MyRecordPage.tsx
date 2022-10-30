import { useTranslation } from "react-i18next";

import NavigationButton from "./NavigateButton";
import imgRecord from "./../../assets/images/img_record.png";
import imgExercise from "./../../assets/images/img_exercise.png";
import imgDiary from "./../../assets/images/img_diary.png";
import BodyWeight, { BodyWeightData } from "../../components/record/BodyWeight/BodyWeight";
import UserExercise from "../../types/UserExercise";
import UserExerciseItem from "./UserExerciseItem";

import "./MyRecordPage.css";
import Diary from "../../types/Diary";
import DiaryItem from "./DiaryItem";
import PrimaryButton from "../../components/buttons/PrimaryButton";

interface Props {
  userExercises: UserExercise[];
  diaries: Diary[];
  bodyWeightData: BodyWeightData;
}

function MyRecordPage({ userExercises, diaries, bodyWeightData }: Props) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto record-page">
      <section className="flex justify-between lg:my-14 my-4">
        <NavigationButton button={t("record.body_record")} image={imgRecord} title={t("record.body_record_en")} />
        <NavigationButton button={t("record.exercise")} image={imgExercise} title={t("record.exercise_en")} />
        <NavigationButton button={t("record.diary")} image={imgDiary} title={t("record.diary_en")} />
      </section>

      <BodyWeight className="w-full" data={bodyWeightData} showFilter/>

      <section className="bg-dark-500 py-4 lg:my-14 my-4">
        <div className="overflow-y-auto h-48 list-user-exercise">
          {userExercises.map((item) => (
            <UserExerciseItem userExercise={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="lg:px-0 px-2">
        <div className="font-inter leading-[27px]">{t("record.my_diary")}</div>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-2">
          {diaries.map((item) => (
            <DiaryItem item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="flex justify-center lg:mt-6 mt-4 lg:mb-16 mb-4">
        <PrimaryButton>{t("record.load_more")}</PrimaryButton>
      </section>
    </div>
  );
}

export default MyRecordPage;
