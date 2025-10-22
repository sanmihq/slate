"use client";
import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Tooltip,
} from "@heroui/react";
import { Sparkles } from "lucide-react";
import { IconWrapper } from "./IconWrapper";

export default function AIGenerateButton({
  isCollapsed,
}: {
  isCollapsed: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip
        content="AI Generate"
        placement="right"
        isDisabled={!isCollapsed}
      >
        {isCollapsed ? (
          <Button
            isIconOnly
            color="primary"
            className="mt-4 w-full"
            onPress={onOpen}
          >
            <IconWrapper icon={Sparkles} />
          </Button>
        ) : (
          <Button
            color="primary"
            startContent={<IconWrapper icon={Sparkles} />}
            className="mt-4 w-full"
            onPress={onOpen}
          >
            AI Generate
          </Button>
        )}
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-lg font-semibold">
                AI Generate Note
              </ModalHeader>
              <ModalBody>
                <p className="mb-3 text-sm text-gray-500">
                  Describe what kind of note you want to create, and AI will
                  generate it for you.
                </p>
                <Input
                  autoFocus
                  placeholder="e.g., create a 2 week keto diet routine"
                  variant="bordered"
                />
                <div className="mt-3">
                  <p className="text-sm text-gray-400">Example prompts:</p>
                  <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-600">
                    <li>Create a 2 week keto diet routine</li>
                    <li>Generate a workout plan for beginners</li>
                    <li>Make a packing list for a beach vacation</li>
                    <li>Create a study schedule for final exams</li>
                  </ul>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Generate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
