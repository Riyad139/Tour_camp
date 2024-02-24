import Blog from "@/components/Blog/Blog";
import Header from "@/components/Header";
import InfoBlock from "@/components/InfoBlock";
import { FetchFromStrapiForInfoBlocks } from "@/utils/strapiutils";
import { InfoType } from "@/utils/type";

export default async function Home() {
  const result = await FetchFromStrapiForInfoBlocks("/infoblock-landing");
  return (
    <main className="">
      <Header
        textColor="black"
        text="barrel.your.happiness"
        img="/home-hero.png"
      />
      <div className="mt-[25%] space-y-16 ">
        {result.map((item: InfoType) => (
          <InfoBlock value={item} key={item.id} />
        ))}
      </div>
      <Blog />
    </main>
  );
}
