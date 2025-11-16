export type NoteColor =
  | "default"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple";

export interface Note {
  id: string;
  title: string;
  content: string;
  color: NoteColor;
  pinned: boolean;
  archived: boolean;
  hidden: boolean;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}
