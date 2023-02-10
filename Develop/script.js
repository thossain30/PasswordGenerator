// Assignment code here
function generatePassword() {

  // Different char sets that can be used for password generation
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = upperChars.toLowerCase();
  let numbers = "0123456789"
  let specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"';

  // Different confirms to check whether each char set is valid for our password
  let isLower;
  let isUpper;
  let isNumber;
  let isSpecial;
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
  do {
    isLower = confirm("Would you like lowercase letters?");
    isUpper = confirm("Would you like uppercase letters?");
    isNumber = confirm("Would you like numbers?");
    isSpecial = confirm("And finally, would you like special characters?");
  } while (!isLower && !isUpper && !isNumber && !isSpecial)
  // 2. Validate the input

  /* The set of characters valid for the input 
    If the return value from each confirm is true (user clicked OK),
    Then we add the respective characters from each set into our string of valid chars
  */
  let chars = "";
  if (isLower) {
    chars += lowerChars;
  } 
  if (isUpper) {
    chars += upperChars;
  }
  if (isNumber) {
    chars += numbers;
  }
  if (isSpecial) {
    chars += specialChars;
  }
  // 3. Generate password based on criteria
  let result = "";

  /*
    While the length of our result is less than length prompted,
    We add a random character from our chars String to result
    (Math.floor ensures we only get ints up to and including length of chars)
  */
  while (result.length < length) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  // 4. Display password to the page
  return result;
}
// Get references to the #generate element (Button at the bottom)
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
