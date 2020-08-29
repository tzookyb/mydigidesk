
import { mailService } from '../../../../services/mailService.js'

export class ListControlsLeft extends React.Component {
    



    render() {

        const unStarred = <span style={greyStyle} class="material-icons">star_outline</span>
        const starred = <span style={yellowStyle} class="material-icons">star</span>

        const unchecked = <span style={greyStyle} class="material-icons">check_box_outline_blank</span>
        

        return (
            <div className="list-left-controls">

                <div className="control check-control">{unchecked}</div>
                <div className="control star-control" onClick={() => this.props.onStar(this.props)}>{this.props.email.isStar ? starred : unStarred}</div>
  
            </div>
        )
    }
}

const yellowStyle={
    fontSize: '1.3em',
    color: '#F4B400'
}
const greyStyle={
    fontSize: '1.3em',
    color: 'rgb(89, 89, 89)'
}

// need to finish multi[le selection and deleting
