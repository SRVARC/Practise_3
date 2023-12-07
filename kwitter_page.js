var firebaseConfig = {
    apiKey: "AIzaSyBB6kbO3u8GAaTFrnYB1jbNelZopnVrm6w",
    authDomain: "let-chat-web-app-1f9de.firebaseapp.com",
    databaseURL : "https://let-chat-web-app-1f9de-default-rtdb.firebaseio.com/",
    projectId: "let-chat-web-app-1f9de",
    storageBucket: "let-chat-web-app-1f9de.appspot.com",
    messagingSenderId: "345695746017",
    appId: "1:345695746017:web:90bc5d8fb0af01a0a5c4a0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 


user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");




function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

