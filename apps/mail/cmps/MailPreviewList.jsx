
import { MailPreview } from './MailPreview.jsx'
import { mailService } from '../../../services/mailService.js'
import { EventBus } from '../../../services/event-bus-service.js'

const { Link, Switch, Route } = ReactRouterDOM;




export class MailPreviewList extends React.Component {

    state = {
        emails: null,
        category: null

    }

    unsubscribe;

    componentDidMount() {
        this.loadEmails()
        this.unsubscribe = EventBus.on('search', (data) => this.searchInMails(data))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) this.loadEmails()
    }

    componentWillUnmount() {
        this.unsubscribe()
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

    searchInMails = (data) => {
        mailService.getSearchResults(data)
            .then(emails => this.setState({ emails: emails }))

            // maybe add search to url results and after taking the search from params
            // and implement the search when url is pasted
        if (data === '') this.loadEmails()
    }

    onStar = (props) => {
        mailService.setStar(props.email.id)
        this.loadEmails()
    }

    onArchive =(props)=>{
        mailService.setArchive(props.email.id)
        this.loadEmails()
    }

    onRemove =(props)=>{
        mailService.setRemove(props.email.id)        
        this.loadEmails()
    }

    onMarkRead =(props)=>{
        mailService.markRead(props.email.id)
        this.loadEmails()
    }

    render() {

        if (!this.state.emails) return <h2>Loading...</h2>
        const emails = this.state.emails

        return (
            <div className="mail-cmp-container">
                {emails.map(email => {
                    return (
                        <MailPreview key={email.id} email={email} 
                        onStar={this.onStar} 
                        properties={this.props}
                        onArchive={this.onArchive}
                        onRemove={this.onRemove}
                        onMarkRead={this.onMarkRead}
                        />
                    )
                })}
            </div>
        )
    }
}
