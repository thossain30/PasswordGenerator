// Assignment code here
function generatePassword() {
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = upperChars.toLowerCase();
  let numbers = "0123456789"
  let specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // 1. Prompt the user for criteria
  //    a. length ( greater than 8 and less than 128)
  // prompts for length
  let lengthPrompt = prompt("Enter your desired password length (8 - 128 characters)");
  // converts lengthPrompt into a number
  let length = parseInt(lengthPrompt);
  // Checks if length fits the criteria and is a number
  while (length < 8 || length > 128 || length == NaN) {
    length = prompt("Please enter a number between 8 and 128");
  }
  //    b. Char types (uppercase, lowercase, special, etc.)
  // repeats these prompts until at least one char type is true;
  while (!isLower && !isUpper && !isNumber && !isSpecial ) {
    let isLower = confirm("Would you like lowercase letters?");
    let isUpper = confirm("Would you like uppercase letters?");
    let isNumber = confirm("Would you like numbers?");
    let isSpecial = confirm("And finally, would you like special characters?");
  }
  // 2. Validate the input 
  // 3. Generate password based on criteria


  // 4. Display password to the page
  let result = "password will go here";
  return result;
}
// Get references to the #generate element
// This let refers to the button at the bottom
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
