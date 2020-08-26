const { NavLink, withRouter } = ReactRouterDOM


class _NavBar extends React.Component {




    render() {
        console.log('check this');
        return (
            <div>
                    <nav>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/mail'}>Mail</NavLink>
                        <NavLink to={'/keep'}>Keep</NavLink>
                    </nav>
            </div>
        )
    }
}

export const NavBar = withRouter(_NavBar)
