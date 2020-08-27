export function Pin({ onNotePin, note }) {

    const pin = note.isPinned ? 'unpin' : 'pin';

    const output = <div className="note-pin" onClick={() => onNotePin(note)}>{pin}</div>;

    return output;
}