import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function EventPage() {
  return (
    <>
      <div className="w-full py-28 gap-12 flex">
        <div className="w-[50%] ">
          <h1 className="text-4xl font-bold">
            Discover the Allure of {"Cox's"} Bazar Your Ultimate Beach Getaway
          </h1>
          <p className=" my-7">
            Experience the {"world's"} longest natural sea beach with our
            exclusive {"Cox's"} Bazar tour packages. Nestled along the Bay of
            Bengal, {"Cox's"}
            Bazar offers pristine beaches, crystal-clear waters, and
            breathtaking sunsets. Our packages cater to all types of travelers,
            offering luxury resorts, adventurous activities, and serene escapes.
          </p>
          <h4 className="mb-7 font-bold text-2xl">Tour Packages</h4>
          <ul className="space-y-4  px-7 text-sm pb-7">
            <li className="list-item list-disc">
              Luxury Beach Retreat: Enjoy premium beachfront accommodations,
              gourmet dining, and private beach access. Perfect for couples and
              families seeking relaxation and comfort.
            </li>
            <li className="list-item list-disc">
              Adventure & Nature: Explore the beauty of {"Cox's"} Bazar with
              guided treks to Himchari National Park, boat trips to St.{" "}
              {"Martin's"} Island, and thrilling water sports.
            </li>
            <li className="list-item list-disc">
              Cultural Explorer: Immerse yourself in the local culture with
              visits to nearby fishing villages, traditional markets, and
              historic Buddhist temples.
            </li>
          </ul>
          <p>
            Each package includes accommodation, meals, and personalized
            itineraries to ensure an unforgettable beach vacation. Book your{" "}
            {"Cox's"}
            Bazar tour today and discover why {"it's"} one of {"Bangladesh's"}{" "}
            most beloved destinations.
          </p>
        </div>
        <div className="w-[50%] space-y-7">
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
              type="number"
              id="tel"
              placeholder=""
            />
          </div>
          <Button
            size={"roundedFull"}
            className="text-xl  bg-terquish uppercase"
          >
            Sign up
          </Button>

          <h3 className="text-4xl font-extrabold">Pricing</h3>
          <div className="text-xl">
            <p>Single: 1500tk</p>
            <p>Couple: 2500tk</p>
            <p>Family: 7500tk</p>
          </div>
        </div>
      </div>
    </>
  );
}
