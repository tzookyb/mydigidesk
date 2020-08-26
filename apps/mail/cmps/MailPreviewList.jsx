
import { MailPreview } from './MailPreview.jsx'
import { mailService } from '../../../services/mailService.js'
const { Switch, Route } = ReactRouterDOM;




export class MailPreviewList extends React.Component {

    state = {
        emails: null
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        mailService.getAllEmails()
            .then(emails => this.setState({ emails }))
    }


    render() {

        // need to configure the list by the pressing of the side bar
        console.log(this.props)

        if (!this.state.emails) return <h2>Loading...</h2>

        return (
            <div className="mail-cmp-container">

                <MailPreview emails={this.state.emails} />

                {/* <Switch>
                    <Route path="/mail" />
                </Switch> */}

            </div>
        )
    }
}
