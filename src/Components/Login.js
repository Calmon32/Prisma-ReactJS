import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super()
        
    }

    render() {
        return <button onClick={this.props.signIn}>Login with Google</button>
    }
}

export default Login