import { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { async } from "@firebase/util";

export const uploadImage = async (file) => {
    const storageRef = ref(storage, 'photo/' +file.name);
   return await uploadBytes(storageRef, file);
}
export const getImageURL = async (fileRef) => {
    return await getDownloadURL(fileRef);
}