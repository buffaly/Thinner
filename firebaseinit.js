// Config file
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCKkxj427EN04iimNB74Ps5uGjzs4n7u98",
    authDomain: "thinner-b759f.firebaseapp.com",
    databaseURL: "https://thinner-b759f.firebaseio.com",
    projectId: "thinner-b759f",
    storageBucket: "thinner-b759f.appspot.com",
    messagingSenderId: "581613748580"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
