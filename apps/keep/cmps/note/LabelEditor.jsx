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

    saveLabel = (key) => {
        if (key !== 'Enter') return;

    }

    changeInput = (value) => {
        this.setState({ input: value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-btn note-label" onClick={this.onToggleLabelEditor}>Label</div>
                {(this.state.isShown) && <div className="label-editor">
                    <input className="label-input" value={this.state.input} placeholder="Enter new label..." onKeyPress={(ev) => { this.saveLabel(ev.key) }} onChange={(ev) => this.changeInput(ev.target.value)} type="text" />
                    <GlobalLabels note={this.props.note} onNoteLabel={this.props.onNoteLabel} />
                </div>}
            </React.Fragment>
        )
    }
}
