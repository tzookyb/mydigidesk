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
        if (!currEmail.isRead) currEmail.isRead = true

        return (
            <div className="mail-details-container">


                {/* <div className="mail-details-body-continaer"> */}
                <h1 className="mail-details-header">{currEmail.subject}</h1>
                <div className="mail-details-subheader">
                    <div className="mail-details-icon"></div>
                    <h4 className="mail-details-name">{currEmail.name} <span className="mail-details-address">{`<${currEmail.address}>`}</span></h4>
                    <div className="mail-details-date">
                        <p>{currEmail.date}</p>
                    </div>
                </div>
                <p className="mail-details-body">{currEmail.body}</p>
                {/* </div> */}





            </div>
        )
    }
}

// insert details in a list manner