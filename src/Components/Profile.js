import React, { Component } from 'react';
import AddPhoto from './AddPhoto'

class Profile extends Component {

    constructor() {
        super()

    }

    render() {
        return <div>
            <AddPhoto {...this.props} />
            <button onClick={() => {
                this.props.auth.signOut().then(() => {
                    this.props.history.push('/')
                })
            }}>Sign Out</button>
        </div>
    }
}

export default Profile