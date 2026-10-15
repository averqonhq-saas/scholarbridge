import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "navy" | "amber" | "slate" | "outline";
  className?: string;
}

export function Badge({ children, variant = "teal", className }: BadgeProps) {
  const variants = {
    teal: "bg-teal-50 text-teal-800 border-teal-200/70",
    navy: "bg-slate-100 text-navy-900 border-slate-200",
    amber: "bg-amber-50 text-amber-900 border-amber-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
