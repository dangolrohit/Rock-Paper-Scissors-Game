const rock = 1;
const paper = 2;
const scissor = 3;
let youWin = 0;
let compWin = 0;
//Scissor Area
document.getElementById("scissor").onclick = function () {
  let numBer = Math.floor(Math.random() * 3 + 1);
  if (numBer !== scissor) {
    if (numBer < paper) {
      document.getElementById("result").textContent = "You Lose!";
      compWin++;
      if (numBer == 1) {
        document.getElementById("comp").textContent = "Rock";
      } else if (numBer == 2) {
        document.getElementById("comp").textContent = "Paper";
      } else {
        document.getElementById("comp").textContent = "Scissor";
      }
      // counts
      document.getElementById("compCount").innerHTML = "Win: " + youWin;
      document.getElementById("winCount").innerHTML = "Win: " + compWin;
    } else {
      document.getElementById("result").textContent = "You Win!";
      youWin++;
      if (numBer == 1) {
        document.getElementById("comp").textContent = "Rock";
      } else if (numBer == 2) {
        document.getElementById("comp").textContent = "Paper";
      } else {
        document.getElementById("comp").textContent = "Scissor";
      }
      // counts
      document.getElementById("winCount").innerHTML = "Win: " + compWin;
      document.getElementById("compCount").innerHTML = "Win: " + youWin;
    }
  } else {
    document.getElementById("result").textContent = "Draw!";
    if (numBer == 1) {
      document.getElementById("comp").textContent = "Rock";
    } else if (numBer == 2) {
      document.getElementById("comp").textContent = "Paper";
    } else {
      document.getElementById("comp").textContent = "Scissor";
    }
  }
  document.getElementById("you").textContent = "Scissor";
};
// Paper Area
document.getElementById("paper").onclick = function () {
  let numBer = Math.floor(Math.random() * 3 + 1);
  if (numBer !== paper) {
    if (numBer == rock) {
      document.getElementById("result").textContent = "You Win!";
      youWin++;
      if (numBer == 1) {
        document.getElementById("comp").textContent = "Rock";
      } else if (numBer == 2) {
        document.getElementById("comp").textContent = "Paper";
      } else {
        document.getElementById("comp").textContent = "Scissor";
      }
      // counts
      document.getElementById("winCount").innerHTML = "Win: " + compWin;
      document.getElementById("compCount").innerHTML = "Win: " + youWin;
    } else {
      document.getElementById("result").textContent = "You Lose!";
      compWin++;
      if (numBer == 1) {
        document.getElementById("comp").textContent = "Rock";
      } else if (numBer == 2) {
        document.getElementById("comp").textContent = "Paper";
      } else {
        document.getElementById("comp").textContent = "Scissor";
      }
      // counts
      document.getElementById("compCount").innerHTML = "Win: " + youWin;
      document.getElementById("winCount").innerHTML = "Win: " + compWin;
    }
  } else {
    document.getElementById("result").textContent = "Draw!";
    if (numBer == 1) {
      document.getElementById("comp").textContent = "Rock";
    } else if (numBer == 2) {
      document.getElementById("comp").textContent = "Paper";
    } else {
      document.getElementById("comp").textContent = "Scissor";
    }
  }
  document.getElementById("you").textContent = "Paper";
};
// Rock Area
document.getElementById("rock").onclick = function () {
  let numBer = Math.floor(Math.random() * 3 + 1);
  if (numBer !== rock) {
    if (numBer == paper) {
      document.getElementById("result").textContent = "You Lose!";
      compWin++;
      if (numBer == 1) {
        document.getElementById("comp").textContent = "Rock";
      } else if (numBer == 2) {
        document.getElementById("comp").textContent = "Paper";
      } else {
        document.getElementById("comp").textContent = "Scissor";
      }
      // counts
      document.getElementById("compCount").innerHTML = "Win: " + youWin;
      document.getElementById("winCount").innerHTML = "Win: " + compWin;
    } else {
      document.getElementById("result").textContent = "You Win!";
      youWin++;
      if (numBer == 1) {
        document.getElementById("comp").textContent = "Rock";
      } else if (numBer == 2) {
        document.getElementById("comp").textContent = "Paper";
      } else {
        document.getElementById("comp").textContent = "Scissor";
      }
      // counts
      document.getElementById("winCount").innerHTML = "Win: " + compWin;
      document.getElementById("compCount").innerHTML = "Win: " + youWin;
    }
  } else {
    document.getElementById("result").textContent = "Draw!";
    if (numBer == 1) {
      document.getElementById("comp").textContent = "Rock";
    } else if (numBer == 2) {
      document.getElementById("comp").textContent = "Paper";
    } else {
      document.getElementById("comp").textContent = "Scissor";
    }
  }
  document.getElementById("you").textContent = "Rock";
};
