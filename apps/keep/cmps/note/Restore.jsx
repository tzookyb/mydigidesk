export function Restore({ note, onNoteTrash }) {

    return <span style={iconStyle} className="material-icons note-btn note-untrash" onClick={() => onNoteTrash(note, true)}>restore_from_trash</span>
} 
const iconStyle = {
    fontSize: '30px'
}