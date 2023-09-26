import { db } from "../../config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export const getAllPublicationsDB = async (authorUID) => {
  try {
    console.log("authorUID: ", authorUID);
    const docRef = collection(db, "users", `${authorUID}`, "publications");
    const querySnapshot = await getDocs(docRef);

    const data = [];
    querySnapshot.forEach((doc) => data.push(doc.data()));

    if (data) {
      return data;
    } else {
      throw new Error("This files don't exist!");
    }
  } catch (error) {
    console.log(error.code);
  }
};

export const addPublicationDB = async ({
  authorUID,
  photoURL,
  photoName,
  location,
  coords,
}) => {
  try {
    const docRef = doc(
      db,
      "users",
      `${authorUID}`,
      "publications",
      `${photoName}`
    );
    const publicationData = {
      postName: photoName,
      postImage: photoURL,
      postLocation: location,
      postCoords: coords,
      likes: 0,
      comments: [],
    };

    await setDoc(docRef, publicationData);

    return publicationData;
  } catch (error) {
    console.log(error.code);
  }
};
