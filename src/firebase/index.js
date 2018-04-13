import * as auth from './auth';
import * as db from './db';
import * as firebase from './firebase';

const provider = new firebase.auth.FacebookAuthProvider();


export {
    auth,
    db,
    firebase,
    provider
};
