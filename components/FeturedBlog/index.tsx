import Image from "next/image";
import { Button } from "../ui/button";
import { useMemo } from "react";
import Link from "next/link";

export default function FeturedBlog({
  headline,
  short_descriptions,
  coverImage,
  slug,
}: {
  headline: string;
  short_descriptions: string;
  coverImage: string;
  slug: string;
}) {
  return (
    <div className="w-full my-16 gap-16 flex">
      <div className="w-[50%]">
        <h1 className="text-5xl font-bold">{headline}</h1>
        <p className="mt-9">{short_descriptions}</p>
        <Link href={"blog/" + slug}>
          <Button size={"roundedFull"} className="mt-7 text-xl  bg-terquish">
            Read more
          </Button>
        </Link>
      </div>
      <Image
        className="max-h-[26rem] object-cover w-[50%] rounded-3xl"
        src={process.env.NEXT_PUBLIC_strapi_image_path + coverImage}
        width={1920}
        height={1080}
        alt="blog image"
      />
    </div>
  );
}
