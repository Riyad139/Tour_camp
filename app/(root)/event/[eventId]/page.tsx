import ArticleCard from "@/components/ArticleCard/ArticleCard";
import MarkdownToHtml from "@/utils/remarkTool";
import { FetchEventsFromStrapi } from "@/utils/strapiutils";
import { EventType } from "@/utils/type";
import SignUp from "./components/SignUp";

export default async function EventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const res = await FetchEventsFromStrapi("/events");

  const selectedEvents: EventType = res.find(
    (data: EventType) => data.id == params.eventId
  );

  const description = await MarkdownToHtml(selectedEvents.descriptions);
  return (
    <>
      <div className="w-full py-28 gap-12 flex md:flex-row flex-col">
        <div className="md:w-[50%] ">
          <h1 className="text-4xl font-bold">{selectedEvents?.headline}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className=" my-7"
          />
        </div>
        <SignUp selectedEvents={selectedEvents} />
      </div>
      <h2 className="text-5xl font-DmSerif pt-10 pb-20 text-center">
        Suggested Tours
      </h2>

      <div className="flex w-full justify-center gap-16 flex-wrap">
        {res.map(
          (data: EventType) =>
            data.id != params.eventId && (
              <ArticleCard
                slug={data.id}
                headline={data.headline}
                coverImage={data.cover}
                key={data.id}
                path="/event/"
              />
            )
        )}
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const result = await FetchEventsFromStrapi("/events");
  return result?.map((data: EventType) => ({
    eventId: data.id + "",
  }));
}
