import Blog from "@/components/Blog/Blog";
import Header from "@/components/Header";
import InfoBlock from "@/components/InfoBlock";

import {
  FetchBlogFromStrapi,
  FetchFromStrapiForInfoBlocks,
  FetchHeroesFromStrapi,
} from "@/utils/strapiutils";
import { InfoType } from "@/utils/type";

export default async function Home() {
  const result = await FetchFromStrapiForInfoBlocks("/infoblock-landing");

  const blogs = await FetchBlogFromStrapi("/blogs");

  const hero = await FetchHeroesFromStrapi("/hero-landing");

  return (
    <main className="">
      <Header
        textColor={!hero?.TextWhite ? "white" : "black"}
        text={hero?.Headline}
        img={hero?.image}
      />
      <div className="mt-[25%] space-y-16 ">
        {result.map((item: InfoType) => (
          <InfoBlock value={item} key={item.id} />
        ))}
      </div>
      <Blog blogs={blogs} />
    </main>
  );
}
