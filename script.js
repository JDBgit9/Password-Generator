// Assignment Code
var generateBtn = document.querySelector("#generate"); {

var lowercase = ["A","B","C","D","E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W","X", "Y", "Z"];
var uppercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers =  ["1","2","3","4","5","6","7","8","9","0"];
var specchar = ["~","!","@","#","$","%","^","&","*","(",")","_","-","|",".","<",">",",","?"];


}


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
   //If password is the within the the given 8-128 parameters user may proceed
   if (numberChar >= 8 && numberChar <= 128)  

    //Create for loop to choose password characters
    for (var i = 0; i <= value; i++) {
      password = password + value.generateBtn

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
