import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "teal" | "navy" | "amber" | "slate";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  isHero?: boolean;
}

export function SectionHeader({
  badge,
  badgeVariant = "teal",
  title,
  description,
  align = "center",
  className,
  titleClassName,
  isHero = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4", isCenter ? "flex justify-center" : "")}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      {isHero ? (
        <h1
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-950 leading-[1.18]",
            titleClassName
          )}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-950 leading-tight",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
