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
        "flex gap-10 py-5",
        showImageRight ? "" : "flex-row-reverse"
      )}
    >
      <Markdown
        className={classNames("", LandScapeImage ? " w-[49%]" : ["w-full"])}
      >
        {description}
      </Markdown>
      <Image
        className={classNames(
          "object-cover rounded-md",
          LandScapeImage ? "h-[30rem] w-[49%]" : "h-[40rem] w-[28%]"
        )}
        src={image}
        width={500}
        height={500}
        alt="boat"
      />
    </div>
  );
}
