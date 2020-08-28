// This cmp shows 'remove' and deletes on click if note is already trashed,
//  or shows 'trash' and moves to trash on click

export function Remove({ onNoteTrash, noteIsTrash, note }) {

    const remove = noteIsTrash ? 'delete_forever' : 'delete';

    return <span style={iconStyle} className="material-icons note-btn note-trash" onClick={() => onNoteTrash(note)}>{remove}</span>
}
const iconStyle = {
    fontSize: '30px'
}