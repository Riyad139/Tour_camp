"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ArticleCard({
  headline,
  coverImage,
  slug,
}: {
  headline: string;
  coverImage: string;
  slug: string;
}) {
  const router = useRouter();
  return (
    <Card className=" cursor-pointer w-full sm:w-[46%] md:w-[29%] rounded-t-xl">
      <CardContent
        onClick={() => {
          router.push("/blog/" + slug);
        }}
        className="p-0"
      >
        <Image
          src={process.env.NEXT_PUBLIC_image_url + coverImage}
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
