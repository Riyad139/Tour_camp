import ArticleCard from "@/components/ArticleCard/ArticleCard";
import { FetchEventsFromStrapi } from "@/utils/strapiutils";
import { EventType } from "@/utils/type";

export default async function Event() {
  const res = await FetchEventsFromStrapi("/events");
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-5xl sm:text-7xl font-medium py-16 font-DmSerif">
        Select your destination
      </h2>
      <div className="flex gap-10 flex-wrap">
        {res.map((data: EventType) => (
          <ArticleCard
            key={data.id}
            headline={data.headline}
            coverImage={data.cover}
            slug={data.id}
            path="/event/"
          />
        ))}
      </div>
    </div>
  );
}
