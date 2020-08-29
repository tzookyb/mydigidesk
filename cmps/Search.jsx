import { EventBus } from '../services/event-bus-service.js'

export class Search extends React.Component {

    state = {
        currApp: null,
        currSearch: null
    }

    componentDidMount() {
        this.setState({ currApp: this.props.currApp })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currApp !== prevProps.currApp) {
            this.setState({ currApp: this.props.currApp })
        }
    }

    onStartType(ev) {
        let currType = ev.target.value
        this.setState({ currSearch: currType })
        EventBus.emit('search', currType)
    }


    render() {
        return (

            <div className="search-bar-container">

                <input onInput={() => { this.onStartType(event) }} className="search-bar" type="search" placeholder={`Search ${this.state.currApp}...`} />

            </div>
        )
    }
}

// search component will be in here as well
{/* <span class="material-icons">search</span> */ }