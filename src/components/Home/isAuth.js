// Import the Firebase authentication module
import { auth } from "../../firebase";

// // Define the isAuthenticated function
// const isAuthenticated = () => {
//   // Get the current user from Firebase authentication
//   const user = auth.currentUser;
  
//   // Check if the user is signed in
//   if (user !== null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Export the isAuthenticated function


import firebase from 'firebase/compat/app';
import 'firebase/auth';

const isAuthenticated = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;