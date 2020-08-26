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
        const filterBy = this.props.match.params.filter;
        console.log("Keep -> componentDidMount -> filterBy", filterBy)

        this.setState({ filterBy });
        keepService.getNotes(filterBy)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('props', prevProps, 'state', prevState);
    }

    refresh() {
        keepService.getNotes(this.state.filterBy)
            .then((notes) => {
                this.setState({ notes })
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
        console.log("Keep -> render -> notes", notes)
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