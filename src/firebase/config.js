import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjfXyOqB5A6sPFmtg_yXB_t1Y0rPASEfQ",
  authDomain: "hey-andes-desafiotecnico.firebaseapp.com",
  projectId: "hey-andes-desafiotecnico",
  storageBucket: "hey-andes-desafiotecnico.appspot.com",
  messagingSenderId: "815525173107",
  appId: "1:815525173107:web:f99f8339337bb848255706"
};

const app =  initializeApp(firebaseConfig);

export const db = getFirestore(app)