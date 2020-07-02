import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDTQ-cgs06Wc6VecIjoqObxQUsHSLbMi1A',
    authDomain: 'm2dev-72716.firebaseapp.com',
    databaseURL: 'https://m2dev-72716.firebaseio.com',
    projectId: 'm2dev-72716',
    storageBucket: 'm2dev-72716.appspot.com',
    messagingSenderId: '210828518531',
    appId: '1:210828518531:web:7863a3f3ebcecdee79e7b6',
    measurementId: 'G-KS7H412J2S'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({
    timestampsInSnapshots: true
  })
}
const db = firebase.firestore()

export default db
