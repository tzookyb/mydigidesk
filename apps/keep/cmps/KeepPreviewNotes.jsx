export function KeepPreviewNotes({ currFilter, notes, noteTrash, noteBgc, notePin, noteMail }) {

    return notes.map((note) => {
        const pin = note.isPinned ? 'pinned' : 'pin';
        const remove = note.isTrash ? 'remove' : 'trash';
        const trashView = (currFilter === 'trash') ? true : false;
        return (
            <div key={note.id} className="note-card">
                <div className="note-pin" onClick={() => notePin(note)}>{pin}</div>
                <div className="note-title">{note.content.title}</div>
                <div className="note-content">{note.content.text}</div>
                <div className="note-controls">
                    <div className="note-btn note-trash" onClick={() => noteTrash(note)}>{remove}</div>
                    {trashView && <div className="note-btn note-untrash" onClick={() => noteTrash(note, true)}>unTrash</div>}
                    <div className="note-btn note-bgc" onClick={() => noteBgc(note.id)}>Bgc</div>
                    <div className="note-btn note-mail" onClick={() => noteMail(note.id)}>Email</div>
                </div>
            </div >
        )
    })
}