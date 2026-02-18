import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...names) => {
    return twMerge(clsx(names))
};
