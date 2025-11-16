"use client";

import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function ReminderTool() {
  return (
    <Button variant="outline" size="sm">
      <Clock className="mr-1 h-4 w-4" /> Reminder
    </Button>
  );
}
