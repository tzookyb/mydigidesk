import { keepService } from '../../../services/keepService.js'

export class Keep extends React.Component {

    state = {
        notes: [],

    }

    componentDidMount() {
        keepService.getNotes()
            .then((notes) => {
                this.setState({ notes })
            })
    }


    render() {
        return (
            <React.Fragment>
                <h2>Keep</h2>
            </React.Fragment>
        )
    }
}