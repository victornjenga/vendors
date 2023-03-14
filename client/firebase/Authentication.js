import { initializeApp } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBRYuXg_iF4z2Wqg43ILyA_BZQ-APDXUT8',
  authDomain: 'testing-72b0b.firebaseapp.com',
  projectId: 'testing-72b0b',
  storageBucket: 'testing-72b0b.appspot.com',
  messagingSenderId: '1070897141321',
  appId: '1:1070897141321:web:d08497be5db466cee3d198',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// export const checkUser =async(setLoggedinUser) => {
//  await onAuthStateChanged(auth, (user) => {
//     user && setLoggedinUser(user);
//   });
// };

// export const logoutUser =(setLoggedinUser) => {
//   signOut(auth).then(setLoggedinUser({ isAuthenticated: false }));
//   location.reload();
// };
