/* eslint-disable import/no-unresolved */
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
export {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
export {
  getFirestore, collection, addDoc, Timestamp, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
  orderBy, query, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

export { getAuth };

export const getCurrentUser = () => getAuth().currentUser;
