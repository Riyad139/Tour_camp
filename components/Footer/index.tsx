import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const NavItem = [
    { name: "the camp.", path: "/" },
    { name: "the blog.", path: "/blog" },
    { name: "the experience.", path: "/experience" },
    { name: "the events.", path: "/events" },
  ];

  const footerLink = [
    { name: "Imprint", path: "Imprint" },
    { name: "Terms and Conditions", path: "Imprint" },
    { name: "Data Protection", path: "Imprint" },
  ];

  return (
    <footer className="bg-black py-12 mt-40 text-white">
      <div className="max-w-[90rem] mx-auto">
        <nav className="flex items-center justify-between">
          <Image
            src={"/icon-tree.svg"}
            className="w-24 filter invert sepia-[3%] saturate-[825%] hue-rotate-[200deg] brightness-[118%] contrast-[100%] fill-white  h-24"
            width={600}
            height={600}
            alt="icon"
          />
          <ul className="flex sm:flex-row flex-col px-7 sm:text-base text-xl md:text-2xl font-semibold space-y-4 sm:space-y-0 sm:space-x-7">
            {NavItem.map((item) => (
              <Link key={item.path} href={item.path}>
                <h5>{item.name}</h5>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex px-6 items-center justify-between mt-11">
          <p>&copy; Tour camp - all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
