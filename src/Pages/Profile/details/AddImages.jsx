import React, { useState } from "react";

import "./Gallery.css";
import { useDropzone } from "react-dropzone";

import { db, storage } from "../../../firebase-config";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { useUser } from "../../../Context/UserContext";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

export default function AddImages() {
  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/*": [],
    },
    noClick: true,
  });

  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [text, setText] = useState("");
  const [upload, setUpload] = useState(false);
  const { theUser } = useUser();

  // uploading imagesto firebase Storage

  function uploadSingleImage(filePath, file) {
    const storageRef = ref(storage, filePath);
    return uploadBytesResumable(storageRef, file);
  }

  function downloadImage(filePath) {
    const storageRef = ref(storage, filePath);
    return getDownloadURL(storageRef);
  }

  let preview = acceptedFiles.map((file) => {
    return <li> {file.name} </li>;
  });

  function uploadImagesToStorage() {
    let person = theUser;
    setUpload(true);
    setShowLoadingScreen(true);

    acceptedFiles.forEach(async (file) => {
      const imagePath = `Images/${person.id}/images/${file.name}`;

      try {
        setText("uploading");
        await uploadSingleImage(imagePath, file);

        await downloadImage(imagePath).then((downloadURL) => {
          person.Imgs.push(downloadURL);
          // console.log("downloaded");
        });

        const docRef = doc(db, "users", person.id);

        await setDoc(docRef, person, { merge: true });
      } catch {
        console.log("ERROR");
      }
      setUpload(false);
      setText("Finalizing");
      setShowLoadingScreen(false);
    });
  }

  return (
    <>
      <LoadingScreen show={showLoadingScreen} title={text} textColor={"#EEE"} />
      <section id="sec" className="container-md">
        <div {...getRootProps({ className: "dropZone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <p>OR</p>
          <button onClick={open} className="btn btn-primary">
            Click to Add Images
          </button>
        </div>

        <div className="separator"></div>

        <div className="preview">{preview}</div>
      </section>

      <div className="container text-center my-2">
        <button
          className="btn btn-success"
          onClick={uploadImagesToStorage}
          disabled={upload}
        >
          {" "}
          Upload
        </button>
      </div>
    </>
  );
}
