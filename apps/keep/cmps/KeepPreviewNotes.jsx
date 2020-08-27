import { Title } from './note/Title.jsx'
import { Content } from './note/Content.jsx';
import { Controls } from './note/Controls.jsx';

export function KeepPreviewNotes({ areaClass, currFilter, notes, onNoteTrash, onNoteBgc, onNotePin, onNoteMail }) {
    const trashView = (currFilter === 'trash') ? true : false;

    return (
        <div className={areaClass}>
            {notes.map((note) => {
                return (
                    <div key={note.id} style={{ backgroundColor: note.backgroundColor }} className="note-card">
                        <div className="note-inner">
                            <Title title={note.content.title} />
                            <Content content={note.content.text} />
                            <Controls note={note} trashView={trashView} onNoteTrash={onNoteTrash} onNotePin={onNotePin} onNoteBgc={onNoteBgc} onNoteMail={onNoteMail} />
                        </div>
                    </div >
                )
            })}
        </div>
    )
}