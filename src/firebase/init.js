import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBWJM4a2qhvLBjYbB6dICX1kGYYpLA7Gqs",
    authDomain: "peter-smoothies.firebaseapp.com",
    projectId: "peter-smoothies",
    storageBucket: "peter-smoothies.appspot.com",
    messagingSenderId: "826896170453",
    appId: "1:826896170453:web:cfa51df00620a56109d15c",
    measurementId: "G-N924W27H7H"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()