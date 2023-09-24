// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpKPG8RKl_-eVeiCHAba9JwbIl_T1CV8E",
  authDomain: "react-native-project-732f3.firebaseapp.com",
  projectId: "react-native-project-732f3",
  storageBucket: "react-native-project-732f3.appspot.com",
  messagingSenderId: "547951425041",
  appId: "1:547951425041:web:a9c0c6c3539637902b23b0",
  measurementId: "G-5E79PKB8T5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
