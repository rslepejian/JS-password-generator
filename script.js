// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My code below
function generatePassword() {
  // empty array
  var asciivals = [];
  // variable to store random numbers
  randNum = 0;
  // variable to store characters to be added to password
  var addition = "";
  // password, starts empty
  var pass = "";
  // password length, starts out 0
  var pwlength = 0;
  // while loop to loop until an accepted password length is input
  while (pwlength < 8 || pwlength > 128){
      alert("You password must be between 8 and 128 characters long.");
      var pwlength = prompt("How long do you want your password to be?");
  }

  // while loop to loop until user oks at least one character type
  while (asciivals.length == 0) {
      var lower = confirm("Select ok to confirm lower case characters");
      var upper = confirm("Select ok to confirm upper case characters");
      var numeric = confirm("Select ok to confirm numeric characters");
      var special = confirm("Select ok to confirm special characters");
      
      // adds ascii decimal values of lowercase letters to asciivals array
      if (lower){
          for (i = 97; i < 123; i ++){
              asciivals.push(i);
          }
      }

      // adds ascii decimal values of uppercase letters to asciivals array
      if (upper){
          for (i = 65; i < 91; i ++){
              asciivals.push(i);
          }
      }

      // adds ascii decimal values of numeric characters to asciivals array
      if (numeric){
          for (i = 48; i < 58; i ++){
              asciivals.push(i);
          }
      }

      // adds ascii decimal values of special characters to asciivals array (including space)
      // several for loops are needed because special character decimal values are not all adjacent
      // to disinclude space change  the 32 in the first for loop to 33
      if (special){
          for (i = 32; i < 48; i ++){
              asciivals.push(i);
          }
          for (i = 58; i < 65; i ++){
              asciivals.push(i);
          }
          for (i = 91; i < 97; i ++){
              asciivals.push(i);
          }
          for (i = 122; i < 127; i ++){
              asciivals.push(i);
          }
      }
      // Warns user to ok at least one character type
      if (asciivals.length == 0){
          alert("Cannot generate a password with no characters selected.");
      }
  }

  // generates password with user defined restrictions
  for(i = 0; i < pwlength;i++){
      // generates a random index within the asciivals array
      randNum = Math.floor(Math.random()*asciivals.length);
      // takes the decimal value stored at that index and puts the corresponding ascii character in addition variable
      addition = String.fromCharCode(asciivals[randNum]);
      // adds character stored in addition variable onto end of password
      pass = pass + addition;
  }
  // debugging console output of password
  console.log(pass);
  // return statement
  return pass;
}