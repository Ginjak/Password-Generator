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

// Function to prompt user for password options
function getPasswordOptions() {
  var pwLength = function () {
    passLength = Number(
      prompt(
        "How long would you like you password to be? It has to be no less then 8 and no more then 128"
      )
    );
    if (passLength > 7 && passLength < 129) {
      alert("Thank you");
    } else {
      alert("Wrong number");
      pwLength();
    }
  };
  pwLength();
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

  /* ================= */

  var userInputValuesInNumber = userInputArr.map((value, index) => {
    if (value === true) {
      return index;
    }
  });

  for (var i = 0; i < userInputValuesInNumber.length; i++) {
    if (userInputValuesInNumber[i] !== undefined) {
      userInputArrIndex.push(userInputValuesInNumber[i]);
    }
  }
  for (var j = 0; j < passLength; j++) {
    var randomArray =
      allCharArr[userInputArrIndex[getRandom(userInputArrIndex)]];
    // Random password letter/symbol/number pushed to final array
    finalArr.push(randomArray[getRandom(randomArray)]);
  }
  return (pwOutput = finalArr.join(""));
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

/* ============ */

// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i < passLength; i++) {}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// getPasswordOptions();
// generatePassword();
