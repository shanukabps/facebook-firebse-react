// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"






const firebaseConfig = {
  apiKey: "AIzaSyC0LtKj5VmzcSuRtS9XgIz7J76wuUdwQe0",
  authDomain: "facebook-b8275.firebaseapp.com",
  databaseURL: "https://facebook-b8275.firebaseio.com",
  projectId: "facebook-b8275",
  storageBucket: "facebook-b8275.appspot.com",
  messagingSenderId: "642947215619",
  appId: "1:642947215619:web:93b8c7cbfc75e483bab936",
  measurementId: "G-62MEC3QBCF"
}
var firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db