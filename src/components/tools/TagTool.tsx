"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tag as TagIcon, X } from "lucide-react";
import { Badge } from "../ui/badge";

interface TagToolProps {
  tags: string[];
  setTags: (t: string[]) => void;
}

export default function TagTool({ tags, setTags }: TagToolProps) {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <TagIcon className="mr-1 h-4 w-4" /> Tags ({tags.length})
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64">
        <div className="flex flex-col gap-2">
          {/* Input to add new tag */}
          <div className="flex gap-2">
            <Input
              placeholder="Add new tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button size="sm" onClick={handleAddTag}>
              Add
            </Button>
          </div>

          {/* Existing tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="inline-flex w-fit items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap"
              >
                {tag}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-red-400"
                  onClick={() => handleRemoveTag(tag)}
                />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
