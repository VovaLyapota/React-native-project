import { storage } from "../../config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const addImageDB = async (rootPath, storagePath) => {
  const response = await fetch(rootPath);
  const blob = await response.blob();

  const storageRef = ref(storage, `images/${storagePath}`);
  const uploadImage = await uploadBytesResumable(storageRef, blob);
  const downloadURL = await getDownloadURL(uploadImage.ref);

  return downloadURL;
};
