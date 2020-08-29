


export class ListControlsRight extends React.Component {




    render() {

        const archiveIcon = <span style={greyStyle} class="material-icons">archive</span>
        const removeIcon = <span style={greyStyle} class="material-icons">delete</span>
        const markRead = <span style={greyStyle} class="material-icons">mark_email_read</span>

        return (
            <div className="list-right-controls">

                <div>{archiveIcon}</div>
                <div>{removeIcon}</div>
                <div>{markRead}</div>

            </div>
        )
    }
}

const greyStyle = {
    fontSize: '1.3em',
    color: 'rgb(130, 130, 130)'
}