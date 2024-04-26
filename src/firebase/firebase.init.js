import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyATJv7_WyP4-N4cFA6ehiSwcZmRHc_QgtE",
  authDomain: "p-art-6493f.firebaseapp.com",
  projectId: "p-art-6493f",
  storageBucket: "p-art-6493f.appspot.com",
  messagingSenderId: "152233208500",
  appId: "1:152233208500:web:c139e26b4f589e693405e1",
};
const app = initializeApp(firebaseConfig);
export default app;
