// Get the hamburger element and nav list
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");

// Add click event listener to hamburger
hamburger.addEventListener("click", () => {
  // Toggle the active class on the nav list
  navList.classList.toggle("active");

  // Toggle the active class on the hamburger for animation
  hamburger.classList.toggle("active");
});

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-list ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
