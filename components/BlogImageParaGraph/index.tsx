import Markdown from "react-markdown";
import Image from "next/image";
import classNames from "classnames";
export default function BlogImageParaGraph({
  showImageRight,
  description,
  image,
  LandScapeImage,
}: {
  showImageRight: boolean;
  description: string;
  image: string;
  LandScapeImage: boolean;
}) {
  return (
    <div
      className={classNames(
        "flex md:flex-row flex-col gap-10 py-5",
        showImageRight ? "" : "md:flex-row-reverse"
      )}
    >
      <Markdown
        className={classNames(
          "",
          LandScapeImage ? " md:w-[49%] w-full" : "w-full"
        )}
      >
        {description}
      </Markdown>
      <Image
        className={classNames(
          "object-cover rounded-md",
          LandScapeImage
            ? "h-[30rem] md:w-[49%] w-full"
            : "h-[40rem] w-full md:w-[28%] flex-shrink-0 "
        )}
        src={image}
        width={500}
        height={500}
        alt="boat"
      />
    </div>
  );
}
