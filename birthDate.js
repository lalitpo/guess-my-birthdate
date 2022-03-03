"use strict";

console.log(document.querySelector(".status").textContent);

document.querySelector(".status").textContent = "You guessed it right!";

const birthDay = Math.floor(Math.random() * 32);

const birthMonth = Math.floor(Math.random() * 13);

console.log(birthDay, birthMonth);

document.querySelector(".btn-check1").addEventListener("click", function() {
    console.log(document.querySelector(".guessday").value);
});