export type NoteStatus = "active" | "archived" | "private";
export type NoteColor =
  | "default"
  | "red"
  | "blue"
  | "yellow"
  | "green"
  | "purple";
export type QuickAction =
  | "pin"
  | "unpin"
  | "hide"
  | "change-color"
  | "archive"
  | "delete";

export interface Tag {
  id: string;
  userId: string;
  name: string;
}

export interface Note {
  id: string;
  userId: string;
  title: string;
  content: string;
  snippet: string;
  isPinned: boolean;
  status: NoteStatus;
  color: NoteColor;
  tagIds: string[];
  createdAt: number;
  updatedAt: number;
  reminderDate?: number;
  order: number;
}

// State model for your central store
export interface NoteStoreState {
  notes: Note[];
  tags: Tag[];
  privatePin: string | null;
  aiTrialCount: number;
}
