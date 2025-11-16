import { db } from "@/lib/firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Note } from "@/types/note";

const notesCol = collection(db, "notes");

export const fetchNotes = async (): Promise<Note[]> => {
  const snapshot = await getDocs(notesCol);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Note, "id">),
  }));
};

export const createNote = async (note: Omit<Note, "id">) => {
  const docRef = doc(notesCol);
  await setDoc(docRef, note);
  return { id: docRef.id, ...note };
};

export const updateNote = async (id: string, note: Partial<Note>) => {
  const noteRef = doc(notesCol, id);
  await updateDoc(noteRef, note);
};

export const deleteNote = async (id: string) => {
  const noteRef = doc(notesCol, id);
  await deleteDoc(noteRef);
};
