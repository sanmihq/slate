"use client";
import NoteList from "@/components/notes/NoteList";
import PageWrapper from "@/components/shared/PageWrapper";
import NoteEditorDialog from "@/components/notes/NoteEditorDialog";
import { useNotesManager } from "@/hooks/useNotesManager";

export default function NotesPage() {
  const {
    filteredNotes,
    editingNote,
    pinnedNotes,
    regularNotes,
    handleSearch,
    handleSave,
    handleAction,
    openNewNoteDialog,
    closeDialog,
    setEditingNote,
  } = useNotesManager();

  return (
    <>
      <PageWrapper
        title="Notes"
        description="Your personal notes"
        onCreate={openNewNoteDialog}
        searchProps={{ onSearch: handleSearch }}
        showEmpty={filteredNotes.length === 0}
        onEmptyAction={openNewNoteDialog}
      >
        {/* Pinned Notes List */}
        {pinnedNotes.length > 0 && (
          <section className="mb-6">
            <h2 className="text-muted-foreground mb-2 text-sm font-medium uppercase">
              Pinned
            </h2>
            <NoteList
              notes={pinnedNotes}
              onEdit={setEditingNote}
              onAction={handleAction}
            />
          </section>
        )}

        {/* Regular Notes List */}
        {regularNotes.length > 0 && (
          <section>
            {pinnedNotes.length > 0 && (
              <h2 className="text-muted-foreground mb-2 text-sm font-medium uppercase">
                Others
              </h2>
            )}
            <NoteList
              notes={regularNotes}
              onEdit={setEditingNote}
              onAction={handleAction}
            />
          </section>
        )}
      </PageWrapper>

      {/* Note Editor Dialog */}
      <NoteEditorDialog
        note={editingNote}
        open={!!editingNote}
        onClose={closeDialog}
        onSave={handleSave}
      />
    </>
  );
}
