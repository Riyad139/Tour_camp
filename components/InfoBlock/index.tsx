import classNames from "classnames";
import Image from "next/image";
import { Button } from "../ui/button";
import { InfoType } from "@/utils/type";

export default function InfoBlock<InfoBlock>({ value }: { value: InfoType }) {
  const { headline, descriptions, showImageRight, image, button } = value;

  return (
    <div
      className={classNames(
        "flex  py-7 gap-16",
        showImageRight ? "flex-row-reverse" : ""
      )}
    >
      <Image
        src={
          process.env.NEXT_PUBLIC_strapi_image_path + image || "/experience.png"
        }
        className={classNames(
          "w-[50%] h-[500px] object-cover ",
          showImageRight ? "rounded-e-full" : "rounded-s-full"
        )}
        width={600}
        height={600}
        alt="home"
      />
      <div className="w-[50%] mt-5">
        <h2 className="text-7xl font-DmSerif font-semibold mb-11">
          {headline}
        </h2>
        <p>{descriptions}</p>
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
