import { useEffect, useState } from "react";
import axios from "../axios";

export default function usePayment({ obj }) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const fetchPayment = async (signal) => {
    setLoading(false);
    const res = await axios.post("/customer/payment/create", { signal }, obj);
    setResponse(res.data);
    setLoading(true);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchPayment(signal);
    return () => {
      controller.abort();
    };
  }, [obj]);
  return { loading, response };
}
