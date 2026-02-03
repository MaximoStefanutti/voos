import { g } from "framer-motion/client";

export const buttonBase =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f0d4a8]/50";

export const buttonVariants = {
  primary: "bg-[#0a3635] text-[#f0d4a8] hover:bg-[#0a3635]/80",
  secondary:
    "bg-trasparent border border-[#f0d4a8] text-[#f0d4a8] hover:bg-[#f0d4a8]/10",
  ghost: "text-[#f0d4a8] hover:bg-[#f0d4a8]/10",
};

export const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};
