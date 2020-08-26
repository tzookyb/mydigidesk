const { NavLink } = ReactRouterDOM;

export class KeepSideBar extends React.Component {
    state = {
        activeFilter: 'allnotes',
    }

    render() {
        return (
            <div className="keep-sidebar">
                <NavLink to={'/keep/allnotes/'}>
                    <p>All Notes</p>
                </NavLink>
                <NavLink to={'/keep/label'}>
                    <p>Label</p>
                </NavLink>
                <NavLink to={'/keep/archive'}>
                    <p>Archive</p>
                </NavLink>
                <NavLink to={'/keep/trash'}>
                    <p>Trash</p>
                </NavLink>
            </div>
        )
    }
}