import { keepService } from '../../../../services/keepService.js'
import { Labels } from './Labels.jsx'
export class LabelEditor extends React.Component {
    state = {
        isShown: false,
        input: '',
        noteLabels: [],
        globalLabels: [],
    }

    componentDidMount() {
        const noteLabels = this.props.note.labels;
        keepService.getLabels()
            .then((data) => {
                data = Object.keys(data);
                this.setState({ globalLabels: data, noteLabels })
            }
            )
    }

    onToggleLabelEditor = () => {
        this.setState(prevState => ({ isShown: !prevState.isShown }));
    }

    saveLabel = (ev) => {
        if (ev.key !== 'Enter') return;
        this.props.onNoteLabel(this.props.note, this.state.input)
        this.setState({ isShown: false, input: '' })
    }

    close = () => {
        this.setState({ isShown: false })
    }
    changeInput = (value) => {
        this.setState({ input: value });
    }

    render() {
        var otherLabels;
        if (!this.state.noteLabels.length) otherLabels = this.state.globalLabels;
        else {
            otherLabels = this.state.globalLabels.filter(label => {
                return this.state.noteLabels.every(noteLabel => {
                    return (noteLabel !== label);
                })
            })
        }

        return (
            <React.Fragment >
                <span className="material-icons note-btn note-label" onClick={this.onToggleLabelEditor}>label</span>
                {/* <div className="note-btn note-label" onClick={this.onToggleLabelEditor}>Label</div> */}
                {(this.state.isShown) &&
                    <div className="label-editor" onMouseLeave={this.close}>
                        <input className="label-input" value={this.state.input} placeholder="Enter new label" onKeyPress={(ev) => { this.saveLabel(ev) }} onChange={(ev) => this.changeInput(ev.target.value)} type="text" />
                        <Labels note={this.props.note} onNoteLabel={this.props.onNoteLabel} labels={this.state.noteLabels} isNotesLabel={true} />
                        <Labels note={this.props.note} onNoteLabel={this.props.onNoteLabel} labels={otherLabels} />
                    </div>}
            </React.Fragment>
        )
    }
}
