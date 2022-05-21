import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaF3ftFNuHZOQ9hulQqCylPq_hS9SNEtM',
  authDomain: 'ecommerce-73ae8.firebaseapp.com',
  projectId: 'ecommerce-73ae8',
  storageBucket: 'ecommerce-73ae8.appspot.com',
  messagingSenderId: '459062079529',
  appId: '1:459062079529:web:33cb85f55d2e980fceec38',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const goggleAuthProvider = new firebase.auth.GoogleAuthProvider();
