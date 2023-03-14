import dotenv from 'dotenv'
dotenv.config()

// const port = process.env.PORT;
// const db_local = process.env.DB_LOCAL;

const config = {
  port: process.env.PORT,
  db_local: process.env.DB_LOCAL,
  apiKey: 'AIzaSyBRYuXg_iF4z2Wqg43ILyA_BZQ-APDXUT8',
  authDomain: 'testing-72b0b.firebaseapp.com',
  projectId: 'testing-72b0b',
  storageBucket: 'testing-72b0b.appspot.com',
  messagingSenderId: '1070897141321',
  appId: '1:1070897141321:web:d08497be5db466cee3d198',
}
export default config
