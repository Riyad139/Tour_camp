import Image from "next/image";
export default function BlogLandScapeImage({ image }: { image: string }) {
  return (
    <div className="w-full py-5 flex justify-center">
      <Image
        className="md:w-[70%] w-full h-[40rem] rounded-xl object-cover"
        src={image}
        width={500}
        height={500}
        alt="awd"
      />
    </div>
  );
}
