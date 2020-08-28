import { EventBus } from '../services/event-bus-service.js'
export class Notify extends React.Component {
    state = {
        isShown: false,
        notification: ''
    }

    componentDidMount() {
        console.log('eventbus', this.state)
        EventBus.on('notify', (message) => this.showNotification(message))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('eventbus', this.state)
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
                <h1>{this.state.notification}</h1>
            </div>
        )
    }
}