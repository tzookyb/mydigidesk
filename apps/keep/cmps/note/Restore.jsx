export function Restore({ note, onNoteTrash }) {
    
    return <div className="note-btn note-untrash" onClick={() => onNoteTrash(note, true)}>Restore</div>
} 