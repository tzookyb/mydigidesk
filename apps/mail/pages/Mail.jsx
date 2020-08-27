// need to import componenets in here and routes as well
import { MailPreviewList } from '../cmps/MailPreviewList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MailFilterBy } from '../cmps/MailFilterBy.jsx'
import { MailDetails } from '../cmps/MailDetails.jsx'
const { Route, Switch } = ReactRouterDOM;


export class Mail extends React.Component {

    render() {

        return (
            <section>
                <h2>Mail</h2>
                <MailFilterBy />
                <MailSideBar />

                <Switch>
                    <Route component={ MailDetails } path="/mail/:category?/details/:mailId" /> 

                    <Route component={ MailPreviewList } path="/mail/starred" />
                    <Route component={ MailPreviewList } path="/mail/sent" />
                    <Route component={ MailPreviewList } path="/mail/archived" />
                    <Route component={ MailPreviewList } path="/mail/all" />
                    <Route component={ MailPreviewList } path="/mail" />

                </Switch>
                
            </section>
        )
    }
}


// under the routes, we'll insert the mail details cmp

{/* <Route component={MailDetails} path="/mail/:category?/details/:mailId?" /> */}
