import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyA26ao4OkpgpN7sp-H15QQx_Th5zJppVow",
    authDomain: "cooking-site-50fb4.firebaseapp.com",
    projectId: "cooking-site-50fb4",
    storageBucket: "cooking-site-50fb4.appspot.com",
    messagingSenderId: "212304644219",
    appId: "1:212304644219:web:7d48cba6c6f07362e1bade"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }