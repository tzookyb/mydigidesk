import { Pin } from './Pin.jsx'
import { Remove } from './Remove.jsx';
import { Restore } from './Restore.jsx';
import { ColorPalette } from './ColorPalette.jsx';
import { MailNote } from './MailNote.jsx';
import { LabelEditor } from './LabelEditor.jsx';

export function Controls({ note, trashView, onNoteTrash, onNotePin, onNoteBgc, onNoteLabel, onNoteMail }) {

    return (
        <div className="note-controls">
            {trashView || <Pin onNotePin={() => onNotePin(note)} note={note} />}
            <Remove note={note} onNoteTrash={() => onNoteTrash(note)} noteIsTrash={note.isTrash} />
            {trashView && <Restore note={note} onNoteTrash={onNoteTrash} />}
            <ColorPalette note={note} onNoteBgc={onNoteBgc} />
            <LabelEditor note={note} onNoteLabel={onNoteLabel} />
            <MailNote note={note} onNoteMail={onNoteMail} />
        </div>
    )
}