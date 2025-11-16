"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, WholeWord } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string, mode: "keyword" | "ai") => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"keyword" | "ai">("keyword");

  const handleClick = () => {
    const nextMode = mode === "keyword" ? "ai" : "keyword";
    setMode(nextMode);
    onSearch(query, nextMode);
  };

  return (
    <div className="mb-4 flex items-center gap-2">
      <Input
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button size="icon" variant="outline" onClick={handleClick}>
        {mode === "keyword" ? <WholeWord /> : <Sparkles />}
      </Button>
    </div>
  );
}
