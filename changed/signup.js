var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("mobile");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else if(number.length=10){
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  else{
      alert("invalid mobile");
      return false;
  }
}
// let username = document.getElementById('username')
// let mob = document.getElementById('mob')
// let email = document.getElementById("email");
// let pwd = document.getElementById("pwd");

// function validate() {
//     if (pwd.length<=8) 
//     {
//         alert("password strength is poor")
//         return false;
//     } else if(pwd.value.length<=5){
//         alert("password strong poor");
//     }else if(pwd.value.length<=8){
//         alert("password strong medium");
//     }else if(pwd.value.length<=10){
//         alert("password is strong ")
//     }
//     else {
//         return true;
//     }
// }
