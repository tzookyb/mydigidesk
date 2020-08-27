import { keepService } from '../../../services/keepService.js'
import { KeepSideBar } from '../cmps/KeepSideBar.jsx'
import { KeepAddNote } from '../cmps/KeepAddNote.jsx';
import { KeepPreviewNotes } from '../cmps/KeepPreviewNotes.jsx';

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: '',
    }

    componentDidMount() {
        this.setState({ filterBy: this.props.match.params.filter }, this.getNotes);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname === this.props.location.pathname) return;
        else this.routeUpdate();
    }

    getNotes = () => {
        keepService.getNotes(this.state.filterBy)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    routeUpdate = () => {
        const filterBy = this.props.match.params.filter;
        this.setState({ filterBy }, this.getNotes);
    }

    refresh() {
        keepService.getNotes(this.state.filterBy)
            .then((notes) => {
                this.setState({ notes })
                console.log("Keep -> refresh -> notes", notes)
            })
    }

    onNoteTrash = (note, restore = false) => {
        if (note.isTrash && !restore) {
            keepService.removeNote(note.id)
                .then(this.refresh());
        } else {
            const status = note.isTrash ? false : true;
            if (!status && note.isPinned) this.onNotePin(note);
            keepService.updateNote(note.id, 'isTrash', status)
                .then(this.refresh());
        }
    }

    onNoteBgc = (noteId, color) => {
        console.log("Keep -> noteBgc -> color", color)
        console.log("Keep -> noteBgc -> noteId", noteId)
        keepService.updateNote(noteId, 'backgroundColor', color)
            .then(this.refresh());

    }
    onNotePin = (note) => {
        const status = note.isPinned ? false : true;
        keepService.updateNote(note.id, 'isPinned', status)
            .then(this.refresh());
    }

    onNoteMail = (note) => {
        console.log("Keep -> noteMail -> noteId", note)
    }

    onNoteLabel = (note, labels) => {
        console.log(note, labels);
    }

    render() {
        const pinnedNotes = this.state.notes.filter(note => note.isPinned);
        const notes = this.state.notes.filter(note => !note.isPinned);
        const props = {
            currFilter: this.state.filterBy,
            onNoteTrash: this.onNoteTrash,
            onNoteBgc: this.onNoteBgc,
            onNotePin: this.onNotePin,
            onNoteLabel: this.onNoteLabel,
            onNoteMail: this.onNoteMail,
        }

        return (
            <section className="keep-container">
                <KeepSideBar />
                <div className="keep-main-area">
                    <KeepAddNote />
                    {(pinnedNotes.length) ? <KeepPreviewNotes areaClass="pinned-notes" notes={pinnedNotes} {...props} /> : ''}
                    {(notes.length) ? <KeepPreviewNotes areaClass="unpinned-notes" notes={notes} {...props} /> : ''}
                </div>
            </section>
        )
    }
}