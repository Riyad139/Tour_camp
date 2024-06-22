"use client";
import { useEffect, useState } from "react";

import ArticleCard from "@/components/ArticleCard/ArticleCard";

import MarkdownToHtml from "@/utils/remarkTool";
import { FetchEventsFromStrapi } from "@/utils/strapiutils";
import { EventType } from "@/utils/type";

import { CallCheckout } from "@/utils/CheckOutUtils";
import Loader from "./components/Loader";
import SignUp from "./components/SignUp";

export default function EventPage({ params }: { params: { eventId: string } }) {
  const [res, setRes] = useState<any>(null);
  const [description, setDescriptions] = useState("");
  useEffect(() => {
    let res;
    const fun = async () => {
      res = await FetchEventsFromStrapi("/events");
      setRes(res);
    };
    fun();
  }, [params.eventId]);



  const selectedEvents: EventType = res?.find(
    (data: EventType) => data.id == params.eventId
  );

  useEffect(() => {
    if (!selectedEvents) return;
    let res;
    const fun = async () => {
      res = await MarkdownToHtml(selectedEvents.descriptions);
      setDescriptions(res);
    };
    fun();
  }, [selectedEvents]);

  if (!res || description.length == 0) return <Loader />;

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
