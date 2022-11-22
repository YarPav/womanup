// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZluq1lugyPxf6Bo8Cs99mNMt5_z-Qpdo",
    authDomain: "womanup-60c2e.firebaseapp.com",
    projectId: "womanup-60c2e",
    storageBucket: "womanup-60c2e.appspot.com",
    messagingSenderId: "486271362650",
    appId: "1:486271362650:web:7cc655d3aa798055dc1a63",
    measurementId: "G-Z0L7NG2E83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const getTasks = async () => {
    const tasksCol = collection(db, 'tasks');
    const taskSnapshot = await getDocs(tasksCol);
    const taskList = taskSnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
    return taskList;
}

const addTask = async (task) => {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            ...task,
            isFinished: false
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const updateTaskStatus = async (id, newStatus) => {
    try {
        console.log(id)
        const docRef = doc(db, "tasks", id);
        await updateDoc(docRef, {
            isFinished: newStatus
        });
    } catch (e) {
        console.error("Error updating status: ", e);
    }
}

export {getTasks, addTask, updateTaskStatus};
