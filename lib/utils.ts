import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Icon } from "@iconify/react/dist/iconify.js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function arrangeMoneyFigures(figure: number): string {
  return figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

