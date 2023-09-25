import { db } from "../../config";
import { doc, setDoc } from "firebase/firestore";

export const addPublication = async ({
  photoURL,
  photoName,
  location,
  coords,
}) => {
  await setDoc(doc(db, "publications", `${photoName}`), {
    postName: photoName,
    postImage: photoURL,
    postLocation: location,
    postCoords: coords,
  });
};
