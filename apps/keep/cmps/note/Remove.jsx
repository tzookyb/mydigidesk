// This cmp shows 'remove' and deletes on click if note is already trashed,
//  or shows 'trash' and moves to trash on click

export function Remove({ onNoteTrash, noteIsTrash, note }) {

    const remove = noteIsTrash ? <span class="material-icons">delete_forever</span> : <span class="material-icons">delete</span>;

    return <div className="note-btn note-trash" onClick={() => onNoteTrash(note)}>{remove}</div>
}