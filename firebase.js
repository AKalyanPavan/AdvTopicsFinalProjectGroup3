import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "",
  authDomain: "final-project-b2b01.firebaseapp.com",
  projectId: "final-project-b2b01",
  storageBucket: "final-project-b2b01.appspot.com",
  messagingSenderId: "869111847481",
  appId: "1:869111847481:web:05590e683a89df6ec20be8"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };