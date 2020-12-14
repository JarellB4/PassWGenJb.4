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


function generatePassword(){
  var char = [];
//series of prompts
//length of password
var length = prompt("length of password?");
//user options
var lower = confirm("do you want lower case letters?");
var upper = confirm("do you want upper case letters?");
var number = confirm("do you want numbers?");
var special = confirm("do you want special characters letters?");
console.log(length, lower, upper, number, special);

if(lower){
  //concat
  char = char.concat(lowerCasedCharacters)
}

if(number){
  char = char.concat(numericCharacters)
}

var randomNum = Math.floor(Math.random() * upperCasedCharacters.length);
console.log(randomNum)
var letter = upperCasedCharacters[randomNum]
var letter = lowerCasedCharacters[randomNum]
var numbers = numbers[randomNum]
var special = specialCharacters[randomNum]



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
// THEN the password is either displayed in an alert or written to the page
