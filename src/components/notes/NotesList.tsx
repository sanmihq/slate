"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { IconWrapper } from "@/components/shared/IconWrapper";
import { Plus } from "lucide-react";

import NoteModal from "./NoteModal";
import { notes as initialNotes } from "@/data/notes";
import { Note } from "@/types/Note";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createNote,
  subscribeToNotes,
  updateNote,
} from "@/services/firebaseService";

export default function NotesList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const openNoteParam = searchParams.get("open");

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToNotes(setNotes);
    return () => unsubscribe();
  }, []);

  const isModalOpen = !!openNoteParam;
  const selectedNote =
    openNoteParam === "new"
      ? ({ id: "new", title: "", content: "" } as Note)
      : notes.find((n) => n.id === openNoteParam) || null;

  const handleNewNote = () => router.push("?open=new", { scroll: false });
  const handleOpenNote = (note: Note) =>
    router.push(`?open=${note.id}`, { scroll: false });
  const handleClose = () =>
    router.push(window.location.pathname, { scroll: false });

  const handleSave = async (data: Note) => {
    try {
      if (data.id && data.id !== "new") {
        await updateNote(data.id, data);
      } else {
        await createNote({ title: data.title, content: data.content });
      }
    } catch (error) {
      console.error("Error saving note:", error);
    }
    handleClose();
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">All Notes</h1>
        <Button
          color="primary"
          radius="sm"
          startContent={<IconWrapper icon={Plus} />}
          onPress={handleNewNote}
        >
          New Note
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {notes.map((note) => (
          <Card
            key={note.id}
            isPressable
            radius="sm"
            onPress={() => handleOpenNote(note)}
            className="h-48 cursor-pointer border border-gray-300 p-1 transition-all hover:shadow-lg"
          >
            <CardHeader>
              <h3 className="text-lg font-semibold">{note.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="line-clamp-4 text-[15px] whitespace-pre-wrap text-gray-600">
                {note.content}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>

      <NoteModal
        isOpen={isModalOpen}
        onClose={handleClose}
        note={selectedNote}
        onSave={handleSave}
      />
    </div>
  );
}
