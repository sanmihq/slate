"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function GenerateNoteDialog() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <SidebarGroup>
      <SidebarGroupLabel>AI Tools</SidebarGroupLabel>

      <SidebarMenu>
        <SidebarMenuItem>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <SidebarMenuButton tooltip="Generate Note">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>Generate Note</span>
                </div>
              </SidebarMenuButton>
            </DialogTrigger>

            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Generate Note with AI</DialogTitle>
                <p className="text-muted-foreground text-sm">
                  Uses remaining: <span className="font-medium">2 / 3</span>
                </p>
              </DialogHeader>

              <div className="mt-2 space-y-3">
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the note you want to generate... (e.g., 'Create a meal plan for next week')"
                  className="min-h-[120px] resize-none"
                />
              </div>

              <DialogFooter className="mt-4 flex justify-end gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  disabled={!prompt.trim()}
                  onClick={() => {
                    // TODO: trigger generation logic
                    console.log("Generating note:", prompt);
                    setPrompt("");
                    setOpen(false);
                  }}
                >
                  Generate
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
