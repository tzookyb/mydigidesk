
export class ListControlsRight extends React.Component {




    render() {

        const archiveIcon = <span style={greyStyle} className="material-icons">archive</span>
        const removeIcon = <span style={greyStyle} className="material-icons">delete</span>
        const markRead = <span style={greyStyle} className="material-icons">mark_email_read</span>

        return (
            <div className="list-right-controls">

                <div onClick={() => this.props.onArchive(this.props)}>{archiveIcon}</div>
                <div onClick={() => this.props.onRemove(this.props)}>{removeIcon}</div>
                <div onClick={() => this.props.onMarkRead(this.props)}>{markRead}</div>

            </div>
        )
    }
}

const greyStyle = {
    fontSize: '1.3em',
    color: 'rgb(130, 130, 130)'
}