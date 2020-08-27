// need to import componenets in here and routes as well
import { MailPreviewList } from '../cmps/MailPreviewList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MainControlBar } from '../cmps/MainControlBar.jsx'
import { MailDetails } from '../cmps/MailDetails.jsx'
const { Route, Switch } = ReactRouterDOM;


export class Mail extends React.Component {

    render() {

        return (
            <section className="main-email-section">
                <MailSideBar className="route-side-bar-container" />
                <section className="main-body-section">
                    <MainControlBar className="route-filter-container" />

                    <Switch>
                        <Route component={MailDetails} path="/mail/:category?/details/:mailId" />

                        <Route component={MailPreviewList} path="/mail/starred" />
                        <Route component={MailPreviewList} path="/mail/sent" />
                        <Route component={MailPreviewList} path="/mail/archived" />
                        <Route component={MailPreviewList} path="/mail/all" />
                        <Route component={MailPreviewList} path="/mail" />

                    </Switch>
                </section>

            </section>
        )
    }
}


// under the routes, we'll insert the mail details cmp

{/* <Route component={MailDetails} path="/mail/:category?/details/:mailId?" /> */ }
