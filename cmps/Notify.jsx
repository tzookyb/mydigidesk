import { EventBus } from '../services/event-bus-service.js'
export class Notify extends React.Component {
    state = {
        isShown: false,
        notification: ''
    }

    componentDidMount() {
        EventBus.on('notify', (message) => this.showNotification(message))
    }

    componentWillUnmount() {
    }

    showNotification = (message) => {
        this.setState({ isShown: true, notification: message })
        setTimeout(() => {
            this.setState({ isShown: false })
        }, 2500)
    }


    render() {
        const notifyClass = (this.state.isShown) ? 'notify shown' : 'notify';
        return (
            <div className={notifyClass}>
                {this.state.notification}
            </div>
        )
    }
}