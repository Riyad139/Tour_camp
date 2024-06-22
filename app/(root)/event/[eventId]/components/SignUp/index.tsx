import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EventType } from "@/utils/type";
import { useRef, useState } from "react";
import { CallCheckout } from "@/utils/CheckOutUtils";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";
import { toast } from "@/components/ui/use-toast";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function SignUp({
  selectedEvents,
}: {
  selectedEvents: EventType;
}) {
  const [value, setValue] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const FNameRef = useRef<HTMLInputElement>();
  const LNameRef = useRef<HTMLInputElement>();
  const EmailRef = useRef<HTMLInputElement>();
  const TelRef = useRef<HTMLInputElement>();
  const handleSignUp = async () => {
    if (
      FNameRef.current?.value &&
      LNameRef.current?.value &&
      EmailRef.current?.value &&
      TelRef.current?.value &&
      value
    ) {
      const res = await CallCheckout(value);
      setClientSecret(res?.data.clientSecret);
    } else {
      toast({
        variant: "destructive",
        description: "Please complete all the required fields to proceed.",
      });
    }
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {!clientSecret && (
        <div className=" md:w-[50%]  space-y-7">
          <div className="flex w-full gap-7">
            <div className="w-full">
              <Label htmlFor="first">First Name</Label>
              <Input
                //@ts-ignore
                ref={FNameRef}
                width={"100%"}
                className="bg-[#F1E8D9]"
                type="first"
                id="text"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <Label htmlFor="last">Last Name</Label>
              <Input
                //@ts-ignore
                ref={LNameRef}
                width={"100%"}
                className="bg-[#F1E8D9]"
                type="text"
                id="last"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              //@ts-ignore
              ref={EmailRef}
              width={"100%"}
              className="bg-[#F1E8D9]"
              type="email"
              id="email"
              placeholder=""
            />
          </div>
          <div>
            <Label htmlFor="tel">Telephone</Label>
            <Input
              //@ts-ignore
              ref={TelRef}
              width={"100%"}
              className="bg-[#F1E8D9]"
              type="text"
              id="tel"
              placeholder=""
            />
          </div>
          <Button
            size={"roundedFull"}
            onClick={handleSignUp}
            className="text-xl bg-terquish uppercase"
          >
            Sign up
          </Button>

          <h3 className="text-4xl font-extrabold">Pricing</h3>
          <RadioGroup
            onValueChange={(value) => setValue(Number(value.split("tk")[0]))}
            defaultValue="comfortable"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={selectedEvents.packages.single + "tk"}
                id="r1"
              />
              <Label htmlFor="r1">
                Single: {selectedEvents.packages.single}tk
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={selectedEvents.packages.couple + "tk"}
                id="r2"
              />
              <Label htmlFor="r2">
                Couple: {selectedEvents.packages.couple}tk
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={selectedEvents.packages.group + "tk"}
                id="r3"
              />
              <Label htmlFor="r3">
                Family: {selectedEvents.packages.group}tk
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}
      {clientSecret && (
        <Elements
          //@ts-ignore
          options={options}
          stripe={stripePromise}
        >
          <CheckoutForm value={value} />
        </Elements>
      )}
    </>
  );
}
