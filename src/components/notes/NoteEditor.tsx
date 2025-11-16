"use client";

import { useState } from "react";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode } from "@lexical/rich-text";
import { ParagraphNode, TextNode } from "lexical";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";

import { ToolbarPlugin } from "../editor/plugins/toolbar/toolbar-plugin";
import { HistoryToolbarPlugin } from "../editor/plugins/toolbar/history-toolbar-plugin";
import { BlockFormatDropDown } from "../editor/plugins/toolbar/block-format-toolbar-plugin";
import { FormatBulletedList } from "../editor/plugins/toolbar/block-format/format-bulleted-list";
import { FormatNumberedList } from "../editor/plugins/toolbar/block-format/format-numbered-list";
import { FormatHeading } from "../editor/plugins/toolbar/block-format/format-heading";
import { FormatParagraph } from "../editor/plugins/toolbar/block-format/format-paragraph";
import { FormatCodeBlock } from "../editor/plugins/toolbar/block-format/format-code-block";

import { FontFormatToolbarPlugin } from "../editor/plugins/toolbar/font-format-toolbar-plugin";
import { CodeHighlightPlugin } from "../editor/plugins/code-highlight-plugin";

import { editorTheme } from "../editor/themes/editor-theme";
import { TooltipProvider } from "../ui/tooltip";
import { ContentEditable } from "../editor/editor-ui/content-editable";

interface NoteEditorProps {
  initialContent?: string;
  onChange?: (content: string) => void;
}

export default function NoteEditor({
  initialContent,
  onChange,
}: NoteEditorProps) {
  const editorConfig: InitialConfigType = {
    namespace: "SimpleEditor",
    theme: editorTheme,
    nodes: [
      HeadingNode,
      ParagraphNode,
      TextNode,
      ListNode,
      ListItemNode,
      CodeNode,
      CodeHighlightNode,
      LinkNode,
    ],
    onError: (error: Error) => console.error(error),
  };
  const placeholder = "Start typing...";

  return (
    <div className="bg-background w-full overflow-hidden rounded-lg border">
      <LexicalComposer initialConfig={editorConfig}>
        <TooltipProvider>
          <Plugins placeholder={placeholder} />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  );
}

function Plugins({ placeholder }: { placeholder: string }) {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className="relative">
      {/* Toolbar */}
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="sticky top-0 z-10 border-b bg-transparent p-2">
            <div className="flex gap-2 overflow-auto">
              <BlockFormatDropDown>
                <FormatParagraph />
                <FormatHeading levels={["h1", "h2", "h3"]} />
                <FormatNumberedList />
                <FormatBulletedList />
                <FormatCodeBlock />
              </BlockFormatDropDown>
              <FontFormatToolbarPlugin /> <HistoryToolbarPlugin />
            </div>
          </div>
        )}
      </ToolbarPlugin>

      {/* Editor Content Area and Plugins */}
      <div className="relative">
        <HistoryPlugin />
        <CodeHighlightPlugin />
        <RichTextPlugin
          contentEditable={
            <div ref={onRef}>
              <ContentEditable
                placeholder={placeholder}
                className="editor-content-area relative block h-72 overflow-auto px-6 py-3 text-sm text-black/80 focus:outline-none"
              />
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ListPlugin />
        <AutoFocusPlugin />
      </div>
    </div>
  );
}
