import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Register from './Register'
import Login from './Login'
import ForgotPass from './ForgotPass'


class App extends React.Component {
    render () {
        return (
            <Router>
                <main>
                <h1> Welcome, please choose from the following options. </h1>
                <ul>
                    <li> <Link to='/Register'> Register </Link> </li>
                    <li> <Link to='/Login'> Login </Link> </li>
                    <li> <Link to='/ForgotPass'> ForgotPassword </Link> </li>
                </ul>

                <Route exact path='/Register' component={Register} />
                <Route path='/Login' component={Login} />
                <Route path='/ForgotPass' component={ForgotPass} />
                </main>
            </Router>
        )
    }
}

export default App