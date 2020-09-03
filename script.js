let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  }
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    document.getElementById("main-title").innerText = "Welcome to Dom's Page";
  }
  // shortenPageTitle();

  // Part 2
  function changeBodyBgColor() {
    document.body.style.background = "orange";
  }
  // changeBodyBgColor();

  // Part 3
  function removeLastFavoriteThing() {
    var Domsfavoritething = document.getElementById("favorite-things");
    var Lastiteminstring = Domsfavoritething.children[5];
    Domsfavoritething.removeChild(Lastiteminstring);
  }
  // removeLastFavoriteThing();

  // Part 4
  function makeSpecialTitlesBigger() {
    var specialtitle = document.getElementsByClassName("special-title");
    for (var count = 0; count < titles.length; count++) {
      titles[specialtitle].style.fontSize = "2rem";
    }
  }
  // makeSpecialTitlesBigger();

  // Part 5
  function RemoveChicagoRace() {
    var pastRaces = document.getElementById("past-races");
    var ChicagoRace = pastRaces.children[3];
    pastRaces.removeChild(ChicagoRace);
  }
  // RemoveChicagoRace();

  // Part 6
  function addPastRace() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Oregon");
    node.appendChild(textnode);
    document.getElementById("past-races").appendChild(node);
  }
  addPastRace();

  // Part 7

  function createNewBlogPost() {
    var newP = document.createElement("p");
    newP.innerText = "I LOST...NOOOOO!";
    var newH1 = document.createElement("h1");
    newH1.innerText = "Oregon";
    var newDiv = document.createElement("div");
    newDiv.className = "blog-post purple";
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    var mainDivList = document.getElementsByClassName("main");
    var mainDiv = mainDivList[0];
    mainDiv.appendChild(newDiv);
  }
  createNewBlogPost();
});
