import { mailService } from '../../../services/mailService.js'

export class MailDetails extends React.Component {


    render() {
        console.log(this.props)
        console.log(this.props.match.params.mailId)
        
        var x = mailService.getEmailbyId(this.props.match.params.mailId)
            .then(x => console.log(x))

        return (
            <div>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
            </div>
        )
    }
}