export function KeepPreviewNotes({ notes }) {

    return notes.map((note) => {
        return (
            <div key={note.id} className="note-card">
                <div className="note-title">{note.content.title}</div>
                <div className="note-content">{note.content.text}</div>
            </div>
        )
    })
}