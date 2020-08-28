
import { MailPreview } from './MailPreview.jsx'
import { mailService } from '../../../services/mailService.js'
const { Link, Switch, Route } = ReactRouterDOM;




export class MailPreviewList extends React.Component {

    state = {
        emails: null,
        category: null

    }

    componentDidMount() {
        this.loadEmails()
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (this.props.location.pathname !== prevProps.location.pathname) this.loadEmails()
    }

    loadEmails() {
        const currPath = this.props.location.pathname;

        if (currPath === '/mail/all') {
            mailService.getAllEmails() 
                .then(emails => this.setState({ emails: emails, category: 'all' }))
        } else if (currPath === '/mail/unread') {
            mailService.getAllUnreadEmails()
                .then(emails => this.setState({ emails: emails, category: 'unread' }))
        } else if (currPath === '/mail/archived') {
            mailService.getAllArchivedEmails()
                .then(emails => this.setState({ emails: emails, category: 'archived' }))
        } else if (currPath === '/mail/sent') {
            mailService.getAllSentEmails()
                .then(emails => this.setState({ emails: emails, category: 'sent' }))
        } else if (currPath === '/mail/starred') {
            mailService.getAllStarredEmails()
                .then(emails => this.setState({ emails: emails, category: 'starred' }))
        } else if (currPath === '/mail') {
            mailService.getAllInboxEmails()
                .then(emails => this.setState({ emails: emails, category: 'inbox' }))
        } 
    }



    render() {

        if (!this.state.emails) return <h2>Loading...</h2>
        const emails = this.state.emails

        return (
            <div className="mail-cmp-container">
                {emails.map(email => {
                    return (
                        <MailPreview key={ email.id } email={ email } properties={this.props} />
                    )
                })}
            </div>
        )
    }
}
