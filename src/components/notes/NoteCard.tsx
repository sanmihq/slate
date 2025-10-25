"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";

export default function NoteCard({
  title,
  content,
  onPress,
}: {
  title: string;
  content: string;
  onPress: () => void;
}) {
  return (
    <Card
      radius="sm"
      isHoverable
      isPressable
      onPress={onPress}
      className="h-full cursor-pointer p-1 transition-all hover:shadow-lg"
    >
      <CardHeader className="text-lg font-semibold text-gray-600">
        {title}
      </CardHeader>
      <CardBody className="line-clamp-3 text-gray-600">{content}</CardBody>
    </Card>
  );
}
