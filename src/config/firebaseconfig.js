import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAmC_4ftYd2Pp0kvP5X2BLnCisMwSHH6TQ",
  authDomain: "pesquisa-satisfacao-5317e.firebaseapp.com",
  databaseURL: "https://pesquisa-satisfacao-5317e-default-rtdb.firebaseio.com",
  projectId: "pesquisa-satisfacao-5317e",
  storageBucket: "pesquisa-satisfacao-5317e.appspot.com",
  messagingSenderId: "439888033069",
  appId: "1:439888033069:web:8d9cde5ba22b4506fccfa4",
  measurementId: "G-KWRG9L6344"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;
