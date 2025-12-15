"use client";

import { useEffect, useState } from "react";

import { Op } from "@/utils/types";
import Home from "./components/Home";
import { opData } from "@/utils/data";

const Page = () => {
  const [ops, setOps] = useState<Op[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOps = async () => {
      try {
        setLoading(true);

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setOps(data);
      } catch (err: any) {
        setError(err?.message || "Something went wrong with fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchOps();
  }, []);

  // console.log(ops);

  return <Home ops={ops} loading={loading} error={error} />;
};

export default Page;
