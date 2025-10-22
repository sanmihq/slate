"use client";
import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import { Search, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { IconWrapper } from "./IconWrapper";

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/sign-in" || pathname === "/sign-up") return null;

  const [isAiSearch, setIsAiSearch] = useState(false);

  return (
    <header className="flex items-center justify-center gap-4 bg-white p-4">
      <Input
        placeholder={
          isAiSearch
            ? "Search with AI context (e.g., 'my note about photography')..."
            : "Search notes..."
        }
        startContent={<IconWrapper icon={Search} />}
        className="w-96"
      />

      <Button
        isIconOnly
        color="primary"
        onPress={() => setIsAiSearch((prev) => !prev)}
      >
        {isAiSearch ? (
          <Sparkles className="h-4 w-4" />
        ) : (
          <Search className="h-4 w-4" />
        )}
      </Button>
    </header>
  );
}
