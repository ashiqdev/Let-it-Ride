import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB6YkQR9o_hpJtWjZk7YG08HpRpNtGqiKA',
  authDomain: 'ph-assignment-09.firebaseapp.com',
  projectId: 'ph-assignment-09',
  storageBucket: 'ph-assignment-09.appspot.com',
  messagingSenderId: '921854440193',
  appId: '1:921854440193:web:c816b45a37c5f3444b2100',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvuder = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvuder, githubAuthProvider };
