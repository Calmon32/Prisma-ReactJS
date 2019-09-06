import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile';
import PhotoWall from './PhotoWall'
import Single from './Single'
import { auth, signInWithGoogle } from '../database/firebase'


class Main extends Component {

    constructor() {
        super()
        this.state = {
            currentUser: null,
            loading: true
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user })
        })
        this.props.startLoadingPosts().then(() => {
            //this.state.loading = false;
            this.setState({ loading: false })
        })
        this.props.startLoadingComments()
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log(this.state.currentUser)
        if (this.state.loading) {
            return <div className="loader"></div>
        } else {
            if (this.state.currentUser) {
                return <div>
                    <Navbar title={'PhotoWall'} />
                    <div className="appbody">
                        <Route exact path="/" render={() => (
                            <PhotoWall {...this.props} />
                        )} />
                        <Route path="/single/:id" render={(params) => (
                            <Single loading={this.state.loading} {...this.props} {...params} />
                        )} />
                        <Route path="/profile" render={() => (
                            <Profile auth={auth} {...this.props} />
                        )} />
                    </div>
                </div>
            } else {
                return <Login signIn={signInWithGoogle} />
            }
        }
    }
}

export default Main