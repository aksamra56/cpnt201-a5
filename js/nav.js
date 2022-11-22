document.getElementById("toggle").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("-right-full")
    document.getElementById("nav").classList.toggle("right-0")
})

// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var links = btnContainer.getElementsByClassName("navlink");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
   

      
        document.getElementById("nav").classList.toggle("-right-full")
        document.getElementById("nav").classList.toggle("right-0")

  });
} 