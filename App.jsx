const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
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
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/mail'}>Mail</NavLink>
                            <NavLink to={'/keep'}>Keep</NavLink>
                        </nav>
                    </header>
                    <main>
                        <Switch>
                            <Route to component={Mail} path="/mail"></Route>
                            <Route to component={Keep} path="/keep"></Route>
                            <Route to component={Home} path="/"></Route>
                        </Switch>
                    </main>
                </Router>
            </React.Fragment>
        )
    }
}

