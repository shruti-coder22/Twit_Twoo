//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCBou1PBcoDj1i5rhOd4Y8ejRhK8UYNgl4",
    authDomain: "kwitter-database-fb4cc.firebaseapp.com",
    databaseURL: "https://kwitter-database-fb4cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-database-fb4cc",
    storageBucket: "kwitter-database-fb4cc.appspot.com",
    messagingSenderId: "97354478185",
    appId: "1:97354478185:web:391eed0d63c4c7028ae8f8"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push( {
        Name : user_name,
        Message : msg,
        Likes : 0
    } );
}