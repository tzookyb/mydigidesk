

export class MailPreview extends React.Component {



    render() {
        return (
            // controls
            <div>
                {this.props.emails.map(email => {
                    return (
                        <div>
                            <h2>{email.name}</h2>
                            <p>{email.subject}</p>
                            <p>{email.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
