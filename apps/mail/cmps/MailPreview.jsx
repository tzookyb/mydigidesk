const { NavLink, Switch, Route } = ReactRouterDOM;

export class MailPreview extends React.Component {


    render() {
        // console.log('match', this.props.properties.location.pathname)
        const currLocation = this.props.properties.location.pathname
        
        return (
            // here will be the controls

            <NavLink to={`${currLocation}/details/${this.props.email.id}`} props={this.props}>
                <div>
                    <div key={this.props.email.id}>
                        <h2>{this.props.email.name}</h2>
                        <p>{this.props.email.subject}</p>
                        <p>{this.props.email.body}</p>
                    </div>

                </div>
            </NavLink>
        )
    }
}
