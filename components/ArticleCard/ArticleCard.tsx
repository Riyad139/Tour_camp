"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
export default function ArticleCard({
  headline,
  coverImage,
  slug,
  path,
}: {
  headline: string;
  coverImage: string;
  slug: string;
  path?: string;
}) {
  const router = useRouter();
  return (
    <Card className=" pb-3 cursor-pointer bg-[#F1E8D9] w-full sm:w-[46%] md:w-[29%] rounded-3xl">
      <CardContent
        onClick={() => {
          router.push(!path ? "/blog/" : path + slug);
        }}
        className="p-0"
      >
        <Image
          src={
            process.env.NEXT_PUBLIC_DEVELOPMENT == "TRUE"
              ? process.env.NEXT_PUBLIC_image_url + coverImage
              : coverImage
          }
          className="rounded-t-xl w-full h-96 object-cover"
          width={500}
          height={500}
          alt=""
        />
      </CardContent>
      <CardFooter className="flex items-start p-3 flex-col">
        <p className="text-2xl">{headline}</p>
        <p className="pt-3 text-sm">Monday , june 05, 2023 </p>
      </CardFooter>
    </Card>
  );
}
