import { GlobalLabels } from './GlobalLabels.jsx'
export class LabelEditor extends React.Component {
    state = {
        isShown: false,
        input: '',
        noteLabels: [],
    }

    componentDidMount() {
        this.setState({ noteLabels: this.props.note.labels })
    }
    onToggleLabelEditor = () => {
        this.setState(prevState => ({ isShown: !prevState.isShown }));
    }

    saveLabel = (ev) => {
        if (ev.key !== 'Enter') return;
        this.props.onNoteLabel(this.props.note, this.state.input)
        this.setState({ isShown: false, input: '' })
    }

    changeInput = (value) => {
        this.setState({ input: value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-btn note-label" onClick={this.onToggleLabelEditor}>Label</div>
                {(this.state.isShown) && <div className="label-editor">
                    <input className="label-input" value={this.state.input} placeholder="Enter new label" onKeyPress={(ev) => { this.saveLabel(ev) }} onChange={(ev) => this.changeInput(ev.target.value)} type="text" />
                    <GlobalLabels note={this.props.note} onNoteLabel={this.props.onNoteLabel} />
                </div>}
            </React.Fragment>
        )
    }
}
