import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Subscriptions() {
  return (
    <div className="flex gap-5 rounded-xl  bg-[#F1E8D9] px-7 py-5 items-center">
      <div className="w-[65%]">
        <p>subscribe to our newsletter</p>
        Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
        Newsletter Today to always stay in touch
      </div>
      <div className="flex w-[45%] ">
        <Input width={"full"} placeholder="Enter your E-mail address" />
        <Button className="uppercase bg-terquish text-xl">Subscribe</Button>
      </div>
    </div>
  );
}
