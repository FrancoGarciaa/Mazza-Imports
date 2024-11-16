import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyDPE4BGbBuwg2OPrj2tul4UcIArkl-NQQg",
authDomain: "mazzaimports-4632.firebaseapp.com",
projectId: "mazzaimports-4632",
storageBucket: "mazzaimports-4632.firebasestorage.app",
messagingSenderId: "494729701068",
appId: "1:494729701068:web:b67b8c550f83467e568469"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db