import { keepService } from '../../../services/keepService.js'
import { KeepSideBar } from 'KeepSideBar.jsx'
import { KeepAddNote } from 'KeepAddNote.jsx';
import { KeepPreviewNotes } from 'KeepPreviewNotes.jsx';
import { KeepNoteDetails } from 'KeepNoteDetails.jsx'
import { EventBus } from '../../../services/event-bus-service.js'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: '',
        labels: {},
        displayNoteId: '',
    }

    unsubscribe;
    componentDidMount() {
        this.props.updateCurrApp('keep')
        this.unsubscribe = EventBus.on('search', (str) => this.onNoteSearch(str));
        this.setState({ filterBy: this.props.match.params.filter }, this.refresh);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname === this.props.location.pathname) return;
        else this.routeUpdate();
    }
    componentWillUnmount() {
        this.props.updateCurrApp(null)
        this.unsubscribe();
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
        const displayNoteId = this.props.match.params.noteId;
        this.setState({ filterBy, displayNoteId }, this.getNotes);
    }

    onNoteTrash = (note, isRestore = false) => {
        if (note.isTrash && !isRestore) {
            keepService.removeNote(note.id)
                .then(this.refresh());
            EventBus.emit('notify', 'Note deleted for good...');
        } else {
            const status = note.isTrash ? false : true;
            if (!status && note.isPinned) this.onNotePin(note);
            keepService.updateNote(note.id, 'isTrash', status)
                .then(this.refresh());
            EventBus.emit('notify', (status) ? 'Note trashed' : 'Note restored');
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
        EventBus.emit('notify', (status) ? 'Note pinned' : 'Note unpinned');
    }

    onNoteMail = (note) => {
        EventBus.emit('notify', 'Note sent to mail!')
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
        EventBus.emit('notify', 'Label Changed');
    }

    onNoteSearch = (str) => {
        if (!str) str = '';
        keepService.searchNotes(str.toLowerCase())
            .then(notes => this.setState({ notes }))
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
            <React.Fragment>
                <KeepSideBar labels={this.state.labels} />
                <section className="keep-container" >
                    <div className="keep-main-area">
                        {this.state.displayNoteId && <KeepNoteDetails refresh={this.refresh} currFilter={props.currFilter} noteId={this.state.displayNoteId} {...props} />}
                        < KeepAddNote refresh={this.refresh} currFilter={this.state.filterBy} />
                        {(pinnedNotes.length) ? <KeepPreviewNotes areaClass="pinned-notes" notes={pinnedNotes} {...props} /> : ''}
                        {(notes.length) ? <KeepPreviewNotes areaClass="unpinned-notes" notes={notes} {...props} /> : ''}
                        {!pinnedNotes.length && !notes.length && <div className="no-notes">No notes to show.<br />change filter/search or create some...</div>}
                    </div>
                </section >
            </React.Fragment>
        )
    }
}