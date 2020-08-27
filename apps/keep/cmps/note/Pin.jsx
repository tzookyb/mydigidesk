export function Pin({ onNotePin, note }) {

    const pin = note.isPinned ? 'unpin' : 'pin';

    return <div className="note-pin" onClick={() => onNotePin(note)}>{pin}</div>;
}