// select all elements and create variables

//first page
var firstPage = document.getElementById("firstPage");
var continueBtn = document.getElementById("continueBtn");

//progress bar
var myProgress = document.getElementById("myProgress");
var myBar = document.getElementById("myBar");

//music category
var category = document.getElementById("category");
var countryBtn = document.getElementById("countryBtn");
var popBtn = document.getElementById("popBtn");
var rockBtn = document.getElementById("rockBtn");
var rapBtn = document.getElementById("rapBtn");
var indieBtn = document.getElementById("indieBtn");

//country
var country = document.getElementById("country");
var countryOne = document.getElementById("countryOne");
var countryTwo = document.getElementById("countryTwo");
var countryThree = document.getElementById("countryThree");
var countryFour = document.getElementById("countryFour");

//Pop
var pop = document.getElementById("pop");
var popOne = document.getElementById("popOne");
var popTwo = document.getElementById("popTwo");
var popThree = document.getElementById("popThree");
var popFour = document.getElementById("popFour");

//Rock
var rock = document.getElementById("rock");
var rockOne = document.getElementById("rockOne");
var rockTwo = document.getElementById("rockTwo");
var rockThree = document.getElementById("rockThree");
var rockFour = document.getElementById("rockFour");

//Rap
var rap = document.getElementById("rap");
var rapOne = document.getElementById("rapOne");
var rapTwo = document.getElementById("rapTwo");
var rapThree = document.getElementById("rapThree");
var rapFour = document.getElementById("rapFour");

//Indie
var indie = document.getElementById("indie");
var indieOne = document.getElementById("indieOne");
var indieTwo = document.getElementById("indieTwo");
var indieThree = document.getElementById("indieThree");
var indieFour = document.getElementById("indieFour");

//Timeline
var timeline = document.getElementById("timeline");
var myRange = document.getElementById("myRange");

//Footer
var thanksBtn = document.getElementById("thanksBtn");

//hide other pages upon loading
function initPage() {
  firstPage.style.display ="block";
  myProgress.style.display = "none";
  category.style.display = "none";
  country.style.display = "none";
  rock.style.display = "none";
  pop.style.display = "none";
  rap.style.display = "none";
  }
initPage();

//display music categories when continue is clicked
continueBtn.addEventListener("click", showMusic);

function showMusic() {
firstPage.style.display = "none";
myProgress.style.display = "block";
category.style.display = "block";
country.style.display = "none";
rock.style.display = "none";
pop.style.display = "none";
rap.style.display = "none";
}

//display sub-categories for Country 
countryBtn.addEventListener("click", showCountry);

function showCountry() {
  firstPage.style.display = "none";
  myProgress.style.display = "block";
  category.style.display = "none";
  country.style.display = "block";
  timeline.style.display ="block";
  }

//display sub-categories for Rock
rockBtn.addEventListener("click", showRock);

function showRock() {
  firstPage.style.display = "none";
  myProgress.style.display = "block";
  category.style.display = "none";
  rock.style.display = "block";
  timeline.style.display ="block";
  }

//display sub-categories for pop
popBtn.addEventListener("click", showPop);

function showPop() {
  firstPage.style.display = "none";
  myProgress.style.display = "block";
  category.style.display = "none";
  pop.style.display = "block";
  timeline.style.display ="block";
  }

//display sub-categories for Rap
rapBtn.addEventListener("click", showRap);

function showRap() {
  firstPage.style.display = "none";
  myProgress.style.display = "block";
  category.style.display = "none";
  rap.style.display = "block";
  timeline.style.display ="block";
  }

  //display sub-categories for Indie
indieBtn.addEventListener("click", showIndie);

function showIndie() {
  firstPage.style.display = "none";
  myProgress.style.display = "block";
  category.style.display = "none";
  indie.style.display = "block";
  timeline.style.display ="block";
  }

  //Go Back Button
function goBack() {
  window.history.go();
}
