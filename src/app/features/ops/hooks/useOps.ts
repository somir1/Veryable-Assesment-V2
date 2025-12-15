"use client";

import { useEffect, useState } from "react";
import type { Op } from "../types";
import { getOps } from "../services/getOps";


export const useOps = () => {
    const [ops, setOps] = useState<Op[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOps = async () => {
            try {
                setLoading(true);
                const data = await getOps();
                setOps(data);
            } catch (err: any) {
                setError(err?.message ?? "Something went wrong fetching operations");
            } finally {
                setLoading(false);
            }
        };

        fetchOps();
    }, []);

    return { ops, loading, error };
};

