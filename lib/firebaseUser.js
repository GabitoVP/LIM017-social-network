/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
} from './firebaseLibraries.js';
import { app } from './firebaseConfig.js';

const auth = getAuth(app);

// FUNCION DE REGISTRO CON EMAIL-----------------------------------------------
export const registerFirebase = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// REGISTRO CON GOOGLE
const provider = new GoogleAuthProvider();

export const registerAndLoginGoogle = () => {
  const registerAndLoginGoogleBeFit = signInWithPopup(auth, provider);
  return registerAndLoginGoogleBeFit;
};

// FUNCION DE LOGIN CON EMAIL-----------------------------------------------

export const loginFirebase = (email, password) => {
  const loginBefit = signInWithEmailAndPassword(auth, email, password);
  return loginBefit;
};

// OBTENER EL USUARIO ACTUAL con sus propiedades
// export const getCurrentUser = () => {
//   const user = auth.currentUser;
//   return user;
// };

// ACTUALIZA EL PERFIL DEL USUARIO
export const updaterUserProfile = (name) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
  });
};

// VERIFICAR REGISTRO ENVIANDO UN CORREO AL EMAIL
export const emailVerification = () => {
  return sendEmailVerification(auth.currentUser).then(() => {});
};

// SIGN OUT - CERRAR SESIÓN
export const singOutFirebase = () => {
  return signOut(auth).then(() => {});
};
