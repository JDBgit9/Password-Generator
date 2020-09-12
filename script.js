// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays to be used for password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Confirmation of all characters in Generator
var confirmSpecialChar;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;

//Make function
function generatePassword() {
  

  // array to be stored here
  var combinedArray = [];
  var passwordArray = [];
  // User prompts to include in Password
  var numberChars = prompt("How many characters would you like in you password?");
  //Prompt for characters that are not numbers
  if (isNaN(numberChars)) {
    alert("You must enter a number");
    return "Try Again!"
  }

  if (numberChars < 8) {
    alert("Your password must be at least 8 characters")
    return "Try again"
  }

  if (numberChars > 128) {
    alert("Password length must be less than 129 characters");
    return "Try Again!"
  }

  else {

    specialChar = confirm("Click OK if you want special characters in your password");

    if (specialChar) {

      for (var i = 0; i < specialChar.length; i++) {

        combinedArray.push(specialChar[i]);
      }
    }

    confirmNumbers = confirm("Click OK if you want numbers in your password");

    if (confirmNumbers) {

      for (var i = 0; i < numb.length; i++) {

        combinedArray.push(numb[i]);
      }
    }
    confirmLowercase = confirm("Click OK if you want lowercase letters in your password");

    if (confirmLowercase) {

      for (var i = 0; i < lowercase.length; i++) {

        combinedArray.push(lowercase[i]);
      }
    }

    confirmUppercase = confirm("CLick OK if you want uppercase letters in your password");

    if (confirmUppercase) {

      for (var i = 0; i < uppercase.length; i++) {

        combinedArray.push(uppercase[i]);
      }
    }

    for (var i = 0; i < numberChars; i++) {

      passwordArray.push(combinedArray[(Math.floor(Math.random() * combinedArray.length))]);
    }

    userPassword = passwordArray.join("");
    return userPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

