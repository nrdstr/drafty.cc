import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDogAtK4hVuw-_uiI4D5K0NWZc9j8gZUzU",
  authDomain: "speek2-5f7d5.firebaseapp.com",
  databaseURL: "https://speek2-5f7d5.firebaseio.com",
  projectId: "speek2-5f7d5",
  storageBucket: "speek2-5f7d5.appspot.com",
  messagingSenderId: "797679846776",
  appId: "1:797679846776:web:c92fd8300ccfa63746b48d"
}

firebase.initializeApp(config)
export const google = new firebase.auth.GoogleAuthProvider()
export const twitter = new firebase.auth.TwitterAuthProvider()
export const facebook = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export default firebase
