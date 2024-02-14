"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function NavBar() {
  const path = usePathname();
  const NavItem = [
    { name: "the camp.", path: "/" },
    { name: "the experience.", path: "/experience" },
    { name: "the blog.", path: "/blog" },
  ];
  return (
    <header className="flex font-DmSerif py-7 justify-between items-center">
      <Image
        className={classNames(
          "w-12",
          path === "/experience"
            ? "filter invert sepia-[3%] saturate-[825%] hue-rotate-[200deg] brightness-[118%] contrast-[100%] fill-white"
            : ""
        )}
        src={"/icon-tree.svg"}
        width={700}
        height={700}
        alt="icon"
      />
      <ul
        className={classNames(
          "flex text-2xl font-bold space-x-7",
          path === "/experience" ? "text-white" : "text-black"
        )}
      >
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
