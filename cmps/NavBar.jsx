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
    closeMenu = () => {
        console.log('hi')
        this.setState({ isShown: false })
    }

    render() {
        const navClass = (this.state.isShown) ? 'shown' : '';
        return (
            <div>
                <nav className={navClass}>
                    <NavLink onClick={this.closeMenu} to={'/'}><span title="Home" style={iconSize} className="material-icons navbar-icon home">home</span></NavLink>
                    <NavLink onClick={this.closeMenu} to={'/mail'}><span title="Email" style={iconSize} className="material-icons navbar-icon mail">email</span></NavLink>
                    <NavLink onClick={this.closeMenu} to={'/keep/allnotes'}><span title="Keep" style={iconSize} className="material-icons navbar-icon keep">sticky_note_2</span></NavLink>
                </nav>
            </div>
        )
    }
}

export const NavBar = withRouter(_NavBar)

const iconSize = {
    fontSize: '40px'
}