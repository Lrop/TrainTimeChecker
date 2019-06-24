 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCUAOsFYIHtxoQfgOls8cx-vXps-4kdh6U",
    authDomain: "train-time-database.firebaseapp.com",
    databaseURL: "https://train-time-database.firebaseio.com",
    projectId: "train-time-database",
    storageBucket: "",
    messagingSenderId: "329729684767",
    appId: "1:329729684767:web:214806464be10a5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // trainData = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    // Prevent the default form submit behavior
    event.preventDefault();
  });
  