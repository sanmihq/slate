"use client";

import { MouseEvent } from "react";
import { Note } from "@/types/note";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { noteColorMap } from "@/constants/noteColor";

interface NoteCardProps {
  note: Note;
  onEdit: () => void;
  onAction: (action: "delete" | "archive" | "pin" | "hide", note: Note) => void;
}

export default function NoteCard({ note, onEdit, onAction }: NoteCardProps) {
  const handleActionClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <Card
      className={`${noteColorMap[note.color]} w-full cursor-pointer rounded-sm shadow-none hover:shadow-md`}
      onClick={onEdit}
    >
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg">{note.title}</CardTitle>
        <div onClick={handleActionClick}>
          {/* <NoteActionsDropdown note={note} onAction={onAction} /> */}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-black/70">
          {note.content.substring(0, 150)}...
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <Badge key={tag} className="bg-background text-foreground">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
