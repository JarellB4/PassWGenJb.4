// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];







// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {


  //length of password
  var length = prompt("length of password?");
  while (length < 8 || length > 128) {
    alert("password must be between 8-128 characters");
    var length = prompt("length of password?");
  }


  //series of prompts
  var lower = confirm("do you want lower case letters?");
  var upper = confirm("do you want upper case letters?");
  var number = confirm("do you want numbers?");
  var special = confirm("do you want special characters letters?");

  while (lower === false && upper === false && number === false && special === false) {
    alert("password must have at least one uppercase, one lowercase, one number, and  one special characters ");
    var lower = confirm("do you want lower case letters?");
    var upper = confirm("do you want upper case letters?");
    var number = confirm("do you want numbers?");
    var special = confirm("do you want special characters letters?");
  }

  // Concat section for arrays
  var char = []

  if (lower) {
    char = char.concat(lowerCasedCharacters)
  }


  if (number) {
    char = char.concat(numericCharacters)
  }

  if (upper) {
    char = char.concat(upperCasedCharacters)
  }

  if (special) {
    char = char.concat(specialCharacters)
  }


  var randomNum = Math.floor(Math.random() * upperCasedCharacters.length);
  console.log(Genp(char, length))
 
  return Genp(char, length)
}

function Genp(RandomG, Userinput) {
  var Storage = ""
  for (let index = 0; index < Userinput; index++) {

    Storage = Storage.concat(RandomG[Math.floor(Math.random() * RandomG.length)-1])
  }
  return Storage
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the passwor

// prompt for length ,cant be < 8 or > 128
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters



// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the s