import type { Op } from "../types";

export const getOps = async (): Promise<Op[]> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch operations");
    }

    return res.json();
};
