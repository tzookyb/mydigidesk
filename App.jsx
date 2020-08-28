const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Mail } from 'apps/mail/pages/Mail.jsx'
import { Keep } from 'apps/keep/cmps/KeepApp.jsx'
import { Home } from 'pages/Home.jsx'
import { NavBar } from 'cmps/NavBar.jsx'
import {Notify} from 'cmps/Notify.jsx'

export class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <header className="main-header">
                        <Notify />
                        <NavBar />
                    </header>
                    <main>

                        <Switch>
                            <Route to component={Mail} path="/mail" />
                            <Route to component={Keep} path="/keep/:filter" />
                            <Route to component={Home} path="/" />
                        </Switch>
                    </main>
                </Router>
            </React.Fragment>
        )
    }
}