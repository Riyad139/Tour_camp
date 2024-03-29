"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { RiMenuFoldLine } from "react-icons/ri";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function NavBar() {
  const path = usePathname();
  const [isOpen, setOppen] = useState(false);
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
          path === "/blog"
            ? ""
            : "filter invert sepia-[3%] saturate-[825%] hue-rotate-[200deg] brightness-[118%] contrast-[100%] fill-white"
        )}
        src={"/icon-tree.svg"}
        width={700}
        height={700}
        alt="icon"
      />
      <ul
        className={classNames(
          " sm:flex hidden text-xl md:text-2xl font-bold space-x-7",
          path === "/blog" ? "text-black" : "text-white"
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
      <div className=" block sm:hidden">
        <Sheet>
          <SheetTrigger
            className={classNames(
              "",
              path === "/blog" ? "text-black" : "text-white"
            )}
          >
            <RiMenuFoldLine size={35} />
          </SheetTrigger>
          <SheetContent className="text-3xl pt-9">
            {NavItem.map((item) => (
              <Link
                onClick={() => SheetClose(<p/>)}
                key={item.path}
                href={item.path}
              >
                <h5>{item.name}</h5>
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
