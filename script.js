// Simple menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-secondary/95", "backdrop-blur-lg", "shadow-lg");
  } else {
    nav.classList.remove("bg-secondary/95", "backdrop-blur-lg", "shadow-lg");
  }
});
