import { Button } from "../ui/button";

export default function Header() {
  return (
    <section className="flex flex-col mt-40 justify-end    items-start">
      <div className="text-8xl  font-semibold space-y-3">
        <h1>barrel.</h1>
        <h1>your.</h1>
        <h1>happiness.</h1>
      </div>
      <Button
        className="text-2xl bg-[#14A998] mt-16 rounded-full uppercase"
        color="#14A998"
        size={"lg"}
      >
        Book now
      </Button>
    </section>
  );
}
