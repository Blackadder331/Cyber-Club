// JavaScript
// Select all nav buttons
var navButtons = document.querySelectorAll(".nav-button");

// Loop through each button
for (var i = 0; i < navButtons.length; i++) {

 // Add click event listener to each button
 navButtons[i].addEventListener("click", function() {

   // Get the target slide id from the button's data attribute
   var targetSlide = this.dataset.target;

   // Select all slides
   var slides = document.querySelectorAll(".slide");

   // Loop through each slide
   for (var j = 0; j < slides.length; j++) {

     // Remove active class from all slides
     slides[j].classList.remove("active");
   }

   // Add active class to target slide
   document.querySelector(targetSlide).classList.add("active");

   // Loop through each button again
   for (var k = 0; k < navButtons.length; k++) {

     // Remove active class from all buttons
     navButtons[k].classList.remove("active");
   }

   // Add active class to clicked button
   this.classList.add("active");
 });
}



// // NAV hide/show button
// // Select the toggle button
// var toggleButton = document.getElementById("toggle-nav");

// // Select the nav div
// var navDiv = document.getElementById("nav");

// // Add click event listener to the toggle button
// toggleButton.addEventListener("click", function() {

//  // Toggle active class on the nav div
//  navDiv.classList.toggle("active");
// });


// HOVER to show NAV
// Select the nav div
var navDiv = document.getElementById("nav");

// Add mouseenter event listener to the nav div
navDiv.addEventListener("mouseenter", function() {

 // Add active class to the nav div
 this.classList.add("active");
});

// Add mouseleave event listener to the nav div
navDiv.addEventListener("mouseleave", function() {

 // Remove active class from the nav div
 this.classList.remove("active");
});