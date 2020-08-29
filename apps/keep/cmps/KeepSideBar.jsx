import { EventBus } from '../../../services/event-bus-service.js'
const { NavLink } = ReactRouterDOM;
export class KeepSideBar extends React.Component {
    state = {
        labels: {},
        show: true,
    }

    componentDidMount() {
        this.setState({ labels: this.props.labels });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.labels === this.props.labels) return;
        else this.setState({ labels: this.props.labels })
        EventBus.on('toggle-sidebar',
            this.setState(prevState => ({ show: !prevState.show }))
        )
    }

    makeLabelLinks = () => {
        let labelLinks = [];
        let idx = 1;
        for (const label in this.state.labels) {
            labelLinks.push(
                <NavLink className="label-link" key={idx++} to={`/keep/${label}`}>
                    <p>{label}</p>
                    <div>
                        <span className="material-icons label-icon">label</span><span className="label-count">{this.state.labels[label]}</span>
                    </div>
                </NavLink >
            )
        }
        return labelLinks;
    }

    render() {
        const labelLinks = this.makeLabelLinks();
        return (
            <div className={(this.state.show) ? "keep-sidebar shown" : "keep-sidebar"}>

                <NavLink className="label-link" to={'/keep/allnotes/'}>
                    <p>All Notes</p>
                </NavLink>
                {labelLinks}
                <NavLink className="label-link" to={'/keep/trash'} >
                    <p>Trash</p><span className="material-icons trash-icon">delete</span>
                </NavLink>

            </div >
        )
    }
}