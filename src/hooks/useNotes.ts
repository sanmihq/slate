import { useEffect, useState } from "react";
import { Note } from "@/types/note";
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
} from "@/services/noteService";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    setLoading(true);
    const data = await fetchNotes();
    setNotes(data);
    setLoading(false);
  };

  const addNote = async (note: Omit<Note, "id">) => {
    const newNote = await createNote(note);
    setNotes((prev) => [newNote, ...prev]);
  };

  const editNote = async (id: string, updates: Partial<Note>) => {
    await updateNote(id, updates);
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    );
  };

  const removeNote = async (id: string) => {
    await deleteNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return { notes, loading, addNote, editNote, removeNote, reload: loadNotes };
};
