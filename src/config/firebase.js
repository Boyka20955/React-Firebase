import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Use your firebase ApiKey",
  authDomain: "Use your firebase Auth Domain",
  projectId: "Use your firebase Project ID",
  storageBucket: "Use your firebase Storage Bucket",
  messagingSenderId: "Use your firebase Messaging Sender ID",
  appId: "Use your firebase App ID",
  measurementId: "Use your firebase Measurement ID",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

