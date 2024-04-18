// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyArDaSDbqNbUX9obGZ-NCjC59bZ4-wTNw4",
  authDomain: "image-capture-app-d5f48.firebaseapp.com",
  projectId: "image-capture-app-d5f48",
  storageBucket: "image-capture-app-d5f48.appspot.com",
  messagingSenderId: "786695771291",
  appId: "1:786695771291:web:fd1531a3f20a139606e23e",
  measurementId: "G-N2B8VHYJWL"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storeImageAndLocation = async (imageData, locationData) => {
    // Store image in Firebase Storage
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('images/' + Date.now() + '.jpg');
    const snapshot = await imageRef.putString(imageData, 'data_url');
    const imageUrl = await snapshot.ref.getDownloadURL();

    // Store image URL and location in Firebase Realtime Database
    const dbRef = firebase.database().ref('images');
    const newImageRef = dbRef.push();
    await newImageRef.set({
        url: imageUrl,
        location: locationData
    });

    console.log('Image and location data saved!');
};

export default storeImageAndLocation;
