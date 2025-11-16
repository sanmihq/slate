"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import EmptyState from "./EmptyState";
import { Plus } from "lucide-react";

interface PageWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
  onCreate?: () => void;
  searchProps?: {
    onSearch: (query: string, mode: "keyword" | "ai") => void;
  };
  showEmpty?: boolean;
  onEmptyAction?: () => void;
}

export default function PageWrapper({
  title,
  description,
  children,
  onCreate,
  searchProps,
  showEmpty = false,
  onEmptyAction,
}: PageWrapperProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex space-x-4">
          {searchProps && <SearchBar onSearch={searchProps.onSearch} />}
          {onCreate && (
            <Button size="icon" onClick={onCreate}>
              <Plus />
            </Button>
          )}
        </div>
      </div>

      {showEmpty ? (
        <EmptyState onAction={onEmptyAction} />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
