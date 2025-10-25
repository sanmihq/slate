import { db } from "../lib/firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  updateDoc,
  doc,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { Note } from "@/types/Note";

const NOTES_COLLECTION = "notes";
const notesCollection = collection(db, NOTES_COLLECTION);

// --- READ (Real-time Subscription) ---
export const subscribeToNotes = (callback: (notes: Note[]) => void) => {
  const notesQuery = query(notesCollection, orderBy("createdAt", "desc"));

  return onSnapshot(notesQuery, (snapshot) => {
    const notes: Note[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        content: data.content,
        createdAt:
          data.createdAt instanceof Timestamp
            ? data.createdAt.toMillis()
            : Date.now(),
      } as Note;
    });
    callback(notes);
  });
};

// --- CREATE ---
export const createNote = (noteData: { title: string; content: string }) => {
  return addDoc(notesCollection, { ...noteData, createdAt: serverTimestamp() });
};

// --- UPDATE ---
export const updateNote = (id: string, data: Partial<Note>) => {
  const noteRef = doc(db, NOTES_COLLECTION, id);
  return updateDoc(noteRef, { title: data.title, content: data.content });
};

// --- DELETE (Optional) ---
// export const deleteNote = (id: string) => { /* ... implementation ... */ };
