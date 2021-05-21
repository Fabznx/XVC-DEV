// Listen for submission
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA2N0fw3ht9O-Ji-jYfE2Zx3ldf7J4Rxfo",
    authDomain: "xvc-dev-4c108.firebaseapp.com",
    databaseURL: "https://xvc-dev-4c108-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "xvc-dev-4c108",
    storageBucket: "xvc-dev-4c108.appspot.com",
    messagingSenderId: "40660892084",
    appId: "1:40660892084:web:64e182316a93ed67531ae1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference

document.getElementById("logForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get the values from the form
    var email = getInputVal("email-sub");
    var password = getInputVal("password-sub");

}

//Fuction to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}