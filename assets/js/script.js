// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Pushing all arrays with data to one array
var allCharArr = [];
allCharArr.push(
  lowerCasedCharacters,
  upperCasedCharacters,
  numericCharacters,
  specialCharacters
);

// Inital variables

var userInputArr = [];
var userInputArrIndex = [];
var passLength = 0;
var randomNumber = 0;
var finalArr = [];
var pwOutput;

// Function to generate password
function generatePassword() {
  // Calling function to get user input of a password length
  pwLength();
  // Store user input values of lowercase, uppercase, number and spec. char. in the array userInputArr (true/false)
  var lowerCase = confirm("Would you like to include lowercase letters?");
  userInputArr.push(lowerCase);
  var upperCase = confirm("Would you like to include uppercase letters?");
  userInputArr.push(upperCase);
  var numValues = confirm("Would you like to include numbers?");
  userInputArr.push(numValues);
  var specialChar = confirm(
    "Would you like to include special characters ($@%&*, etc)?"
  );
  userInputArr.push(specialChar);
  // Check is at least one option is selected by user (if not, message will be displayed)
  if (userInputArr.every((value) => value === false)) {
    alert(
      "You have to choose at least one option to generate a password. Please, try again"
    );
    return (pwOutput = []);
  } else {
    // If condition met
    // New array created with index numbers of a userInputArr array (dependin if it is true or false) If value is true, will return and idex if false will return undefined
    var userInputValuesInNumber = userInputArr.map((value, index) => {
      if (value === true) {
        return index;
      }
    });
    // Filter method removes undifiend values from userInputValuesInNumber array
    var userInputArrIndex = userInputValuesInNumber.filter(function (element) {
      return element !== undefined;
    });
    // For loop will run as many times as password length number was specified by user
    for (var j = 0; j < passLength; j++) {
      // New array with lowercase, uppercase, number or spec. char. arrays (depending on user selection)
      var randomArray =
        allCharArr[userInputArrIndex[getRandom(userInputArrIndex)]];
      // Array of random values from lowercase, uppercase, number or spec.char array (depending on user selection)
      finalArr.push(randomArray[getRandom(randomArray)]);
    }
    // Returns joined array with all random values
    return (pwOutput = finalArr.join(""));
  }
}

// Function to get password length and check if number is between 8 and 128
function pwLength() {
  passLength = Number(
    prompt(
      "How long would you like you password to be? It has to be no less then 8 and no more then 128"
    )
  );
  // If number between 8 and 128
  if (passLength > 7 && passLength < 129) {
    // If not returns message and start function again to input password length
  } else {
    alert("Wrong number");
    pwLength();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to reset values when password was generated
function resetValue() {
  // Inital variables
  userInputArr = [];
  userInputArrIndex = [];
  passLength = 0;
  randomNumber = 0;
  finalArr = [];
  pwOutput;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  resetValue();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
