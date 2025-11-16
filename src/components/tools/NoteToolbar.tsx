// components/tools/NoteToolbar.tsx
"use client";

import { NoteColor } from "@/types/note";
import ColorTool from "./ColorTool";
import TagTool from "./TagTool";
import ReminderTool from "./ReminderTool";
import HideTool from "./HideTool";

interface NoteToolbarProps {
  color: NoteColor;
  setColor: (c: NoteColor) => void;
  tags: string[];
  setTags: (t: string[]) => void;
  hidden: boolean;
  setHidden: (h: boolean) => void;
}

export default function NoteToolbar({
  color,
  setColor,
  tags,
  setTags,
  hidden,
  setHidden,
}: NoteToolbarProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <ColorTool color={color} setColor={setColor} />
      <TagTool tags={tags} setTags={setTags} />
      <ReminderTool />
      <HideTool hidden={hidden} setHidden={setHidden} />
    </div>
  );
}
