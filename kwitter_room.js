var firebaseConfig = {
      apiKey: "AIzaSyAP425WCT5SIYFP7gIEsDZEQe5SU69Lnrk",
      authDomain: "kwitter-3def3.firebaseapp.com",
      databaseURL: "https://kwitter-3def3-default-rtdb.firebaseio.com",
      projectId: "kwitter-3def3",
      storageBucket: "kwitter-3def3.appspot.com",
      messagingSenderId: "472595159486",
      appId: "1:472595159486:web:33274ccf5d210f73dc41ef"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
