

// variables 
var characterLength = 8;

var choiceArray = [];

var upperArray =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '|', '~'];

var lowerArray =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]; 



var generateBtn = document.querySelector("#generate");

//Add Event Listener to generate button
generateBtn.addEventListener("click", writePassword);



//password input

function writePassword() {

  var correctPrompts = getPrompts();

  var passwordText = document.querySelector("#password");

  if (correctPrompts) {

  var newPassword = generatePassword();

  passwordText.value = newPassword;

  }
   else {
  passwordText.value = "";
  }
}


// password generating function
function generatePassword() {

  var password = "";
  
  for (var i = 0; i < characterLength; i++) {

    var randomIndex = Math.floor(Math.random() * choiceArray.length)

    password = password + choiceArray[randomIndex];
  }

  return password;
}

function getPrompts() {

  choiceArray = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128 Characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length invalid: type a number between 8-128.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password? ")) {
      choiceArray = choiceArray.concat(lowerArray);
    }

  if (confirm("Would you like uppercase letters in your password ?")) {
      choiceArray = choiceArray.concat(upperArray);
    }

  if (confirm("Would you like numbers in your password? ")) {
      choiceArray = choiceArray.concat(numberArray); 
    }

  if (confirm("Would you like special characters in your password? ")) {
      choiceArray = choiceArray.concat(specialCharArray);
    }
    return true;
}