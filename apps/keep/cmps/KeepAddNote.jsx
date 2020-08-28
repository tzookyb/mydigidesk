import { keepService } from '../../../services/keepService.js'
import { ColorPalette } from './note/ColorPalette.jsx'

export class KeepAddNote extends React.Component {
    state = {
        input: '',
        placeHolder: 'Enter new text note',
        type: 'text'
    }

    changeInput = (value) => {
        this.setState({ input: value })
    }


    changeType = (type) => {
        switch (type) {
            case 'text':
                this.setState({ input: '', placeHolder: 'Enter new text note', type: 'text' })
                break;
            case 'image':
                this.setState({ input: '', placeHolder: 'Paste image url here!', type: 'image' })
                break;
            case 'video':
                this.setState({ input: '', placeHolder: 'Paste Youtube url here!', type: 'video' })
                break;
            case 'todo':
                this.setState({ input: '', placeHolder: 'start writing to-do list...', type: 'todo' })
                break;
        }
    }

    saveNote = () => {
        const data = {
            type: this.state.type,
            content: this.state.input,
            isPinned: false,
            backgroundColor: '#ffffff',
            labels: [],
        }
        keepService.createNote(data)
            .then(() => {
                this.changeType('text');
                this.props.refresh();

            });
    }

    render() {
        return (
            <div className="add-note">
                <textarea className="add-note-input" onChange={(ev) => this.changeInput(ev.target.value)} value={this.state.input} placeholder={this.state.placeHolder} type="search" ></textarea>
                <div className="add-note-icons">
                    <span style={submitStyle} className="material-icons add-btn submit" onClick={this.saveNote}>note_add</span>
                    <span style={iconStyle} className="material-icons add-btn text" onClick={() => this.changeType('text')}>sticky_note_2</span>
                    <span style={iconStyle} className="material-icons add-btn image" onClick={() => this.changeType('image')}>image</span>
                    <span style={iconStyle} className="material-icons add-btn video" onClick={() => this.changeType('video')}>ondemand_video</span>
                    <span style={iconStyle} className="material-icons add-btn todo" onClick={() => this.changeType('todo')}>check_box</span>
                </div>
            </div>
        )
    }

}
const iconStyle = {
    fontSize: '35px'
}
const submitStyle = {
    fontSize: '35px',
    color: '#2a9df4'
}