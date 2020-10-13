import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC1qa0F4x7aWnAOBk839nnHY4_Xh2qMqWQ",
    authDomain: "kanpur-grocery.firebaseapp.com",
    databaseURL: "https://kanpur-grocery.firebaseio.com",
    projectId: "kanpur-grocery",
    storageBucket: "kanpur-grocery.appspot.com",
    messagingSenderId: "552111252991",
    appId: "1:552111252991:web:be218d4ff27586f9bbb3ca",
    measurementId: "G-P7N1N1402C"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore(); 

export default firebase;

