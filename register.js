 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAIKFvWDiDroXdek_qXVnU_A0wRWHuWU4Y",
   authDomain: "login-page-1566e.firebaseapp.com",
   projectId: "login-page-1566e",
   storageBucket: "login-page-1566e.appspot.com",
   messagingSenderId: "146742866203",
   appId: "1:146742866203:web:a1f9eb9a43507b38a5e3be"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);



 //submit
 const submit = document.getElementById('submit');
 submit.addEventListener("click", function (event) {
    event.preventDefault()




     //inputs

 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Account creating....")
        window.location.href = "404.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
    
 } 
)