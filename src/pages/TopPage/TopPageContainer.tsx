import { useEffect, useState } from "react";
import { BodyWeightData } from "../../components/record/BodyWeight/BodyWeight";
import MealHistory from "../../types/MealHistory";
import { AchievementRateData } from "./AchievementRate";
import TopPage from "./TopPage";

function TopPageContainer() {
  const [mealHistories, setMealHistories] = useState<MealHistory[]>([]);
  const [achievementRateData, setAchievementRateData] = useState<AchievementRateData[]>([]);
  const [bodyWeightData, setBodyWeightData] = useState<BodyWeightData>({ items: [] });

  useEffect(() => {
    setMealHistories([
      {
        id: "1",
        createdAt: new Date().toISOString(),
        image: "/images/img_1.png",
        type: "Morning",
        url: "#",
      },
      {
        id: "2",
        createdAt: new Date().toISOString(),
        image: "/images/img_2.png",
        type: "Lunch",
        url: "#",
      },
      {
        id: "3",
        createdAt: new Date().toISOString(),
        image: "/images/img_3.png",
        type: "Dinner",
        url: "#",
      },
      {
        id: "4",
        createdAt: new Date().toISOString(),
        image: "/images/img_4.png",
        type: "Slack",
        url: "#",
      },
      {
        id: "5",
        createdAt: new Date().toISOString(),
        image: "/images/img_5.png",
        type: "Morning",
        url: "#",
      },
      {
        id: "6",
        createdAt: new Date().toISOString(),
        image: "/images/img_6.png",
        type: "Lunch",
        url: "#",
      },
      {
        id: "7",
        createdAt: new Date().toISOString(),
        image: "/images/img_7.png",
        type: "Dinner",
        url: "#",
      },
      {
        id: "8",
        createdAt: new Date().toISOString(),
        image: "/images/img_8.png",
        type: "Slack",
        url: "#",
      },
    ]);

    setAchievementRateData([
      {
        name: "Group B",
        value: 25,
        fill: "transparent",
      },
      {
        name: "Group A",
        value: 75,
        fill: "#FFF",
      },
    ]);

    setBodyWeightData({
      items: [
        {
          month: "6 月",
          uv: 4000,
          pv: 2400,
        },
        {
          month: "7 月",
          uv: 3000,
          pv: 1398,
        },
        {
          month: "8 月",
          uv: 2000,
          pv: 9800,
        },
        {
          month: "9 月",
          uv: 2780,
          pv: 3908,
        },
        {
          month: "10 月",
          uv: 1890,
          pv: 4800,
        },
        {
          month: "11 月",
          uv: 2390,
          pv: 3800,
        },
        {
          month: "12 月",
          uv: 3490,
          pv: 4300,
        },
        {
          month: "1 月",
          uv: 3490,
          pv: 4300,
        },
        {
          month: "2 月",
          uv: 3490,
          pv: 4300,
        },
        {
          month: "3 月",
          uv: 3490,
          pv: 4300,
        },
        {
          month: "4 月",
          uv: 3490,
          pv: 4300,
        },
        {
          month: "5 月",
          uv: 3490,
          pv: 4300,
        },
      ],
    });
  }, []);

  return <TopPage mealHistories={mealHistories} achievementRateData={achievementRateData} bodyWeightData={bodyWeightData} />;
}

export default TopPageContainer;
