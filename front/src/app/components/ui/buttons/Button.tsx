"use client";

import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "./types";
import { buttonBase, buttonSizes, buttonVariants } from "./button.styles";

export default function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  asChild = false,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={`
            ${buttonBase}
            ${buttonVariants[variant]}
            ${buttonSizes[size]}
            ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}
            ${className}
            `}
      aria-busy={loading}
      disabled={!asChild ? disabled || loading : undefined}
      {...props}
    >
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-trasparent" />
      ) : (
        <span className="flex items-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      )}
    </Comp>
  );
}
