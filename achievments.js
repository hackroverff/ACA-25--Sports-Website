var firebaseConfig = {
    apiKey: "AIzaSyBJJ2tDUoSkE0W8ctRTqDYmgCaOE1SEGjM",
    authDomain: "aca-25--sports-website.firebaseapp.com",
    databaseURL: "https://aca-25--sports-website-default-rtdb.firebaseio.com",
    projectId: "aca-25--sports-website",
    storageBucket: "aca-25--sports-website.appspot.com",
    messagingSenderId: "429419202247",
    appId: "1:429419202247:web:4aa5801681cda68acee0e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





function readResults(year){
    var results=firebase.database().ref(year) ;
    results.on('value', (data) => {
        var ranks = data.val();
        document.getElementById("result1").innerHTML ="<br > 1. " +ranks[1];
        document.getElementById("result2").innerHTML ="<br > 1. " +ranks[2];
        document.getElementById("result3").innerHTML ="<br > 1. " +ranks[3];