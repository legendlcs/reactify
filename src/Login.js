import React from 'react'

class Login extends React.Component {
    render () {
        return (
            <login>
                <h3> Welcome back, please log in. </h3>
                <input type='text' placeholder='Email'></input> <br />
                <input type='text' placeholder='Password'></input> <br />
            </login>
        )
    }
}

export default Login