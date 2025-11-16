"use client";

import { Button } from "@/components/ui/button";
import { EyeOff } from "lucide-react";

export default function HideTool({
  hidden,
  setHidden,
}: {
  hidden: boolean;
  setHidden: (h: boolean) => void;
}) {
  return (
    <Button
      variant={hidden ? "destructive" : "outline"}
      size="sm"
      onClick={() => setHidden(!hidden)}
    >
      <EyeOff className="mr-1 h-4 w-4" />
      {hidden ? "Unhide" : "Hide"}
    </Button>
  );
}
