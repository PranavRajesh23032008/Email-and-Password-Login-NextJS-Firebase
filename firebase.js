import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDGrOk5UCY2dp7hSw1GMR710wFXyYbmRR8",
    authDomain: "email-password-a2d30.firebaseapp.com",
    projectId: "email-password-a2d30",
    storageBucket: "email-password-a2d30.appspot.com",
    messagingSenderId: "273583870713",
    appId: "1:273583870713:web:691e4d5e4d50cdb1f94828"
  };

  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const auth = firebase.auth();

  export default auth