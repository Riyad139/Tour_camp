import Header from "@/components/Header";
import InfoBlock from "@/components/InfoBlock";
import {
  FetchFromStrapiForInfoBlocks,
  FetchHeroesFromStrapi,
} from "@/utils/strapiutils";
import { InfoType } from "@/utils/type";

export default async function Experience() {
  const result = await FetchFromStrapiForInfoBlocks("/infoblock-experience");
  const hero = await FetchHeroesFromStrapi("/hero-experience");
  return (
    <main>
      <Header
        textColor={hero?.TextWhite ? "white" : "black"}
        text={hero?.Headline}
        img={
          process.env.DEVELOPMENT == "TRUE"
            ? process.env.NEXT_PUBLIC_image_url + hero?.image
            : hero?.image
        }
      />
      
      <div className="mt-[25%] space-y-16 ">
        {result.map((item: InfoType) => (
          <InfoBlock value={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
