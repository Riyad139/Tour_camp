import ArticleCard from "../ArticleCard/ArticleCard";
import { Button } from "../ui/button";

export default function FeturedArticles({
  blogs,
}: {
  blogs: {
    id: number;
    headline: string;
    coverImage: string;
    createdAt: string;
    slug: string;
  }[];
}) {
  return (
    <div className="w-full">
      <h2 className="mb-7 mt-9 text-4xl ml-12 font-DmSerif">
        Our featured articles
      </h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {blogs?.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </div>
      <Button className="bg-terquish flex mt-16 mx-auto rounded-full text-xl">
        See More
      </Button>
    </div>
  );
}
