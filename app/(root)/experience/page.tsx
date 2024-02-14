import Header from "@/components/Header";
import InfoBlock from "@/components/InfoBlock";
import { FetchFromStrapiForInfoBlocks } from "@/utils/strapiutils";
import { InfoType } from "@/utils/type";

export default async function Experience() {
  const result = await FetchFromStrapiForInfoBlocks("/infoblock-experience");
  return (
    <main>
      <Header
        textColor="white"
        text="discover.your.spirit"
        img="/experience.png"
      />
      <div className="mt-[25%] space-y-16 ">
        {result.map((item: InfoType) => (
          <InfoBlock value={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
