import { initializeApp } from "firebase/app";
import { config } from "../../config";

const firebaseConfig = {
  apiKey: config.firebase.API_KEY,
  authDomain: "tictactoe-a61f1.firebaseapp.com",
  projectId: "tictactoe-a61f1",
  storageBucket: "tictactoe-a61f1.appspot.com",
  messagingSenderId: "389035745",
  appId: config.firebase.APP_ID,
  measurementId: "G-NFP4VVVBZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
