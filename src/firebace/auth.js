import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../config";

export const registerDB = async ({ email, password }) => {
  try {
    const createResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return createResult;
  } catch (error) {
    return error.code;
  }
};

export const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    return error.code;
  }
};

export const logoutDB = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    return error.code;
  }
};

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;
  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

export const getCurrentUser = () => auth.currentUser;
