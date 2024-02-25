import classNames from "classnames";
import { Button } from "../ui/button";
import Image from "next/image";
export default function Header({
  img,
  text,
  textColor,
}: {
  img: string;
  text: string;
  textColor: string;
}) {
  return (
    <section className="flex min-h-[75vh] sm:min-h-[65vh] lg:min-h-[55vh] font-DmSerif  flex-col  justify-center    items-start">
      <Image
        className="w-full brightness-50  rounded-br-[15%] rounded-bl-[15%] top-0 object-cover h-[90%]  left-0 -z-10 absolute"
        src={img}
        alt=""
        width={1000}
        height={1000}
        quality={100}
      />

      <div
        className={classNames(
          " text-6xl md:text-8xl font-semibold space-y-3",
          textColor ? `text-${textColor}` : ""
        )}
      >
        {text}
      </div>
      <Button
        className="text-2xl bg-[#14A998] mt-16 rounded-full uppercase"
        color="#14A998"
        size={"lg"}
      >
        Book now
      </Button>
      <Image
        src={"/icon-tree.svg"}
        className={classNames(
          "w-20 absolute bottom-10 left-[50%]",
          textColor === "white" ? " icon " : ""
        )}
        width={500}
        height={500}
        alt="icon"
      />
    </section>
  );
}
