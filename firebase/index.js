import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy9I3X1x0JSVMluvF215ZO-t2NDK3o-5E",
  authDomain: "communityapp-c8640.firebaseapp.com",
  projectId: "communityapp-c8640",
  storageBucket: "communityapp-c8640.appspot.com",
  messagingSenderId: "214078938681",
  appId: "1:214078938681:web:b99ed64e351cd22c4377e8",
  measurementId: "G-0TGR46QSW7",
};

firebase.initializeApp(firebaseConfig);

const storage = firbase.storage();

export { storage, firebase as default };
