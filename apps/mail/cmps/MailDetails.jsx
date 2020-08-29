const { NavLink } = ReactRouterDOM
import { mailService } from '../../../services/mailService.js'

export class MailDetails extends React.Component {

    state = {
        currEmail: null
    }

    componentDidMount() {
        this.loadEmail()
    }

    loadEmail() {
        mailService.getEmailbyId(this.props.match.params.mailId)
            .then(email => this.setState({ currEmail: email }))
    }

    render() {


        if (!this.state.currEmail) return <h4>Loading...</h4>
        const currEmail = this.state.currEmail
        if (!currEmail.isRead) mailService.markRead(currEmail.id) 

        console.log(this.props);
        
        return (
            <div className="mail-details-container">
                <h1 className="mail-details-header"><span className="material-icons back-btn">keyboard_backspace</span>{currEmail.subject}</h1>
                <div className="mail-details-subheader">
                    <div className="mail-details-icon"></div>
                    <h4 className="mail-details-name">{currEmail.name} <span className="mail-details-address">{`<${currEmail.address}>`}</span></h4>
                    <div className="mail-details-date">
                        <p>{currEmail.date}</p>
                    </div>
                </div>
                <p className="mail-details-body">{currEmail.body}</p>
            </div>
        )
    }
}

// insert details in a list manner