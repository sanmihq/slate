"use client";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "Nothing here",
  description = "There are no items to display.",
  onAction,
}: EmptyStateProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      {onAction && (
        <EmptyContent>
          <Button onClick={onAction}>Create Note</Button>
        </EmptyContent>
      )}
    </Empty>
  );
}
