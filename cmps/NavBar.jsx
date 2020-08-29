const { NavLink, withRouter } = ReactRouterDOM;

class _NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <NavLink to={'/'}><span title="Home" style={iconSize} className="material-icons navbar-icon">home</span></NavLink>
                    <NavLink to={'/mail'}><span title="Email" style={iconSize} className="material-icons navbar-icon">email</span></NavLink>
                    <NavLink to={'/keep/allnotes'}><span title="Keep" style={iconSize} className="material-icons navbar-icon">sticky_note_2</span></NavLink>
                </nav>
            </div>
        )
    }
}

export const NavBar = withRouter(_NavBar)

const iconSize = {
    fontSize: '40px'
}