import React from 'react'

class Register extends React.Component {
    render () {
        return (
            <register>
                <h3> Welcome new user. Please register. </h3>
                <input type='text' placeholder='First Name'></input> <br />
                <input type='text' placeholder='Last Name'></input> <br />
                <input type='text' placeholder='Email'></input> <br />
                <input type='text' placeholder='Phone'></input> <br />
                <input type='text' placeholder='Age'></input> <br />
                <input type='text' placeholder='Password'></input> <br />
                <input type='text' placeholder='Confirm Password'></input> <br />
            </register>
        )
    }
}

export default Register