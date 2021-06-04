import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGFNzvZU8vzG7pG7WZXfdEm6RCVZBHvNI",
  authDomain: "netflix-x.firebaseapp.com",
  projectId: "netflix-x",
  storageBucket: "netflix-x.appspot.com",
  messagingSenderId: "1059932697064",
  appId: "1:1059932697064:web:43328008b0059e1d70b45d"
};

const firebase = Firebase.initializeApp(config);

export { firebase };