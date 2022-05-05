"use strict";
//to get info
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number ✔";

// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//for random numbers..
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//create function for display mess..
const displaymess = function (message) {
  document.querySelector(".message").textContent = message;
};
//show secret number.
// document.querySelector(".number").textContent = secretnumber;

//click btn and check number ..
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //for no guess
  if (!guess) {
    // document.querySelector(".message").textContent = "NO NUMBER!";
    displaymess("NO NUMBER!"); //use function..

    //for guess right
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "Correct Number ✔";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "pink";
    document.querySelector(".number").style.width = "200px";

    //high score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretnumber ? "TOO High" : "TOO Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //guess too high
  //   } else if (guess > secretnumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "TOO High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost Game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //guess is too low
  //   } else if (guess < secretnumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "TOO Low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost Game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});
//for play again..
document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "rgb(167, 156, 156)";
  document.querySelector(".number").style.width = "100px";
});
