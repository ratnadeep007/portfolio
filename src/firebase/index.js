import firebase from 'firebase';
import 'firebase/firestore';
import * as f from './config';

const app = firebase.initializeApp({
  apiKey: f.apiKey,
  authDomain: f.authDomain,
  databaseURL: f.databaseURL,
  projectId: f.projectId,
  storageBucket: f.storageBucket,
  messagingSenderId: f.measurementId,
  appId: f.appId,
  measurementId: f.measurementId
});

export const db = app.firestore().collection('contacts');