// Global Variables
const pages = Array.from(document.querySelectorAll(".page"));
const primary = document.querySelector(".primary");
const message = document.querySelector(".message");

const selection = document.querySelector(".selection");
const select = Array.from(document.querySelectorAll(".img-choice"));

const rulesBtn = document.querySelector(".rulesBtn");
const closeBtn = document.querySelector(".close");
const playAgainBtn = document.querySelector(".playAgain-btn");

const user = document.querySelector(".user");
const house = document.querySelector(".house");

const cards = ["card1", "card2", "card3"];

let activePage = 0;

// Game functionality
// Scissors BEATS Paper
// Rock BEATS Scissors
// Paper BEATS Rock

let randomNumber, randomPick, userChoice;

//////////////////////////////////////////////////////////////////////////////////////
// Version 1
selection.addEventListener("click", function (e) {
  // If clicked element is not same as random Pick
  const randomNumber = Math.floor(Math.random() * 3);
  const randomPick = select[randomNumber];

  const userChoice = select.indexOf(e.target);
  handleWinner(userChoice, randomNumber);

  pages[0].style.display = "none";
  showPage(pages[1]);
});

//////////////////////////////////////////////////////////////////////
// Function to show page
const showPage = function (page) {
  page.classList.remove("hidden");
};

// Function to hide page
const hidePage = function (page) {
  page.classList.add("hidden");
};

const hideBtn = function () {
  rulesBtn.classList.add("hidden");
};

const showBtn = function () {
  rulesBtn.classList.remove("hidden");
};

// EventListeners
///////////////////////////////////////////////////////////////////////
// Open modal on rulesBtn click
rulesBtn.addEventListener("click", function () {
  showPage(pages[2]);
  primary.classList.add("overlay");
  hideBtn();
});

// Close modal on clicking close btn
closeBtn.addEventListener("click", function () {
  hidePage(pages[2]);
  showPage(pages[0]);
  showBtn();
  primary.classList.remove("overlay");
});

// Close modal on clicking anywhere outside the modal
primary.addEventListener("click", function (e) {
  if (e.target !== pages[2]) {
    hidePage(pages[2]);
    showPage(pages[0]);
    primary.classList.remove("overlay");
    showBtn();
  }
});

// Close modal on pressing "Esc" key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hidePage(pages[2]);
    showPage(pages[0]);
    primary.classList.remove("overlay");
    showBtn();
  }
});

//////////////////////////////////////////////////////////////////
// Play Again button

playAgainBtn.addEventListener("click", function () {
  pages[0].style.display = "block";
  hidePage(pages[1]);
  hidePage(pages[2]);
  hideBtn();
  console.log(pages);
});

// Function to handle winner
const handleWinner = (userChoice, randomNumber) => {
  let htmlMarkupW = `<div class="select ${cards[userChoice]}">
                          <img src="${select[userChoice].src}" alt="" class="img-choice">
                        </div>`;
  let htmlMarkupL = `<div class="select ${cards[randomNumber]}">
                          <img src="${select[randomNumber].src}" alt="" class="img-choice">
                        </div>`;

  if (userChoice === randomNumber) {
    message.innerText = "DRAW!";
    user.innerHTML = htmlMarkupL;
    house.innerHTML = htmlMarkupL;
  } else if (
    (userChoice === 0 && randomNumber === 1) ||
    (userChoice === 1 && randomNumber === 2) ||
    (userChoice === 2 && randomNumber === 0)
  ) {
    message.innerText = "You Win";
    user.innerHTML = htmlMarkupW;
    house.innerHTML = htmlMarkupL;
  } else {
    message.innerText = "You Lose";
    user.innerHTML = htmlMarkupW;
    house.innerHTML = htmlMarkupL;
  }
};
