// // Import necessary Firebase modules
// import { initializeApp } from "firebase/app";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: "blog-24dc3.firebaseapp.com",
//   projectId: "blog-24dc3",
//   storageBucket: "blog-24dc3.appspot.com",
//   messagingSenderId: "710817575557",
//   appId: "1:710817575557:web:fa1f2e478ce54a31ed2fec",
//   measurementId: "G-SGPGBHWCCB",
// };

// // Initialize Firebase and Storage
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// // Export app, storage, and Firebase storage utility functions
// export { app, storage, ref, uploadBytesResumable, getDownloadURL };


// Import necessary Firebase modules
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "blog-24dc3.firebaseapp.com",
  projectId: "blog-24dc3",
  storageBucket: "blog-24dc3.appspot.com",
  messagingSenderId: "710817575557",
  appId: "1:710817575557:web:fa1f2e478ce54a31ed2fec",
  measurementId: "G-SGPGBHWCCB",
};

// Safe Firebase Initialization:
// Check if Firebase apps are already initialized to avoid re-initialization
let app;
if (typeof window !== "undefined") {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
}

// Initialize storage only if running in the browser
const storage = app ? getStorage(app) : null;

// Export Firebase utilities, checking for browser environment where necessary
export { app, storage, ref, uploadBytesResumable, getDownloadURL };