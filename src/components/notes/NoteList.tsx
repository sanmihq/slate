"use client";

import { Note } from "@/types/note";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
  onEdit: (note: Note) => void;
  onAction: (action: "delete" | "archive" | "pin" | "hide", note: Note) => void;
}

export default function NoteList({ notes, onEdit, onAction }: NoteListProps) {
  if (!notes.length) return <p className="py-10 text-center">No notes here.</p>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={() => onEdit(note)}
          onAction={onAction}
        />
      ))}
    </div>
  );
}
