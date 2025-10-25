"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import React from "react";
import NoteEditor from "./NoteEditor";
import { Note } from "@/types/Note";

type NoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  note: Note | null;
  onSave: (data: Note) => void;
};

export default function NoteModal({
  isOpen,
  onClose,
  note,
  onSave,
}: NoteModalProps) {
  const [title, setTitle] = React.useState(note?.title || "");
  const [content, setContent] = React.useState(note?.content || "");

  React.useEffect(() => {
    setTitle(note?.title || "");
    setContent(note?.content || "");
  }, [note]);

  const handleSave = () => {
    if (!title.trim() && !content.trim()) return;

    if (onSave) {
      onSave({
        id: note?.id || "new",
        title,
        content,
      } as Note);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="3xl" className="p-4">
      <ModalContent>
        {(closeModal) => (
          <div>
            <ModalHeader>
              <Input
                size="lg"
                variant="underlined"
                placeholder="Note title"
                value={title}
                onValueChange={setTitle}
              />
            </ModalHeader>
            <ModalBody>
              <NoteEditor value={content} onChange={setContent} />
            </ModalBody>
            <ModalFooter>
              <Button onPress={closeModal}>Cancel</Button>
              <Button
                color="primary"
                onPress={handleSave}
                isDisabled={!title.trim() && !content.trim()}
              >
                {note?.id === "new" ? "Save Note" : "Update Note"}
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}
