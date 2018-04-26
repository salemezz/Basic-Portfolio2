// Initialize Firebase
var config = {
  apiKey: "AIzaSyCMZs3H8HOhXi8NBieBTgfkbq2v5wVu4Ts",
  authDomain: "portfolio-contact-ff583.firebaseapp.com",
  databaseURL: "https://portfolio-contact-ff583.firebaseio.com",
  projectId: "portfolio-contact-ff583",
  storageBucket: "",
  messagingSenderId: "570067424032"
};
firebase.initializeApp(config);

var database = firebase.database();
//Button for adding Employees
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#sendForm").on("click", function (event) {
  event.preventDefault();
  // Grabs user input
  var firstName = $("#first-name").val().trim();
  console.log(firstName);
  var lastName = $("#last-name").val().trim();
  console.log(lastName);
  var email = $("#email").val().trim();
  console.log(email);
  var inquiry = $("#inquiry").val().trim();
  console.log(inquiry);


  database.ref().push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    inquiry: inquiry
    // dateAdded: firebase.database.ServerValue.TIMESTAP
  });
    modal.style.display = "none";   
});
