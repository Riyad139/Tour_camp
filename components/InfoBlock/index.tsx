import classNames from "classnames";
import Image from "next/image";
import { Button } from "../ui/button";
import { InfoType } from "@/utils/type";

export default function InfoBlock<InfoBlock>({ value }: { value: InfoType }) {
  const { headline, descriptions, showImageRight, image, button } = value;

  return (
    <div
      className={classNames(
        "flex md:flex-row flex-col  py-7 gap-16",
        showImageRight ? "md:flex-row-reverse" : ""
      )}
    >
      <Image
        src={
          process.env.DEVELOPMENT == "TRUE"
            ? process.env.NEXT_PUBLIC_image_url + image
            : image || "/experience.png"
        }
        className={classNames(
          "md:w-[50%] w-full h-[500px] object-cover ",
          showImageRight ? "rounded-e-full" : "rounded-s-full"
        )}
        width={600}
        height={600}
        alt="home"
      />
      <div className=" md:w-[50%] w-full mt-5">
        <h2 className="text-2xl md:text-5xl font-DmSerif font-semibold mb-11">
          {headline}
        </h2>
        <p className="text-sm">{descriptions}</p>
        {button && (
          <Button
            className={classNames(
              "uppercase mt-9 text-xl rounded-full",
              button?.color == "terquish" ? "bg-terquish" : "bg-beige"
            )}
          >
            {button?.label}
          </Button>
        )}
      </div>
    </div>
  );
}
