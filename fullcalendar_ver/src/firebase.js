import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKaBHeRCTcCYxmP06yaZQuus8FzIQ3seU",
    authDomain: "hanghae-calendar1.firebaseapp.com",
    projectId: "hanghae-calendar1",
    storageBucket: "hanghae-calendar1.appspot.com",
    messagingSenderId: "149683844082",
    appId: "1:149683844082:web:82989582384abd5b01b16b",
    measurementId: "G-RRL1P2WLSY"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
