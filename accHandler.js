// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2N0fw3ht9O-Ji-jYfE2Zx3ldf7J4Rxfo",
    authDomain: "xvc-dev-4c108.firebaseapp.com",
    databaseURL: "https://xvc-dev-4c108-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "xvc-dev-4c108",
    storageBucket: "xvc-dev-4c108.appspot.com",
    messagingSenderId: "40660892084",
    appId: "1:40660892084:web:64e182316a93ed67531ae1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function isSignedIn() {
    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.
        window.location = "home.html";
    } else {
        // No user is signed in.
    }
}

function SignUpAccount() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log("email sent");
        // Email sent.
    }).catch(function(error) {
        // An error happened.
    });

    alert("Signed Up");
}



function SignInAccount() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    isSignedIn();
}

function signOut() {

    auth.signOut();
    alert("Signed Out");

}

function resetPassword() {
    var auth = firebase.auth();
    var emailAddress = email.value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        alert("Verification link has been send to " + emailAddress);
    }).catch(function(error) {
        // An error happened.
    });
}