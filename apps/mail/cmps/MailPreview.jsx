const { NavLink, Switch, Route } = ReactRouterDOM;
import { ListControlsLeft } from '../cmps/controls/ListControlsLeft.jsx'
import { ListControlsRight } from '../cmps/controls/ListControlsRight.jsx'

export class MailPreview extends React.Component {






    render() {
        const currLocation = this.props.properties.location.pathname
        const isRead = this.props.email.isRead

        return (
            <div className="email-item-container">
                <div className={`list-item ${isRead ? 'is-read' : ''}`} >
                    <ListControlsLeft />

                    <NavLink className="list-item-details-container" to={`${currLocation}/details/${this.props.email.id}`} props={this.props}>
                        <div className="list-item-details" key={this.props.email.id}>
                            <p className="item-name">{this.props.email.name}</p>
                            <p className="item-subject">{this.props.email.subject} </p>
                            {/* <p className="item-body"> {this.props.email.body}</p> */}
                        </div>
                    </NavLink>
                    <ListControlsRight />
                </div>
            </div>


        )
    }
}
