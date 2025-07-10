// src/lib/utils.js

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conditionally and resolves Tailwind conflicts.
 * Usage: cn("text-sm", isActive && "font-bold")
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
