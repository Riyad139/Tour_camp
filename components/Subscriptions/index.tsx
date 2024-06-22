"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";

export default function Subscriptions() {
  const emailRef = useRef<HTMLInputElement | undefined>();
  const [subscribed, setSubscribed] = useState<null | boolean>(null);

  useEffect(() => {
    const subscribed = window.localStorage.getItem("isSubscribed");
    if (subscribed) {
      setSubscribed(true);
    } else setSubscribed(false);
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_strapi_url + "/" + "subscribed-users",
        {
          data: { email: emailRef?.current?.value },
        }
      );
      if (res.status !== 200) throw new Error("cant create subscription");
      window.localStorage.setItem("isSubscribed", "1");
      setSubscribed(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (subscribed == null)
    return <div className="h-28 rounded-xl bg-[#F1E8D9] animate-pulse"></div>;

  return (
    <div className="flex  flex-col md:flex-row gap-5 rounded-xl  bg-[#F1E8D9] px-7 py-5 items-center">
      {subscribed && (
        <p className="uppercase mx-auto text-4xl font-bold">
          You are already subscribed.
        </p>
      )}
      {!subscribed && (
        <>
          <div className="w-full md:w-[50%] lg:w-[65%]">
            <p>subscribe to our newsletter</p>
            Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
            Newsletter Today to always stay in touch
          </div>
          <div className="flex  w-full md:w-[50%] lg:w-[45%] ">
            <Input
              //@ts-ignore
              ref={emailRef}
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
        </>
      )}
    </div>
  );
}
