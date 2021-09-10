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


  document.getElementById('datavalue').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var year=document.getElementById('year').value;
    readResults(year);
  }

function readResults(year){
    var results=firebase.database().ref(year) ;
    results.on('value', (data) => {
        var ranks = data.val();
        document.getElementById("result1").innerHTML ="<br > 1. " +ranks[1];
        document.getElementById("result2").innerHTML ="<br > 2. " +ranks[2];
        document.getElementById("result3").innerHTML ="<br > 3. " +ranks[3];
        document.getElementById("result4").innerHTML ="<br > 4. " +ranks[4];
        document.getElementById("result5").innerHTML ="<br > 5. " +ranks[5];
        document.getElementById("result6").innerHTML ="<br > 6. " +ranks[6];
        document.getElementById("result7").innerHTML ="<br > 7. " +ranks[7];
        document.getElementById("result8").innerHTML ="<br > 8. " +ranks[8];
          })
  }