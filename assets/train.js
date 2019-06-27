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


        
        var trainName = $("#train-name-input")
            .val()
            .trim();
        var destination = $("#train-destination-input")
            .val()
            .trim();
        var firstTrain = $("#train-time-input")
            .val()
            .trim();
        var frequency = $("#train-frequency-input")
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


        alert("Train Added to Schedule");

        $('#train-name-input').val("");
        $('#train-destination-input').val("");
        $('#train-time-input').val("");
        $('#train-frequency-input').val("");

  });

trainData.ref().on("child_added", function (childSnapshot, prevChildKey){
    console.log(childSnapshot.val());


    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFrequency = childSnapshot.val().frequency;
    var tFirstTrain = childSnapshot.val().firstTrain;

    var timeArrive = tFirstTrain.split(':');
    var trainTime = moment()
        .hours(timeArrive[0])
        .minutes(timeArrive[1]);
    var maxMoment = moment.max(moment(), trainTime);
    var tMinutes;
    var tArrival;

    if(maxMoment === trainTime) {
        tArrival = trainTime.format("hh:mm A");
        tMinutes = trainTime.diff(moment(), "minutes");

    } else {
        var differenceTimes = moment().diff(trainTime, "minutes");
        var tRemainder = differenceTimes % tFrequency;
        tMinutes = tFrequency - tRemainder;

        tArrival = moment()
            .add(tMinutes, "m")
            .format("hh:mm A");
    }
    console.log("tMinutes", tMinutes);
    console.log("tArrival", tArrival);

    $("#train-schedule > tbody").append(
        $("<tr>").append(
            $("<td>").text(tName),
            $("<td>").text(tDestination),
            $("<td>").text(tFrequency),
            $("<td>").text(tArrival),
            $("<td>").text(tMinutes),
        )
    );

});