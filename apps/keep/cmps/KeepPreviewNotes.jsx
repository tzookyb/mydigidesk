import { Title } from 'note/Title.jsx'
import { Content } from 'note/Content.jsx';
import { Controls } from 'note/Controls.jsx';
const { Link } = ReactRouterDOM;


export function KeepPreviewNotes({ areaClass, currFilter, notes, onNoteTrash, onNoteBgc, onNotePin, onNoteMail, onNoteLabel }) {
    const trashView = (currFilter === 'trash') ? true : false;
    if (!notes) return null;
    return (
        <div className={areaClass}>
            {notes.map((note) => {
                return (
                    <div key={note.id} style={{ backgroundColor: note.backgroundColor }} className="note-card">
                        <div className="note-inner">
                            <Link onClick={(ev) => ev.stopPropagation()} key={note.id} to={`/keep/${currFilter}/${note.id}`}>
                                <Title title={note.content.title} />
                                <Content note={note} />
                            </Link>
                            <Controls note={note} trashView={trashView} onNoteTrash={onNoteTrash} onNotePin={onNotePin} onNoteBgc={onNoteBgc} onNoteMail={onNoteMail} onNoteLabel={onNoteLabel} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}