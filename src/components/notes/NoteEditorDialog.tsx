// components/notes/NoteEditorDialog.tsx
"use client";

import { useState, useEffect } from "react";
import { Note, NoteColor } from "@/types/note";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NoteToolbar from "../tools/NoteToolbar";
import NoteEditor from "./NoteEditor";
import { noteColorMap } from "@/constants/noteColor";

interface NoteEditorDialogProps {
  open: boolean;
  note: Note | null;
  onClose: () => void;
  onSave: (note: Note) => void;
}

export default function NoteEditorDialog({
  open,
  note,
  onClose,
  onSave,
}: NoteEditorDialogProps) {
  const isNew = !note?.id;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState<NoteColor>("default");
  const [tags, setTags] = useState<string[]>([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setContent(note.content || "");
      setColor(note.color || "default");
      setTags(note.tags || []);
      setHidden(note.hidden || false);
    }
  }, [note]);

  const handleSave = () => {
    const now = Date.now();
    const noteToSave: Note = {
      id: note?.id ?? crypto.randomUUID(),
      title,
      content,
      color,
      pinned: note?.pinned ?? false,
      archived: note?.archived ?? false,
      hidden,
      tags,
      createdAt: note?.createdAt ?? now,
      updatedAt: now,
    };
    onSave(noteToSave);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={`${noteColorMap[color]} w-full md:max-w-4xl`}>
        <DialogHeader>
          <DialogTitle>{isNew ? "New Note" : "Edit Note"}</DialogTitle>
          <DialogDescription>
            Write, organize, and customize your note.
          </DialogDescription>
        </DialogHeader>

        <NoteToolbar
          color={color}
          setColor={setColor}
          tags={tags}
          setTags={setTags}
          hidden={hidden}
          setHidden={setHidden}
        />

        <Input
          placeholder="Note title..."
          className="mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <NoteEditor initialContent={content} onChange={setContent} />

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Note</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
