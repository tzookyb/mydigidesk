const { NavLink, withRouter } = ReactRouterDOM;
import { EventBus } from '../services/event-bus-service.js'

class _NavBar extends React.Component {

    state = {
        isShown: false
    }

    unsubscribe;
    componentDidMount() {
        this.unsubscribe = EventBus.on('navToggle', this.toggleMenu)
    }

    toggleMenu = () => {
        this.setState(prevState => ({ isShown: !prevState.isShown }))
    }

    render() {
        const navClass = (this.state.isShown) ? 'shown' : '';
        return (
            <div>
                <nav className={navClass}>
                    <NavLink to={'/'}><span title="Home" style={iconSize} className="material-icons navbar-icon home">home</span></NavLink>
                    <NavLink to={'/mail'}><span title="Email" style={iconSize} className="material-icons navbar-icon mail">email</span></NavLink>
                    <NavLink to={'/keep/allnotes'}><span title="Keep" style={iconSize} className="material-icons navbar-icon keep">sticky_note_2</span></NavLink>
                </nav>
            </div>
        )
    }
}

export const NavBar = withRouter(_NavBar)

const iconSize = {
    fontSize: '40px'
}