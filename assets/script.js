// Assignment code here
const passwordText = document.getElementById("#password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol ="@#$%^&*()_+~|}{[]></-="
const allChars = upperCase + lowerCase + number + symbol;

// const generateBtn = document.querySelector("#generate");

// Get references to the #generate element

// // Write password to the #password input

function writePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(lenght > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
      passwordText.value = password;
      
console()
//   }

  // const password = generatePassword();


}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

