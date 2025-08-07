let your_score_screen = document.querySelector("#your_score");
let bot_score_screen = document.querySelector("#bot_score");
let picture = document.querySelectorAll(".pictures");
let screen = document.querySelector(".screen");
let reset = document.querySelector(".reset");

let your_score = 0;
let bot_score = 0;

const your = () => {
  your_score++;
  your_score_screen.innerText = your_score;
};
const bot_ = () => {
  bot_score++;
  bot_score_screen.innerText = bot_score;
};
const bot_guessing = () => {
  let data = ["rock", "paper", "scissor"];
  let guess = Math.floor(Math.random() * 3);
  return data[guess];
};

picture.forEach((pics) => {
  pics.addEventListener("click", () => {
    let id = pics.getAttribute("id");
    let bot = bot_guessing();
    if (id === bot) {
      screen.innerText = "Match draw";
      screen.style.backgroundColor = "black";
    } else if (id === "rock" && bot === "paper") {
      screen.innerText = `Paper overcomes Your Rock`;
      screen.style.backgroundColor = "red";
      bot_();
    } else if (id === "rock" && bot === "scissor") {
      screen.innerText = `Your Rock overcomes Scissor`;
      screen.style.backgroundColor = "green";
      your();
    } else if (id === "scissor" && bot === "rock") {
      screen.innerText = `Rock overcomes Your Scissor`;
      screen.style.backgroundColor = "red";
      bot_();
    } else if (id === "scissor" && bot === "paper") {
      screen.innerText = `Your Scissor overcomes Paper`;
      screen.style.backgroundColor = "green";
      your();
    } else if (id === "paper" && bot === "rock") {
      screen.innerText = `Your Paper overcomes Rock`;
      screen.style.backgroundColor = "green";
      your();
    } else if (id === "paper" && bot === "scissor") {
      screen.innerText = `Scissor overcomes Your Paper`;
      screen.style.backgroundColor = "red";
      bot_();
    }
  });
});

reset.addEventListener("click", () => {
  screen.innerText = "Play your move";
  screen.style.backgroundColor = "rgba(23, 1, 1, 0.857)";
  your_score_screen.innerText = "0";
  bot_score_screen.innerText = "0";
  your_score = 0;
  bot_score = 0;
});
