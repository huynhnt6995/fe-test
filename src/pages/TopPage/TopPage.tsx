import { useTranslation } from "react-i18next";
import AchievementRate, { AchievementRateData } from "./AchievementRate";
import BodyWeight, { BodyWeightData } from "../../components/record/BodyWeight/BodyWeight";
import TransitButton from "./TransitButton";

import icKnife from "./../../assets/icons/ic_knife.png";
import icCup from "./../../assets/icons/ic_cup.png";
import MealHistory from "../../types/MealHistory";
import MealHistoryItem from "./MealHistoryItem";
import PrimaryButton from "../../components/buttons/PrimaryButton";

interface Props {
  mealHistories: MealHistory[];
  achievementRateData: AchievementRateData[];
  bodyWeightData: BodyWeightData;
}

function TopPage({ mealHistories, achievementRateData, bodyWeightData }: Props) {
  const { t } = useTranslation();
  return (
    <>
      <section className="flex lg:flex-row flex-col">
        <AchievementRate background="/images/main_photo.png" numOfDate={5} totalDate={21} percent={75} data={achievementRateData} />
        <BodyWeight className="flex-1_2" data={bodyWeightData} height={280}/>
      </section>

      <section className="flex flex-wrap lg:justify-center justify-around lg:mt-6 lg:mb-6 mt-4 mb-2">
        <TransitButton icon={icKnife} text={t("top.morning")} />
        <TransitButton icon={icKnife} text={t("top.lunch")} />
        <TransitButton icon={icKnife} text={t("top.dinner")} />
        <TransitButton icon={icCup} text={t("top.snack")} />
      </section>

      <section className="grid gap-2 lg:grid-cols-4 grid-cols-2 container mx-auto lg:px-0 px-2">
        {mealHistories.map((item) => (
          <MealHistoryItem item={item} key={item.id} />
        ))}
      </section>

      <section className="flex justify-center lg:mt-6 mt-4 lg:mb-16 mb-4">
        <PrimaryButton>{t("top.load_more")}</PrimaryButton>
      </section>
    </>
  );
}

export default TopPage;
