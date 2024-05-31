import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MarkdownToHtml from "@/utils/remarkTool";
import { FetchEventsFromStrapi } from "@/utils/strapiutils";
import { EventType } from "@/utils/type";

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
        <div className=" md:w-[50%]  space-y-7">
          <div className="flex w-full gap-7">
            <div className="w-full">
              <Label htmlFor="first">First Name</Label>
              <Input
                width={"100%"}
                className="bg-[#F1E8D9]"
                type="first"
                id="text"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <Label htmlFor="last">Last Name</Label>
              <Input
                width={"100%"}
                className="bg-[#F1E8D9]"
                type="text"
                id="last"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              width={"100%"}
              className="bg-[#F1E8D9]"
              type="email"
              id="email"
              placeholder=""
            />
          </div>
          
          <div>
            <Label htmlFor="tel">Telephone</Label>
            <Input
              width={"100%"}
              className="bg-[#F1E8D9]"
              type="text"
              id="tel"
              placeholder=""
            />
          </div>
          <Button
            size={"roundedFull"}
            className="text-xl bg-terquish uppercase"
          >
            Sign up
          </Button>

          <h3 className="text-4xl font-extrabold">Pricing</h3>
          <div className="text-xl">
            <p>Single: {selectedEvents.packages.single}tk</p>
            <p>Couple: {selectedEvents.packages.couple}tk</p>
            <p>Family: {selectedEvents.packages.group}tk</p>
          </div>
        </div>
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
