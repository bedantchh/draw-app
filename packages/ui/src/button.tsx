"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
}

export const Button = ({
  children,
  className,
  onClick,
  variant,
  size,
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${variant === "primary" ? "bg-primary" : ""} ${size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-base"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
