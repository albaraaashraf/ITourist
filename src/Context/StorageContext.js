import React, { createContext, useContext } from "react";

import { storage } from "../firebase-config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const StorageContext = createContext();

export function StorageProvider({ children }) {
  //
  //
  //
  //
  function uploadFile(filePath, file) {
    const storageRef = ref(storage, filePath);

    return uploadBytesResumable(storageRef, file);
  }

  function downloadImg(filePath) {
    const storageRef = ref(storage, filePath);
    return getDownloadURL(storageRef);
  }

  const value = { uploadFile, downloadImg };
  return (
    <>
      <StorageContext.Provider value={value}>
        {children}
      </StorageContext.Provider>
    </>
  );
}

export function useStorage() {
  return useContext(StorageContext);
}
