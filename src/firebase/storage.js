import { storage } from './firebase';
// User API

export const uploadFile = (id, file) =>
  storage.ref(`users/${id}/files`).put(file);

export const retrieveFile = (id) => 
  storage.ref(`users/${id}/files`).getDownloadURL().then((url) => {
    return url
  })
