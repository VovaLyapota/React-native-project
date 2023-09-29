import { db } from "../../config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { addImageDB } from "./firestorage";

export const getAllPublicationsDB = async (userName) => {
  try {
    const docRef = collection(db, "users", `${userName}`, "publications");
    const querySnapshot = await getDocs(docRef);

    const data = [];
    querySnapshot.forEach((doc) => data.push(doc.data()));

    if (data) {
      return data;
    } else {
      throw new Error("This files don't exist!");
    }
  } catch (error) {
    return error.code;
  }
};

export const addPublicationDB = async ({
  authorName,
  photoURL,
  photoName,
  location,
  coords,
}) => {
  try {
    const docRef = collection(db, "users", `${authorName}`, "publications");
    const publicationData = {
      postId: null,
      postName: photoName,
      postImage: null,
      postLocation: location,
      postCoords: coords,
      likes: 0,
      comments: [],
    };

    const { id } = await addDoc(docRef, publicationData);
    const imagePath = await addImageDB(photoURL, id);

    await updateDoc(
      doc(db, "users", `${authorName}`, "publications", `${id}`),
      {
        postId: id,
        postImage: imagePath,
      }
    );

    return { ...publicationData, postId: id, postImage: imagePath };
  } catch (error) {
    return error.code;
  }
};

export const addUserDB = async ({ authorName, authorUID, authorPhoto }) => {
  try {
    const docRef = doc(db, "users", `${authorName}`);
    const userData = {
      authorName,
      authorUID,
      authorPhoto,
    };

    await setDoc(docRef, userData);
  } catch (error) {
    return error.code;
  }
};

export const checkNewUserNameDB = async (newUserName) => {
  try {
    const q = query(
      collection(db, "users"),
      where("authorName", "==", `${newUserName}`)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length === 1;
  } catch (error) {
    return error.code;
  }
};
