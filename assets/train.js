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


  var trainData = firebase.database();

  $("#button-submit").on("click", function(evnt){
        event.preventDefault();



        var trainName = $("#train-name")
            .val()
            .trim();
        var destination = $("#destination")
            .val()
            .trim();
        var firstTrain = $("#train-time")
            .val()
            .trim();
        var frequency = $("#frequency")
            .val()
            .trim();


        var newTrain = {
            name: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency:frequency,
        };

        trainData.ref().push(newTrain);



  });
  