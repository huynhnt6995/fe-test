import { useEffect, useState } from "react";
import { BodyWeightData } from "../../components/record/BodyWeight/BodyWeight";
import Diary from "../../types/Diary";
import UserExercise from "../../types/UserExercise";
import MyRecordPage from "./MyRecordPage";

function MyRecordPageContainer() {
  const [userExercises, setUserExercises] = useState<UserExercise[]>([]);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [bodyWeightData, setBodyWeightData] = useState<BodyWeightData>({ items: [] });

  useEffect(() => {
    setUserExercises([
      {
        id: "1",
        groupName: "My Exercise",
        date: new Date().toISOString(),
        items: [
          { id: "1", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "2", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "3", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "4", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "5", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "6", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "7", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "8", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
        ],
      },
      {
        id: "2",
        groupName: "My Exercise",
        date: new Date().toISOString(),
        items: [
          { id: "1", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "2", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "3", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "4", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "5", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "6", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "7", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "8", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
        ],
      },
      {
        id: "3",
        groupName: "My Exercise",
        date: new Date().toISOString(),
        items: [
          { id: "1", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "2", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "3", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "4", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "5", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "6", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "7", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
          { id: "8", title: "家事全般", description: "立位・軽い", kcal: 26, time: "10 min" },
        ],
      },
    ]);

    setDiaries([
      {
        id: "1",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "2",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "3",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "4",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "5",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "6",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "7",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        id: "8",
        title: "私の日記の記録が一部表示されます。",
        createdAt: new Date().toISOString(),
        content:
          "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
    ]);

    setBodyWeightData({
      date: new Date().toISOString(),
      items: [
        {
          month: "6 月",
          uv: 9000,
          pv: 9000,
        },
        {
          month: "7 月",
          uv: 8500,
          pv: 8600,
        },
        {
          month: "8 月",
          uv: 8000,
          pv: 7000,
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

  return <MyRecordPage userExercises={userExercises} diaries={diaries} bodyWeightData={bodyWeightData} />;
}

export default MyRecordPageContainer;
