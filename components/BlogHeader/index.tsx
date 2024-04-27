import classNames from "classnames";
import dayjs from "dayjs";
import Image from "next/image";
export default function BlogHeader({
  img,
  text,
  textColor,
  author,
  createdAt,
}: {
  img: string;
  text: string;
  textColor: string;
  author: string;
  createdAt: string;
}) {
  return (
    <section className="flex font-DmSerif  min-h-[80vh] flex-col mt-40 items-start">
      <Image
        className="w-full brightness-50  rounded-br-[15%] rounded-bl-[15%] top-0 object-cover h-[90%]  left-0 -z-10 absolute"
        src={process.env.NEXT_PUBLIC_image_url + img}
        alt=""
        width={1000}
        height={1000}
        quality={100}
      />

      <div
        className={classNames(
          " text-3xl md:text-5xl  font-semibold space-y-3",
          textColor ? `text-${textColor}` : ""
        )}
      >
        {text.split(".").map((item) => (
          <h1 key={item}>{item}.</h1>
        ))}
        <p className="text-sm  font-mono">{author}</p>
        <p className="text-sm font-mono">
          {dayjs(createdAt).locale("en").format("dddd, MMMM DD, YYYY")}
        </p>
      </div>
    </section>
  );
}
