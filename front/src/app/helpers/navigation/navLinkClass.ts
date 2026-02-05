import clsx from "clsx";

export const navLinkClass = (isActive: boolean, extra?: string) =>
  clsx(
    "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
    isActive
      ? "bg-[#f0d4a8] text-[#0a3635]"
      : "text-[#f0d4a8] hover:bg-[#f0d4a8]/20 hover:text-white",
    extra,
  );
