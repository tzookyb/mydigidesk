// need to import componenets in here and routes as well
import { MailPreviewList } from '../cmps/MailPreviewList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MailFilterBy } from '../cmps/MailFilterBy.jsx'
const { Route } = ReactRouterDOM;


export class Mail extends React.Component {

    render() {
        
        return (
            <section>
                <h2>Mail</h2>
                <Route component={ MailFilterBy } />
                <Route component={ MailSideBar } />
                <Route component={ MailPreviewList } props={this.props}/>
            </section>
        )
    }
}