import { storage } from './firebase';
// User API

export const uploadFile = (id, file) =>
  storage.ref(`users/${id}/files`).put(file);

export const retrieveFile = (id) => 
  storage.ref().child(`users/${id}/files`).getDownloadURL().then((url) => {
    fetch(url)
      .then(res => res.json())
      .then((out) => {
        console.log('Checkout this JSON! ', out);
      })
      .catch(err => { throw err });
  })
