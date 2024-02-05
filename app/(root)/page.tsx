import Blog from "@/components/Blog/Blog";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lesson from "@/components/Lesson";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        className="w-full  rounded-br-[15%] rounded-bl-[15%] top-0 object-cover h-[90%]  left-0 -z-10 absolute"
        src={"/home-hero.png"}
        alt=""
        width={1000}
        height={1000}
        quality={100}
      />
      <Header />

      <Image
        src={"/icon-tree.svg"}
        className="w-20 absolute bottom-10 left-[50%]"
        width={500}
        height={500}
        alt="icon"
      />
      <div className="mt-[40%] space-y-16 ">
        <Experience />
        <Lesson />
      </div>
      <Blog />
    </main>
  );
}
