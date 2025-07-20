import { config } from "dotenv";
config();
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };











const users = [{id: 1, name: "Gustavo", email: "gustyybaez@gmail.com"}];
const products = [{id: 1, name:"Yerba", precio:2500}];
export default { users, products };
