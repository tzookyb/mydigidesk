export function Pin({ onNotePin, note }) {

    // const pin = note.isPinned ? <span class="material-icons">push_pin</span> : <span class="material-icons">push_pin</span>;

    return <span style={iconStyle} className="material-icons note-pin" onClick={() => onNotePin(note)}>push_pin</span>;
}
const iconStyle = {
    fontSize: '30px'
}