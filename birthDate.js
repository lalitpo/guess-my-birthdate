"use strict";

console.log(document.querySelector(".status").textContent);

const birthDay = Math.floor(Math.random() * 32);

const birthMonth = Math.floor(Math.random() * 13);

console.log(birthDay, birthMonth);
let currdscore;
let guessDay = false;
let guessMonth = false;
document.querySelector(".btn-check1").addEventListener("click", function(e) {
    const gday = Number(document.querySelector(".guessday").value);
    currdscore = Number(document.querySelector(".dscore").textContent);
    if (!gday || gday > 31) {
        document.querySelector(".status").textContent =
            "Not a number or Incorrect Day Range(1-31)!";
        document.querySelector(".dscore").textContent = currdscore - 1;
    } else if (gday === birthDay) {
        document.querySelector(".status").textContent = "You guessed it right!";
        document.querySelector(".hday").style.backgroundColor = "#60b347";
        guessDay = true;
        if (guessMonth) {
            document.querySelector(".tscored").textContent = currdscore + currmscore;
            document.querySelector("footer").style.backgroundColor = "#60b347";
            document.querySelector(".tscore").style.backgroundColor = "#60b347";
            document.querySelector(".hscore").style.backgroundColor = "#60b347";
        }
    } else if (gday > birthDay) {
        document.querySelector(".status").textContent =
            "Incorrect Guess : Greater Number!";
        document.querySelector(".dscore").textContent = currdscore - 1;
    } else if (gday < birthDay) {
        document.querySelector(".status").textContent =
            "Incorrect Guess : Lower Number!";
        document.querySelector(".dscore").textContent = currdscore - 1;
    }
});
let currmscore;

document.querySelector(".btn-check2").addEventListener("click", function(e) {
    const gmonth = Number(document.querySelector(".guessmonth").value);
    currmscore = Number(document.querySelector(".mscore").textContent);
    if (!gmonth || gmonth > 12) {
        document.querySelector(".status").textContent =
            "Not a number or Incorrect Month Range(1-12)!";
        document.querySelector(".mscore").textContent = currmscore - 1;
    } else if (gmonth === birthMonth) {
        document.querySelector(".status").textContent = "You guessed it right!";
        document.querySelector(".hmonth").style.backgroundColor = "#60b347";
        guessMonth = true;
        if (guessDay) {
            document.querySelector(".tscored").textContent = currmscore + currdscore;
            document.querySelector("footer").style.backgroundColor = "#60b347";
            document.querySelector(".tscore").style.backgroundColor = "#60b347";
            document.querySelector(".hscore").style.backgroundColor = "#60b347";
        }
    } else if (gmonth > birthDay) {
        document.querySelector(".status").textContent =
            "Incorrect Guess : Greater Number!";
        document.querySelector(".mscore").textContent = currmscore - 1;
    } else if (gmonth < birthDay) {
        document.querySelector(".status").textContent =
            "Incorrect Guess : Lower Number!";
        document.querySelector(".mscore").textContent = currmscore - 1;
    }
});

document.querySelector(".btn-again").addEventListener("click", function(e) {
    document.querySelector(".guessmonth").value = 0;
    document.querySelector(".guessday").value = 0;
});