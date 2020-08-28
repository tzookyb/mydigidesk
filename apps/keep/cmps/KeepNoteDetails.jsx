import { keepService } from '../../../services/keepService.js';
import { Title } from 'note/Title.jsx'
import { Content } from 'note/Content.jsx'
import { Controls } from 'note/Controls.jsx'
import { EventBus } from '../../../services/event-bus-service.js'
const { withRouter } = ReactRouterDOM

export class _KeepNoteDetails extends React.Component {
    state = {
        note: '',
        editedTitle: '',
        editedText: '',
    }
    componentDidMount() {
        keepService.getNoteById(this.props.noteId)
            .then(note => this.setState({ note }))
    }

    componentWillUnmount() {
        console.log(this.state);
        if (this.state.editedTitle || this.state.editedText) {
            var note = this.state.note;
            note.content.title = this.state.editedTitle || note.content.title;
            note.content.text = this.state.editedText || note.content.text;
            keepService.updateWholeNote(note)
                .then(() => {
                    EventBus.emit('notify', 'Note Updated');
                    this.props.refresh();
                })
        }
    }

    onChangeTitle = (ev) => {
        this.setState({ editedTitle: ev.target.innerText });

    }
    onChangeText = (ev) => {
        this.setState({ editedText: ev.target.innerText });
    }

    render() {
        const note = this.state.note;
        if (!note) return null;
        return (
            <div className="detail-container" onClick={() => this.props.history.goBack()}>
                <div onClick={(ev) => ev.stopPropagation()} className="note-details" style={{ backgroundColor: note.backgroundColor }}>
                    <div className="note-inner">
                        <Title onInput={this.onChangeTitle} edit={true} title={note.content.title} />
                        {(note.type === 'text') ? <Content onInput={this.onChangeText} edit={true} note={note} /> :
                            <Content note={note} />}
                        <Controls note={note} trashView={this.props.trashView} onNoteTrash={this.props.onNoteTrash} onNotePin={this.props.onNotePin} onNoteBgc={this.props.onNoteBgc} onNoteMail={this.props.onNoteMail} onNoteLabel={this.props.onNoteLabel} />
                    </div>
                </div>
            </div>
        )
    }
}

export const KeepNoteDetails = withRouter(_KeepNoteDetails);