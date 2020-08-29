const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Mail } from 'apps/mail/pages/Mail.jsx'
import { Keep } from 'apps/keep/cmps/KeepApp.jsx'
import { Home } from 'pages/Home.jsx'
import { NavBar } from 'cmps/NavBar.jsx'
import { Notify } from 'cmps/Notify.jsx'
import { Search } from 'cmps/Search.jsx'
import { MenuBtn } from 'cmps/MenuBtn.jsx'

export class App extends React.Component {

    state = {
        currApp: null
    }

    updateCurrApp = (currApp) => {
        this.setState({ currApp })
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <header className="main-header">
                        <MenuBtn />
                        <img className="logo" src="assets/favicon.png" alt="" />
                        <div className="logo-text">igidesk</div>
                        <Search currApp={this.state.currApp} />
                        <NavBar />
                    </header>
                    <main>

                        <Switch>
                            <Route path="/mail" render={() => <Mail updateCurrApp={this.updateCurrApp} />} />
                            <Route exact path="/keep/:filter" render={(props) => <Keep updateCurrApp={this.updateCurrApp} {...props} />} />
                            <Route exact path="/keep/:filter/:noteId" render={(props) => <Keep updateCurrApp={this.updateCurrApp} {...props} />} />
                            <Route to component={Home} path="/" />
                        </Switch>
                        <Notify />
                    </main>
                </Router>
            </React.Fragment>
        )
    }
}
{/* <Route exact to component={Keep} path="/keep/:filter" />
<Route exact to component={Keep} path="/keep/:filter/:noteId" /> */}