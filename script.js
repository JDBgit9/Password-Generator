// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    //how long should password be
    var numberChar = prompt("How many characters do you want your password to be? Must be at least 8 characters");
    //password too small
    if (numberChar < 8) {
      alert("Password length must be at least 8 characters");
      return
    }
    //Set password length
    let length = "no less than 8 and no more than 129";
    //possible password values


    let password = "";

    //Create for loop to choose password characters
    for (var i = 0; i <= value; i++) {
      password = password + value.generateBtn

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);






  }

