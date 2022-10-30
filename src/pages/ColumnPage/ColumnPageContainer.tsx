import { useEffect, useState } from "react";

import Post from "../../types/Post";
import Recommendation from "../../types/Recommendation";
import ColumnPage from "./ColumnPage";

function ColumnPageContainer() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setRecommendations([
      {
        id: "1",
        title: "RECOMMENDED COLUMN",
        description: "オススメ",
        url: "#",
      },
      {
        id: "2",
        title: "RECOMMENDED DIET",
        description: "ダイエット",
        url: "#",
      },
      {
        id: "3",
        title: "RECOMMENDED BEAUTY",
        description: "美容",
        url: "#",
      },
      {
        id: "4",
        title: "RECOMMENDED HEALTH",
        description: "健康",
        url: "#",
      },
    ]);

    setPosts([
      {
        id: "1",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img1.png",
        url: "#",
      },
      {
        id: "2",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img2.png",
        url: "#",
      },
      {
        id: "3",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img3.png",
        url: "#",
      },
      {
        id: "4",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img4.png",
        url: "#",
      },
      {
        id: "5",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img5.png",
        url: "#",
      },
      {
        id: "6",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img6.png",
        url: "#",
      },
      {
        id: "7",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img7.png",
        url: "#",
      },
      {
        id: "8",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        createdAt: new Date().toISOString(),
        tags: ["#魚料理 ", "#和食", "#DHA"],
        thumbnail: "/images/img8.png",
        url: "#",
      },
    ]);
  }, []);

  return <ColumnPage recommendations={recommendations} posts={posts} />;
}

export default ColumnPageContainer;
