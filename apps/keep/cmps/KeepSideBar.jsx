const { NavLink } = ReactRouterDOM;
export class KeepSideBar extends React.Component {
    state = {
        labels: {},
    }

    componentDidMount() {
        this.setState({ labels: this.props.labels });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.labels === this.props.labels) return;
        else this.setState({ labels: this.props.labels })
    }

    makeLabelLinks = () => {
        let labelLinks = [];
        let idx = 1;
        for (const label in this.state.labels) {
            labelLinks.push(
                <NavLink key={idx++} to={`/keep/${label}`}>
                    <p className="label-link">{label}<span class="material-icons">label</span><span className="label-count">{this.state.labels[label]}</span></p>
                </NavLink >
            )
        }
        return labelLinks;
    }

    render() {
        const labelLinks = this.makeLabelLinks();
        return (
            <ul className="keep-sidebar">

                <NavLink to={'/keep/allnotes/'}>
                    <li><p className="label-link">All Notes</p></li>
                </NavLink>
                {labelLinks}
                <NavLink to={'/keep/trash'}>
                    <p className="label-link">Trash</p>
                </NavLink>

            </ul >
        )
    }
}