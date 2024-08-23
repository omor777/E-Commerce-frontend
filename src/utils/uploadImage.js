import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase/firebase.config";

const imageUpload = (file) => {
  let url;
  const storage = getStorage(app);
  const storageRef = ref(storage, "images/" + file.name);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          console.log(
            error,
            `User doesn't have permission to access the object`
          );
          break;
        case "storage/canceled":
          // User canceled the upload
          console.log(error, ` User canceled the upload`);
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log(
            error,
            `Unknown error occurred, inspect error.serverResponse`
          );
          break;
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        console.log(downloadUrl,'downloadUrl');
        url = downloadUrl;
      });
    }
  );
    console.log(url);
  return url;
};

export default imageUpload;
