
const { NavLink, withRouter } = ReactRouterDOM;

export class _MailSideBar extends React.Component {

    render() {
        // also an active class with links and routers
        return (
            <div className="mail-sidebar-container">
                <button className="compose-btn">Compose</button>
                <NavLink className="side-bar-item" activeClassName="active-side-menu-2" to={"/mail"}>*icon* inbox</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/starred"}>*icon* Starred</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/sent"}>*icon* Sent</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/unread"}>*icon* unread</NavLink>

                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/archived"}>*icon* Archived</NavLink>
                
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/all"}>*icon* All Emails</NavLink> 
            </div>
        )
    }
}

export const MailSideBar = withRouter(_MailSideBar)

//should be in line 12 Inbox for all emails that status' are null
