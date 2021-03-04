import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaYSy5Mx6Vgx0SqphUxf9LdIDwvfbeMK0",
    authDomain: "hosting-4e2fb.firebaseapp.com",
    databaseURL: "https://hosting-4e2fb.firebaseio.com",
    projectId: "hosting-4e2fb",
    storageBucket: "hosting-4e2fb.appspot.com",
    messagingSenderId: "1098866333508",
    appId: "1:1098866333508:web:d80b6ac2238bec2fc3a911",
    measurementId: "G-1JM0QWCEN2"
};
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;       