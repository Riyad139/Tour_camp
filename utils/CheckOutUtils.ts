import axios from "axios";

export const CallCheckout = async (value: number) => {
  try {
    const res = await axios.post("/api/checkout", { price: value });

    return res;
  } catch (err) {}
};
