
const { NavLink, withRouter } = ReactRouterDOM;

export class _MailSideBar extends React.Component {

    render() {
        // also an active class with links and routers
        return (
            <div className="mail-sidebar-container">
                <button>Compose</button>

                <NavLink to={"/mail/all"} className="sidebar-item">All Emails</NavLink> 
                <NavLink to={"/mail/starred"}  className="sidebar-item">Starred</NavLink>
                <NavLink to={"/mail/sent"} className="sidebar-item">Sent</NavLink>
                <NavLink to={"/mail/archived"} className="sidebar-item">Archived</NavLink>

                |
                
                <NavLink to={"/mail/unread"} className="sidebar-item">unread</NavLink>
                <NavLink to={"/mail"} className="sidebar-item">inbox</NavLink>
            </div>
        )
    }
}

export const MailSideBar = withRouter(_MailSideBar)

//should be in line 12 Inbox for all emails that status' are null
