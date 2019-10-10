import { initializeApp } from 'firebase';
import f from './config';

const app = initializeApp({
  apiKey: f.firebase.apiKey,
  authDomain: f.firebase.authDomain,
  databaseURL: f.firebase.databaseURL,
  projectId: f.firebase.projectId,
  storageBucket: f.firebase.storageBucket,
  messagingSenderId: f.firebase.measurementId,
  appId: f.firebase.appId,
  measurementId: f.firebase.measurementId
});

export const db = app.firestore().collection('contacts');