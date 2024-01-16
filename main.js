// Web dev account challenge

// HTML Element for Output
let outputEl = document.getElementById("output");
let outputEl2 = document.getElementById("output2");
let outputEl3 = document.getElementById("output3");
let outputEl4 = document.getElementById("output4");
let outputEl5 = document.getElementById("output5");
let outputEl6 = document.getElementById("output6");
let outputEl7 = document.getElementById("output7");

// Menu Button
document.getElementById("btn").addEventListener("click", BtnClicked);

function BtnClicked() {
  // HTML Element For Input
  let numUser = 0;
  let numPass1 = 0;

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  if (input1.length >= 10) {
    outputEl7.innerHTML =
      "Username is too Long, must be less than 10 charecters";
  } else if (input1.length === 0) {
    outputEl7.innerHTML = "Must enter a Username";
  } else if (input1.length <= 4) {
    outputEl7.innerHTML =
      "Username is too Short, must be more than 4 charecters";
  } else {
    numUser++;
    outputEl3.innerHTML = "Username is Avalible";
  }

  if (input2 === "") {
    outputEl6.innerHTML = "must enter a password";
  } else if (input3 === "") {
    outputEl5.innerHTML = "must enter a password";
  } else if (input2 == input3) {
    numPass1++;
    outputEl2.innerHTML = "Passwords match";
  } else if (input2 !== input3) {
    outputEl5.innerHTML = "Passwords Do not match";
  }

  let total = numPass1 + numUser;

  if (total === 2) {
    outputEl4.innerHTML = "Login sucessful";
  } else {
    outputEl4.innerHTML = "There is an error";
  }
}
