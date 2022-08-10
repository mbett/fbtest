
let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];


 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHUkpWdXOICM6_oka9SsNWScuqAUm95hE",
    authDomain: "best-learning-tool-bd3a0.firebaseapp.com",
    projectId: "best-learning-tool-bd3a0",
    storageBucket: "best-learning-tool-bd3a0.appspot.com",
    messagingSenderId: "784855659403",
    appId: "1:784855659403:web:7ac0ff09b72481489eb58e",
    measurementId: "G-30KRCJDD9J"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebase);

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
let dbLocation = firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);


// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve
let fc = firebase.database().ref('deck/flashcards');

// A variable to store the JSON results in a human readable format
let jsonString;

// Tell Firebase to retrieve your data
fc.on("value", function(retrieve) {
  
    //Get the raw JSON data back from the database
    let queryData = retrieve.val();
    
    // Turn the data into a JSON String
    jsonString = JSON.stringify(queryData);
});

// Print the data out as a JSON string or otherwise manipulate it
console.log (' JSON string:' + jsonString )
