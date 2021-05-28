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
auth.useDeviceLanguage();


// ChangeButtonText
function changeText() {
    var btn = document.getElementById("logLink");
    if (btn.value === 'Login') {
        btn.value = "Logout";
        btn.innerHTML = "Logout";
    } else {
        btn.value = "Login";
        btn.innerHTML = "Login";
    }
}



function authenticateUserAgain() {
    var user = firebase.auth().currentUser;
    var password = document.getElementById("password");
    var credential = firebase.auth.EmailAuthProvider.credential(user.email, password.value);

    // Prompt the user to re-provide their sign-in credentials

    user.reauthenticateWithCredential(credential).then(function() {
        // User re-authenticated.
        console.log("User reauthenticated!")
    }).catch(function(error) {
        // An error happened.
        console.log("Reauthentication failed!")
    });
}

// Check if state of User changed!
function userStateChanged() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User signed in!
            if (user != null) {
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
            }
        } else {
            // No user is signed in!
        }
    });
}

// Change User Information
function editUserInformation() {
    var user = firebase.auth().currentUser;

}


// Delete User
function deleteUser() {
    var user = firebase.auth().currentUser;
    var popUp;
    if (confirm("Do you want to delete your account?")) {
        user.delete().then(function() {
            // User deleted.
            console.log('User Deleted');
            userStateChanged();
        }).catch(function(error) {
            // An error happened.
        });
        alert("You will be redirected to the Login-Page")
        window.location.assign("login.html");
    } else {
        alert("Cancelled");

    }
}


// Login/Logout
function confirmLogInOut() {
    // Cancelable Popup
    if (confirm("Press okay to continue!")) {
        popUp = "You will be redirected to the Login-Page"
        window.location.assign("login.html");
        userStateChanged();
    } else {
        alert("Cancelled");

    }
}

// Register Part

function registerUser() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
            console.log("Signed up succesfully!");
            alert("User created with email: " + email.value);
            alert("Verification mail sent. Please check your E-Mails")
            sendVerificationEmail();

            userStateChanged();
        })
        .catch(error => {
            console.log(error);
        })
}

function sendVerificationEmail() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log("Email sent");
        // Email sent.
        changeLoginText();
        window.location.assign("home.html");
        userStateChanged();
    }).catch(function(error) {
        // An error happened.
    });
}



// Login Part

function loginUser() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    auth.signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            alert("User signed in with email: " + email.value);
            window.location.assign("home.html");
            // Sets btn to Logout
            userStateChanged();
        })
        .catch(error => {
            console.log(error);
            alert(error);
        })
}

function googleSignIn() {
    var googleProvider = new firebase.auth.GoogleAuthProvider();


    auth.signInWithPopup(googleProvider)
        .then(() => {
            window.location.assign("home.html");
            userStateChanged();
            // Sets btn to Logout
        })
        .catch(error => {
            console.error(error);
        })
}

function signInAsGuest() {
    firebase.auth().signInAnonymously()
        .then(() => {
            // Signed in..
            console.log("Guest signed in!")
            window.location.assign("home.html");
        })
        .catch((error) => {
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
            alert("Failed, please try again!");
        });
}


// Logout Part

function logOutUser() {
    // Logs out of firebase!
    var email = document.getElementById("email");

    auth.signOut()
        .then(() => {
            // Changes to Login Screen
            alert("User: " + email.value + " signed out!")
            window.location.assign("login.html");
            userStateChanged();
        })
        .catch(error => {
            console.error(error);
        })
}

// Settings Part

function addGoogleLoginMethod() {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var user = firebase.auth().currentUser;

    user.linkWithPopup(googleProvider)
        .then(() => {
            console.log("Linked with google!");
        })
        .catch(error => {
            console.log(error);
            alert("You can only link one account!")
        })
}

function addEmailLoginMethod() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var cred = firebase.auth.EmailAuthProvider.credential(email.value, password.value);
    authenticateUserAgain();

    auth.currentUser.linkWithCredential(cred)
        .then((usercred) => {
            var user = usercred.user;
            console.log("Account linking success", user);
        })
        .catch((error) => {
            console.log("Account linking error", error);
        });
}


function updateUserEmail() {
    var email = document.getElementById("email");
    var email_conf = document.getElementById("confirm_email");
    var user = firebase.auth().currentUser;
    var password = document.getElementById("password");


    userStateChanged();
    console.log(user);

    user.updateEmail(email_conf.value).then(function() {
        // Update successful.
        alert("Email for: " + email.value + " changed!");
        authenticateUserAgain();
    }).catch(function(error) {
        // An error happened.
        alert("Please provide a valid Email-Adress");
    });
}