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

function generatePassword() {
  var asciivals = [];
  randNum = 0;
  var addition = "";
  var pass = "";
  var pwlength = 0;
  while (pwlength < 8 || pwlength > 128){
      alert("You password must be between 8 and 128 characters long.");
      var pwlength = prompt("How long do you want your password to be?");
  }

  while (asciivals.length == 0) {
      var lower = confirm("Select ok to confirm lower case characters");
      var upper = confirm("Select ok to confirm upper case characters");
      var numeric = confirm("Select ok to confirm numeric characters");
      var special = confirm("Select ok to confirm special characters");
      
      if (lower){
          for (i = 97; i < 123; i ++){
              asciivals.push(i);
          }
      }

      if (upper){
          for (i = 65; i < 91; i ++){
              asciivals.push(i);
          }
      }

      if (numeric){
          for (i = 48; i < 58; i ++){
              asciivals.push(i);
          }
      }

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
      if (asciivals.length == 0){
          alert("Cannot generate a password with no characters selected.");
      }
  }

  for(i = 0; i < pwlength;i++){
      randNum = Math.floor(Math.random()*asciivals.length);
      addition = String.fromCharCode(asciivals[randNum]);
      pass = pass + addition;
  }
  console.log(pass);
  return pass;
}