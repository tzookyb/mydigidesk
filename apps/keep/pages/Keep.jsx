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


    render() {
        const notes = this.state.notes;
        console.log("Keep -> render -> notes", notes)
        return (
            <section className="keep-container">
                <KeepSideBar />
                <div className="keep-main-area">
                    <KeepAddNote />
                    <KeepPreviewNotes notes={this.state.notes} />
                </div>
            </section>
        )
    }
}