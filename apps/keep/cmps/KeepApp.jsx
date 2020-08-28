import { keepService } from '../../../services/keepService.js'
import { KeepSideBar } from './KeepSideBar.jsx'
import { KeepAddNote } from './KeepAddNote.jsx';
import { KeepPreviewNotes } from './KeepPreviewNotes.jsx';
import { KeepNoteDetails } from './KeepNoteDetails.jsx'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: '',
        labels: {},
        displayNoteId: '',
    }

    componentDidMount() {
        this.setState({ filterBy: this.props.match.params.filter }, this.refresh);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname === this.props.location.pathname) return;
        else this.routeUpdate();
    }

    refresh = () => {
        this.getNotes();
        this.getLabels();
    }

    getNotes = () => {
        keepService.getNotes(this.state.filterBy)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    getLabels = () => {
        keepService.getLabels()
            .then(labels => {
                this.setState({ labels })
            })
    }

    routeUpdate = () => {
        const filterBy = this.props.match.params.filter;
        this.setState({ filterBy }, this.getNotes);
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

    onNoteLabel = (note, label) => {
        const idx = note.labels.findIndex(exstLabel => (exstLabel === label));
        if (idx === -1) {
            note.labels.push(label)
        } else {
            note.labels.splice(idx, 1);
        }
        keepService.updateNote(note.id, 'labels', note.labels)
            .then(this.refresh())
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
                <KeepSideBar labels={this.state.labels} />
                <div className="keep-main-area">
                    {(this.state.displayNoteId) ? <KeepNoteDetails note={this.getNote} /> : ''}
                    < KeepAddNote refresh={this.refresh} />
                    {(pinnedNotes.length) ? <KeepPreviewNotes areaClass="pinned-notes" notes={pinnedNotes} {...props} /> : ''}
                    {(notes.length) ? <KeepPreviewNotes areaClass="unpinned-notes" notes={notes} {...props} /> : ''}
                </div>
            </section>
        )
    }
}