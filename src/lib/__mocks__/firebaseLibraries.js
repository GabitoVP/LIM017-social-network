/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// POST
export const initializeApp = () => ({});
export const getAuth = () => ({});
export class GoogleAuthProvider {}
export const getFirestore = () => ({});
export const dataBase = jest.fn();
export const doc = jest.fn((_dataBase_, nameColecction, id) => Object({
  [nameColecction]: id,
}));
export const collection = jest.fn((_dataBase_, _collection_) => _collection_);
export const Timestamp = { fromDate: (date) => date };
export const addDoc = jest.fn((Collection, data) => Promise.resolve({ [Collection]: data }));
export const query = jest.fn(() => { });
export const orderBy = jest.fn(() => { });
export const onSnapshot = jest.fn(() => Promise.resolve({}));
export const getDoc = jest.fn((Collection, data) => Promise.resolve({ [Collection]: data }));
export const deleteDoc = jest.fn(() => { });
export const updateDoc = jest.fn((Collection, data) => Promise.resolve({ [Collection]: data }));
export const arrayUnion = jest.fn((data) => Promise.resolve({ data }));
export const arrayRemove = jest.fn((data) => Promise.resolve({ data }));
export const getCurrentUser = jest.fn(() => ({ uid: '001' }));
// USER
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve());
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve());
export const updateProfile = jest.fn((currentUser, displayName) => Promise.resolve());
export const sendEmailVerification = jest.fn(() => Promise.resolve());
export const signOut = jest.fn(() => Promise.resolve());
