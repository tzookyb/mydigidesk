export function Pin({ onNotePin, note }) {

    var iconStyle = {
        fontSize: '30px'
    }
    iconStyle.color = note.isPinned ? 'black' : 'grey';

    return <span style={iconStyle} className="material-icons note-pin" onClick={() => onNotePin(note)}>push_pin</span>;
}