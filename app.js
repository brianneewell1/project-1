// select all elements and create variables
//firstPage
var firstPage = document.getElementById("firstPage");
var continueBtn = document.getElementById("continueBtn");

//Progress Bar
var myProgress = document.getElementById("myProgress");
var myBar = document.getElementById("myBar");

//Music Categories
var category = document.getElementById("category");

//Subcategories
var subcategory = document.getElementById("subcategory");





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