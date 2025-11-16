import { Note } from "@/types/note";
import {
  doc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export const noteActions = {
  togglePin: async (note: Note) => {
    await updateDoc(doc(db, "notes", note.id), { pinned: !note.pinned });
  },
  archive: async (note: Note) => {
    await updateDoc(doc(db, "notes", note.id), { archived: true });
  },
  hide: async (note: Note) => {
    await updateDoc(doc(db, "notes", note.id), { hidden: true });
  },
  deleteNote: async (note: Note) => {
    await deleteDoc(doc(db, "notes", note.id));
  },
  updateNote: async (note: Note, data: Partial<Note>) => {
    await updateDoc(doc(db, "notes", note.id), data);
  },
  createNote: async (note: Omit<Note, "id">) => {
    const docRef = await addDoc(collection(db, "notes"), note);
    return docRef.id;
  },
};
