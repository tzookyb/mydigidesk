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

    noteTrash = (note, unTrash = false) => {
        if (note.isTrash && !unTrash) {
            keepService.removeNote(note.id)
                .then(this.refresh());
        } else {
            const status = note.isTrash ? false : true;
            keepService.updateNote(note.id, 'isTrash', status)
                .then(this.refresh());
        }
    }

    noteBgc = (noteId) => {
        console.log("Keep -> noteBgc -> noteId", noteId)

    }
    notePin = (note) => {
        const status = note.isPinned ? false : true;
        keepService.updateNote(note.id, 'isPinned', status)
            .then(this.refresh());
    }

    noteMail = (noteId) => {
        console.log("Keep -> noteMail -> noteId", noteId)

    }


    render() {
        const notes = this.state.notes;
        return (
            <section className="keep-container">
                <KeepSideBar />
                <div className="keep-main-area">
                    <KeepAddNote />
                    <KeepPreviewNotes currFilter={this.state.filterBy} notes={notes} noteTrash={this.noteTrash} noteBgc={this.noteBgc} notePin={this.notePin} noteMail={this.noteMail} />
                </div>
            </section>
        )
    }
}