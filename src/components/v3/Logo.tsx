"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
}

export function Logo({ className, variant = "dark", align = "center" }: LogoProps) {
  return (
    <div className={cn(
      "flex flex-col leading-none select-none", 
      align === "center" ? "items-center" : "items-start",
      className
    )}>
      <span 
        className={cn(
          "font-serif text-2xl md:text-3xl tracking-tighter transition-colors duration-500",
          variant === "dark" ? "text-slate" : "text-bone"
        )}
      >
        Carly Gage
      </span>
      <div className={cn(
        "flex items-center gap-2 w-full mt-1",
        align === "center" ? "" : "justify-start"
      )}>
        {align === "center" && <div className={cn("h-[0.5px] flex-1", variant === "dark" ? "bg-slate/20" : "bg-bone/20")} />}
        <span 
          className={cn(
            "text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-sans font-medium transition-colors duration-500",
            variant === "dark" ? "text-slate/40" : "text-sand/60"
          )}
        >
          Photography
        </span>
        <div className={cn("h-[0.5px] flex-1", variant === "dark" ? "bg-slate/20" : "bg-bone/20")} />
      </div>
    </div>
  );
}

