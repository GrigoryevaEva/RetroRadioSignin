'use strict'

let inputEmailElem = document.querySelector('#email');
let inputPasswordElem = document.querySelector("#password");

let resultEmail;
let resultPassword;
let resultCheckSizePas;
let resultCheckNumPas;
let resultCheckCapsPas;

inputEmailElem.addEventListener("input", () => {
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  let emailElem = document.querySelector("#email-correct");

  if (inputEmailElem.value.search(reg) === 0) {
    emailElem.classList.add('email-correct');
    resultEmail = true;
  } else if (document.querySelector(".email-correct") !== null) {
    emailElem.classList.remove("email-correct");
    resultEmail = false;
  }

  checkCorrectLoginForm();
});

inputPasswordElem.addEventListener("input", () => {
  let passwordElem = document.querySelector("#size-pas");

  if (inputPasswordElem.value.length > 8) {
    passwordElem.classList.add("size-password-correct");
    resultCheckSizePas = true;
  } else if (document.querySelector(".size-password-correct") !== null) {
    passwordElem.classList.remove("size-password-correct");
    resultCheckSizePas = false;
  }
});

inputPasswordElem.addEventListener("input", () => {
  let passwordElem = document.querySelector("#num-pas");

  if (checkNumInStr(inputPasswordElem.value)) {
    passwordElem.classList.add("num-password-correct");
    resultCheckNumPas = true;
  } else if (document.querySelector(".num-password-correct") !== null) {
    passwordElem.classList.remove("num-password-correct");
    resultCheckNumPas = false;
  }
});

inputPasswordElem.addEventListener("input", () => {
  let passwordElem = document.querySelector("#caps-pas");

  if (checkCapsInStr(inputPasswordElem.value)) {
    passwordElem.classList.add("caps-password-correct");
    resultCheckCapsPas = true;
  } else if (document.querySelector(".caps-password-correct") !== null) {
    passwordElem.classList.remove("caps-password-correct");
    resultCheckCapsPas = false;
  }
});

inputPasswordElem.addEventListener("input", () => {
  let passwordElem = document.querySelector("#password-correct");

  if (resultCheckSizePas && resultCheckNumPas && resultCheckCapsPas) {
    passwordElem.classList.add("password-correct");
    resultPassword = true;
  } else if (document.querySelector(".password-correct") !== null) {
    passwordElem.classList.remove("password-correct");
    resultPassword = false;
  }

  checkCorrectLoginForm();
});

function checkCorrectLoginForm () {
  let coreElem = document.querySelector("#core");
  console.log(resultEmail, resultPassword);
  if (resultEmail && resultPassword) {
    console.log('object');
    coreElem.classList.add("login-form-correct");
  } else if (document.querySelector(".login-form-correct") !== null) {
    coreElem.classList.remove("login-form-correct");
  }
}

function checkNumInStr (str) {
  let reg = /\d+/;
  return Boolean(str.match(reg));
}

function checkCapsInStr (str) {
  let reg = /[A-Z]/;
  return Boolean(str.match(reg));
}