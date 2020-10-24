// select all elements and create variables

//first page
var firstPage = document.getElementById("firstPage");
var continueBtn = document.getElementById("continueBtn");

//progress bar
var myProgress = document.getElementById("myProgress");
var myBar = document.getElementById("myBar");

//music category
var category = document.getElementById("category");

//country
var country = document.getElementById("country");

//Jazz
var jazz = document.getElementById("jazz");

//Rock
var rock = document.getElementById("rock");

//Electronic 
var electronic = document.getElementById("electronic");

//Timeline
var timeline = document.getElementById("timeline");
var myRange = document.getElementById("myRange");

//Footer
var thanksBtn = document.getElementById("thanksBtn");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}