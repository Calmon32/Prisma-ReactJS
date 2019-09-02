import * as firebase from 'firebase'

var firebaseConfig = {
    // Config from firebase
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}