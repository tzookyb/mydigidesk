const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

import Mail from './pages/Mail.jsx'
import Keep from './pages/Keep.jsx'
import Home from './pages/Home.jsx'

export class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <header>
                        <h1>AppSus</h1>
                        <nav>
                            <NavLink to={'/mail'}>my-Mail</NavLink>
                            <NavLink to={'/keep'}>Keep</NavLink>
                            <NavLink to={'/'}>Home</NavLink>
                        </nav>
                    </header>
                    <main>
                        <Switch>
                            <Route to component={Mail} path="/mail" />
                            <Route to component={Keep} path="/keep" />
                            <Route to component={Home} path="/" />
                        </Switch>
                    </main>
                </Router>
            </React.Fragment>
        )
    }
}