var firebaseConfig = {
    apiKey: "AIzaSyCUAOsFYIHtxoQfgOls8cx-vXps-4kdh6U",
    authDomain: "train-time-database.firebaseapp.com",
    databaseURL: "https://train-time-database.firebaseio.com",
    projectId: "train-time-database",
    storageBucket: "train-time-database.appspot.com",
    messagingSenderId: "329729684767",
    appId: "1:329729684767:web:214806464be10a5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  var trainData = firebase.database();
  

  $("#button-submit").on("click", function(event){
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

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.firstTrain);
        console.log(newTrain.frequency);


        alert("trian added bitch");

        $('#train-name').val("");
        $('#destination').val("");
        $('#firstTrain').val("");
        $('#frequency').val("");

  });

