import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWpddQak9ap_JmqALPQQGeZgV7DBBkhmA",
  authDomain: "travel-bee-auth.firebaseapp.com",
  projectId: "travel-bee-auth",
  storageBucket: "travel-bee-auth.appspot.com",
  messagingSenderId: "152851582478",
  appId: "1:152851582478:web:e62a1089e9553dae45f65f",
};

const app = initializeApp(firebaseConfig);

export default app;
