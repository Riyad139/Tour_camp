import Image from "next/image";

export default function Lesson() {
  return (
    <div className="flex  py-7 gap-16">
      <div className="w-[50%] mt-5">
        <h2 className="text-7xl font-semibold mb-11">the experience</h2>
        <p>
          At {"Sam’s"} Surfcamp, we invite you to embark on an unforgettable
          surfing adventure. Nestled in the heart of [Location] our surf camp
          offers an exhilarating experience for beginners, intermediate surfers,
          and seasoned wave riders alike. Dive into the world of surfing with
          our expert instructors who have years of experience and a deep passion
          for the sport. Whether {"you're"} a first-time surfer looking to catch
          your first wave or a seasoned pro seeking to enhance your skills, our
          dedicated team is here to guide you every step of the way. Immerse
          yourself in the natural beauty of our surf {"camp's"} surroundings.
          Picture yourself waking up to the sound of crashing waves and feeling
          the warm sand beneath your feet. With pristine beaches and a vibrant
          coastal atmosphere, [Location] sets the perfect stage for your surf
          adventure.
        </p>
      </div>
      <Image
        src={"/boat.png"}
        className="w-[50%] h-[500px] object-cover rounded-e-full"
        width={600}
        height={600}
        alt="home"
      />
    </div>
  );
}
