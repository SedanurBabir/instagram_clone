import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAbtYxS83qmtXUglqLZ3wekesMXbZnnNo0",
    authDomain: "instagramclone-7c6bc.firebaseapp.com",
    projectId: "instagramclone-7c6bc",
    storageBucket: "instagramclone-7c6bc.firebasestorage.app",
    messagingSenderId: "20662822983",
    appId: "1:20662822983:web:b49a557b4c10918ea26962",
    measurementId: "G-R75X1DHY5V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); //firebase'de ücretli plana dahil olması sebebiyle kullanılmıyor

export { app, auth, firestore, storage };
