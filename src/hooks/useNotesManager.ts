import { useState, useEffect, useCallback } from "react";
import { Note } from "@/types/note";
import { demoNotes } from "@/data/demoNotes";

// Define the shape of the data and functions the hook will return
export interface NotesManager {
  notes: Note[];
  filteredNotes: Note[];
  editingNote: Note | null;
  pinnedNotes: Note[];
  regularNotes: Note[];
  handleSearch: (query: string) => void;
  handleSave: (note: Note) => void;
  handleAction: (
    action: "delete" | "archive" | "pin" | "hide",
    note: Note,
  ) => void;
  openNewNoteDialog: () => void;
  closeDialog: () => void;
  setEditingNote: (note: Note | null) => void;
}

export const useNotesManager = (): NotesManager => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // Initialize notes data
  useEffect(() => {
    // This is where a real data fetch (e.g., from Firebase or an API) would happen
    setNotes(demoNotes);
    setFilteredNotes(demoNotes);
  }, []);

  // Handle keyword search and filtering
  const handleSearch = useCallback(
    (query: string) => {
      if (!query) return setFilteredNotes(notes);

      const lowerQuery = query.toLowerCase();
      const filtered = notes.filter((note) => {
        const content = (note.title + " " + note.content).toLowerCase();
        return content.includes(lowerQuery);
      });

      setFilteredNotes(filtered);
    },
    [notes],
  );

  // Handle saving (creating or updating) a note
  const handleSave = (note: Note) => {
    if (note.id) {
      // Update existing note
      setNotes((prev) => prev.map((n) => (n.id === note.id ? note : n)));
    } else {
      // Create new note
      const now = Date.now();
      const newNote: Note = {
        ...note,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
      };
      setNotes((prev) => [...prev, newNote]);
    }
    setEditingNote(null);
  };

  // Handle actions like delete, archive, or pin
  const handleAction = (
    action: "delete" | "archive" | "pin" | "hide",
    note: Note,
  ) => {
    console.log("Action:", action, note);
    // TODO: Implement the actual state modification logic here
  };

  // Utility functions for dialog control
  const openNewNoteDialog = () => setEditingNote({} as Note);
  const closeDialog = () => setEditingNote(null);

  // Separate notes into pinned and regular groups for display
  const pinnedNotes = filteredNotes.filter((n) => n.pinned);
  const regularNotes = filteredNotes.filter((n) => !n.pinned);

  // Return everything the component needs
  return {
    notes,
    filteredNotes,
    editingNote,
    pinnedNotes,
    regularNotes,
    handleSearch,
    handleSave,
    handleAction,
    openNewNoteDialog,
    closeDialog,
    setEditingNote,
  };
};
