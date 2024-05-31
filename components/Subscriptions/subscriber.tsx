"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Subscriber() {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_strapi_url + "/" + "subscribed-users",
        {
          data: { email },
        }
      );
      if (res.status !== 200) throw new Error("cant create subscription");
      document.cookie = "subscribed=true";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="w-full md:w-[50%] lg:w-[65%]">
        <p>subscribe to our newsletter</p>
        Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
        Newsletter Today to always stay in touch
      </div>
      <div className="flex  w-full md:w-[50%] lg:w-[45%] ">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          width={"full"}
          placeholder="Enter your E-mail address"
        />
        <Button
          onClick={handleSubmit}
          className="uppercase bg-terquish text-xl"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
