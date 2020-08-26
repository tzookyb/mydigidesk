
const { NavLink, withRouter } = ReactRouterDOM;

export class MailSideBar extends React.Component {

    render() {
        // also an active class with links and routers
        return (
            <div className="mail-sidebar-container">
                <h3>Compose</h3>

                <NavLink to={"/mail"} className="sidebar-item">Inbox</NavLink>
                <NavLink to={"/starred"}  className="sidebar-item">Starred</NavLink>
                <NavLink to={"/sent"} className="sidebar-item">Sent</NavLink>
                <NavLink to={"/archived"} className="sidebar-item">Archived</NavLink>
            </div>
        )
    }
}
