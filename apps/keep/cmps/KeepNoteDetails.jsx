import { keepService } from '../../../services/keepService.js';
import { Title } from 'note/Title.jsx'
import { Content } from 'note/Content.jsx'
import { Todo } from 'note/Todo.jsx'
import { Controls } from 'note/Controls.jsx'
import { EventBus } from '../../../services/event-bus-service.js'
const { withRouter } = ReactRouterDOM

class _KeepNoteDetails extends React.Component {
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
        console.log("onChangeText -> ev.target.innerText", ev.target.innerText)

    }

    render() {
        const note = this.state.note;
        if (!note) return null;
        var content;
        if (note.type === 'text') content = <Content onInput={this.onChangeText} edit={true} note={note} />
        else if (note.type === 'todo') content = <Todo note={note} />
        else content = <Content edit={true} note={note} />

        return (
            <div className="detail-container" onClick={() => this.props.history.goBack()}>
                <div onClick={(ev) => ev.stopPropagation()} className="note-details" style={{ backgroundColor: note.backgroundColor }}>
                    <div className="note-inner">
                        <div>
                            <Title onInput={this.onChangeTitle} edit={true} title={note.content.title} />
                            {content}
                        </div>
                        <Controls note={note} trashView={this.props.trashView} onNoteTrash={this.props.onNoteTrash} onNotePin={this.props.onNotePin} onNoteBgc={this.props.onNoteBgc} onNoteMail={this.props.onNoteMail} onNoteLabel={this.props.onNoteLabel} />
                    </div>
                </div>
            </div>
        )
    }
}

export const KeepNoteDetails = withRouter(_KeepNoteDetails);