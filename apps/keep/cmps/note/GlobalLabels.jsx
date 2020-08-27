import { keepService } from '../../../../services/keepService.js'
export class GlobalLabels extends React.Component {
    state = {
        labels: '',
    }

    componentDidMount() {
        keepService.getLabels()
            .then(labels => {
                this.setState({ labels })
            })
    }

    render() {
        const labels = (this.state.labels);
        if (!labels) return null;
        var idx = 1;
        var output = [];
        for (const label in labels) {
            output.push(<p key={idx++} className="global-label" onClick={() => this.props.onNoteLabel(this.props.note, label)}>{label}</p>)
        }
        return <div>{output}</div>
    }
}