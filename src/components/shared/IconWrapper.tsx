import React from "react";
import type { LucideProps } from "lucide-react";
import { cn } from "@heroui/react";

type IconColor = "base" | "primary" | "success" | "danger" | "warning" | "gray";

const iconColors: Record<IconColor, string> = {
  base: "",
  primary: "text-blue-500",
  success: "text-green-500",
  danger: "text-red-500",
  warning: "text-yellow-500",
  gray: "text-gray-500",
};

interface IconWrapperProps extends LucideProps {
  icon: React.ComponentType<LucideProps>;
  color?: IconColor;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: IconComponent,
  color = "base",
  className,
  ...props
}) => {
  const defaultProps = {
    size: 18,
    strokeWidth: 1.7,
  };

  const colorClass = iconColors[color];

  return (
    <IconComponent
      {...defaultProps}
      {...props}
      className={cn(colorClass, className)}
    />
  );
};
