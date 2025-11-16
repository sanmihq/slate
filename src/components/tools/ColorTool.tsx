"use client";

import { NoteColor } from "@/types/note";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

export default function ColorTool({
  color,
  setColor,
}: {
  color: NoteColor;
  setColor: (c: NoteColor) => void;
}) {
  const colors: NoteColor[] = [
    "default",
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette className="mr-1 h-4 w-4" /> Color ({color})
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select Color</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {colors.map((c) => (
            <DropdownMenuItem
              key={c}
              onSelect={() => setColor(c)}
              className={c === color ? "bg-accent font-bold" : ""}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
