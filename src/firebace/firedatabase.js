import { db } from "../../config";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { addImageDB } from "./firestorage";
import moment from "moment/moment";

export const getAllPublicationsDB = async (userName) => {
  try {
    const docRef = collection(db, "users", `${userName}`, "publications");
    const querySnapshot = await getDocs(docRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

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
      authorName,
      postName: photoName,
      postLocation: location,
      postCoords: coords,
      likes: 0,
    };

    const { id } = await addDoc(docRef, publicationData);
    const imagePath = await addImageDB(photoURL, id);

    await updateDoc(
      doc(db, "users", `${authorName}`, "publications", `${id}`),
      {
        postId: id,
        postImage: imagePath,
        comments: [],
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

export const getPublicationCommentsDB = async (authorName, publicationId) => {
  try {
    const docRef = doc(
      db,
      "users",
      `${authorName}`,
      "publications",
      `${publicationId}`
    );
    const querySnapshot = await getDoc(docRef);

    return querySnapshot.data().comments;
  } catch (error) {
    return error.code;
  }
};

export const addPublicationCommentDB = async (
  publicationId,
  authorName,
  comentatorName,
  comentatorPhoto,
  message
) => {
  try {
    const time = moment().format("LLL", "uk");
    const comment = { comentatorName, comentatorPhoto, message, time };

    const docRef = doc(
      db,
      "users",
      `${authorName}`,
      "publications",
      `${publicationId}`
    );
    await updateDoc(docRef, {
      comments: arrayUnion(comment),
    });

    return comment;
  } catch (error) {
    console.log(error);
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
