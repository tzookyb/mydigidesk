
const { NavLink, withRouter } = ReactRouterDOM;

export class _MailSideBar extends React.Component {



    render() {
        
        // need to fix active class 

        console.log(this.props.location.pathname);
        const isActive = this.props.location.pathname === '/mail' ? 'active-side-menu' : ''
        
        return (
            <div className="mail-sidebar-container">

                <NavLink to="/mail/compose" props={this.props}><button className="compose-btn">Compose</button></NavLink>

                <NavLink className="side-bar-item" activeClassName={isActive} to={"/mail"}>
                    <span style={custom} className="material-icons">all_inbox</span>Inbox</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/starred"}>
                    <span style={custom} className="material-icons">star_rate</span>Starred</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/sent"}>
                    <span style={custom} className="material-icons">send</span>Sent</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/unread"}>
                    <span style={custom} className="material-icons">markunread</span>Unread</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/archived"}>
                    <span style={custom} className="material-icons">archive</span>Archived</NavLink>
                <NavLink className="side-bar-item" activeClassName="active-side-menu" to={"/mail/all"}>
                    <span style={custom} className="material-icons">all_inbox</span>All Emails</NavLink>
            </div>
        )
    }
}

export const MailSideBar = withRouter(_MailSideBar)


const custom = {
    color: '#707071',
    fontSize: '1.2em',
    marginLeft: '1rem',
    marginRight: '1.5rem'
}

// in its route of the compose here, enter the current path from params