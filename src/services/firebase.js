import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB40ziQ82NhkvNjh16msmn5N7ACKs-h1Vo",
    authDomain: "me-app1.firebaseapp.com",
    projectId: "me-app1",
    storageBucket: "me-app1.appspot.com",
    messagingSenderId: "527378529550",
    appId: "1:527378529550:web:a9ea441264d34ae4aa6b5f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const googleProvider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, googleProvider }