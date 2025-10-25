"use client";

import { Textarea } from "@heroui/react";

export default function NoteEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Textarea
      size="lg"
      placeholder="Start writing your note..."
      value={value}
      onValueChange={onChange}
      minRows={14}
      variant="flat"
      className="w-full resize-none rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
}
