import Image from "next/image";
import { Button } from "../ui/button";

export default function FeturedBlog() {
  return (
    <div className="w-full my-16 gap-16 flex">
      <div className="w-[50%]">
        <h1 className="text-5xl font-bold">3 tips for a super fast takeoff</h1>
        <p className="mt-9">
          Improving your take-off phase in surfing is a fundamental step toward
          riding waves with more confidence and style. Improving your take-off
          phase is a gradual process, and it may take time to master. Be
          patient, stay committed to practice, and enjoy the journey of becoming
          a better surfer. With dedication and persistence, {"you'll"} see
          progress and have more enjoyable rides. Here is how:
        </p>
        <Button size={"roundedFull"} className="mt-7 text-xl  bg-terquish">
          Read more
        </Button>
      </div>
      <Image
        className="max-h-[26rem] object-cover w-[50%] rounded-3xl"
        src="/boat.png"
        width={1920}
        height={1080}
        alt="blog image"
      />
    </div>
  );
}
