import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const NavItem = [
    { name: "the camp.", path: "/" },
    { name: "the experience.", path: "/experience" },
    { name: "the blog.", path: "/blog" },
  ];
  return (
    <header className="flex py-7 justify-between items-center">
      <Image
        className="w-12"
        src={"/icon-tree.svg"}
        width={700}
        height={700}
        alt="icon"
      />
      <ul className="flex text-2xl font-bold space-x-7">
        {NavItem.map((item) => (
          <Link key={item.path} href={item.path}>
            <h5>{item.name}</h5>
          </Link>
        ))}
      </ul>
      <Button
        variant={"default"}
        size={"roundedFull"}
        className="text-xl uppercase"
      >
        Book Now
      </Button>
    </header>
  );
}
