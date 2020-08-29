import { keepService } from '../../../../services/keepService.js'
import { EventBus } from '../../../../services/event-bus-service.js'

export class Todo extends React.Component {
    state = {
        note: '',
        list: [],
        input: '',
    }
    componentDidMount() {
        this.setState({ note: this.props.note, list: this.props.note.content.list });
    }

    componentWillUnmount() {
        var note = this.state.note;
        console.log(note)
        note.list = this.state.list;
        console.log(note);
        keepService.updateWholeNote(note)
            .then(() => {
                EventBus.emit('notify', 'Note Updated');
                this.props.refresh();
            })
    }


    onAddToList = (ev) => {
        if (ev.key !== 'Enter') return;
        this.state.list.unshift({ text: this.state.input, isDone: false });
        this.setState({ input: '' })
        console.log(this.state.list)
    }


    onChangeInput = (value) => {
        this.setState({ input: value })
    }

    checkItem = (idx) => {
        let items = [this.state.list];
        let item = { ...items[idx] };
        item = {...item, isDone: item.isDone ? false : true}
        items[idx] = item;
        console.log(items)
        this.setState({ list: items })
    }


    render() {
        return (
            <div className="note-content" >
                <ul className="todo-list">
                    {this.state.list.map((item, idx) => {
                        const itemClass = item.isDone ? 'done' : '';
                        const checkbox = item.isDone ? 'check_box' : 'check_box_outline_blank';

                        return <li onClick={() => this.checkItem(idx)} className={`todo-item ${itemClass}`} key={idx}>
                            <span style={{ fontSize: '1rem' }} className="material-icons">{checkbox}</span>
                            {item.text}
                        </li>
                    })}
                </ul>
                <input className="todo-input" value={this.state.input} onKeyUp={(ev) => this.onAddToList(ev)} onChange={(ev) => this.onChangeInput(ev.target.value)} type="search" placeholder="Enter to-do item here" />
            </div>
        )
    }
}