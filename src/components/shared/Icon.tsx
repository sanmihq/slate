"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

type IconVariant = "inline" | "default";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: LucideIcon;
  variant?: IconVariant;
  className?: string;
}

export function Icon({
  icon: IconComponent,
  variant = "default",
  className = "",
  ...props
}: IconProps) {
  let baseClasses = "h-4 w-4";

  if (variant === "inline") {
    baseClasses += " mr-2";
  }

  return <IconComponent className={`${baseClasses} ${className}`} {...props} />;
}
