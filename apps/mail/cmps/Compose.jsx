
import { mailService } from '../../../services/mailService.js'

export class Compose extends React.Component {

    state = {
        isShown: false,
        email: null
    }

    onSendEmail=()=>{
        mailService.sendEmail(this.state.email)
        this.props.history.push('/mail/sent')
    }

    onCloseCompose=()=>{
        this.props.history.push('/mail')
    }

    onInputChange = (ev)=>{
        this.setState({ email: { ...this.state.email, [ev.target.name]: ev.target.value } })
    }

    componentDidMount() {
        this.setState({ isShown: true })
    }
    
    componentWillUnmount() {
        this.setState({ isShown: false, email: null })
    }

    render() {
        return (
            <div className="compose-container">
                <div className="compose-inner-container">
                    <div className="compose-upper-controls">
                        <p>New Message</p>
                        <button onClick={this.onCloseCompose}>X</button>
                    </div>
                    <textarea onChange={this.onInputChange} name="email-address" className="compose-field email-address" cols="60" rows="1" placeholder="to"></textarea>
                    <textarea onChange={this.onInputChange} name="email-subject" className="compose-field email-subject" cols="60" rows="1" placeholder="subject"></textarea>
                    <textarea onChange={this.onInputChange} name="email-body" className="compose-field email-body" cols="60" rows="50" placeholder=""></textarea>

                    <button onClick={this.onSendEmail} className="send-btn">send</button>
                </div>
            </div>
        )
    }
}
