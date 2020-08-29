import { EventBus } from '../services/event-bus-service.js'

export class MenuBtn extends React.Component {
    state = {
        currentPage: '',
        isMenuOpen: false,
    }

    onToggle = () => {
        this.setState(prevState => { isMenuOpen: !prevState.isMenuOpen });
        console.log('toggle')
        EventBus.emit('menuToggle', '')
        EventBus.emit('navToggle', '')
    }

    render() {
        const button = (this.state.isMenuOpen) ? 'menu_open' : 'menu';
        return (
            <div className="menu-btn">
                <span onClick={this.onToggle} style={menuBtnStyle} className="material-icons">{button}</span>
            </div>
        )
    }
}

const menuBtnStyle = {
    fontSize: '40px',
    color: 'rgb(0, 166, 156)'
}