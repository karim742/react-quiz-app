import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDjPP_re6s9Kx7vkzn7DVs9Lop179SSGvg",
  authDomain: "quiz-development-5b5fb.firebaseapp.com",
  databaseURL:
    "https://quiz-development-5b5fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-development-5b5fb",
  storageBucket: "quiz-development-5b5fb.appspot.com",
  messagingSenderId: "213637609326",
  appId: "1:213637609326:web:4feee884eadaec9f42f37f",
});

export default app;
export const auth = getAuth();
