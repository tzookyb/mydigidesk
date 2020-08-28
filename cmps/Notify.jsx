import { EventBus } from '../services/event-bus-service.js'
export class Notify extends React.Component {
    state = {
        isShown: false,
        notification: ''
    }
    unsubscribe;

    componentDidMount() {
        EventBus.on('notify', (message) => this.showNotification(message))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    showNotification = (message) => {
        console.log(message)
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