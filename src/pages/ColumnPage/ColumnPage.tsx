import { useTranslation } from "react-i18next";

import PrimaryButton from "../../components/buttons/PrimaryButton";
import Post from "../../types/Post";
import Recommendation from "../../types/Recommendation";
import PostItem from "./PostItem";
import RecommendItem from "./RecommendItem";

interface Props {
  recommendations: Recommendation[];
  posts: Post[];
}

function ColumnPage({ recommendations, posts }: Props) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-2 lg:mt-14 mt-4 lg:px-0 px-2">
        {recommendations.map((item) => (
          <RecommendItem item={item} key={item.id} />
        ))}
      </section>

      <section className="grid lg:grid-cols-4 grid-cols-2 gap-x-2 gap-y-4 lg:mt-14 mt-4 lg:px-0 px-2">
        {posts.map((item) => (
          <PostItem item={item} key={item.id} />
        ))}
      </section>

      <section className="flex justify-center lg:mt-6 mt-4 lg:mb-16 mb-4">
        <PrimaryButton>{t("column.load_more")}</PrimaryButton>
      </section>
    </div>
  );
}

export default ColumnPage;
