export class KeepAddNote extends React.Component {
    state = {
        addNoteInput: '',
    }

    ChangeInput = (value) => {
        this.setState({ addNoteInput: value })
    }


    render() {
        return (
            <div>
                <input className="add-note-input" onChange={(ev) => this.ChangeInput(ev.target.value)} value={this.state.addNoteInput} placeholder="Insert text on new note..." type="text" />
            </div>
        )
    }
}