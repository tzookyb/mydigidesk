export class MenuBtn extends React.Component {
    state = {
        currentPage: '',
        isMenuOpen: false,
    }


    render() {
        return (
            <div className="menu-btn">
                {this.state.isMenuOpen ? <span style={menuBtnStyle} class="material-icons">menu_open</span> : <span style={menuBtnStyle} class="material-icons">menu</span>}
            </div>
        )
    }
}

const menuBtnStyle = {
    fontSize: '40px',
    color: 'rgb(0, 166, 156)'
}