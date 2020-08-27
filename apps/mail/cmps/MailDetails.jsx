import { mailService } from '../../../services/mailService.js'

export class MailDetails extends React.Component {

    state={
        currEmail: null
    }

    componentDidMount() {
        this.loadEmail()
    }

    loadEmail(){
        mailService.getEmailbyId(this.props.match.params.mailId)
            .then(email => this.setState({ currEmail: email }))
    }
    


    render() {


        if(!this.state.currEmail) return <h4>Loading...</h4>
        const currEmail = this.state.currEmail
        console.log(this.state.currEmail);

        console.log(this.props)
        console.log(this.props.match.params.mailId)
        
        return (
            <div>
                <h1>{currEmail.subject}</h1>
                <h3>{currEmail.subject} - <span>{currEmail.date}</span></h3>
                <h4>by: {currEmail.name}</h4>
                <br/>
                <p>{currEmail.body}</p>
            </div>
        )
    }
}

// insert details in a list manner