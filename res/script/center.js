// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

searchForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        search();
      }
    });
    
/* document.addEventListener("keypress", function(event) {
    if (event.key === "/" && !event.target.matches("input, textarea")) {
        event.preventDefault();
        searchForm.classList.toggle("active");
        document.getElementById("search-box").focus();
    }
    
    else (event.key === "/" && !event.target.matches("input, textarea")) {
        event.preventDefault();
        searchForm.classList.toggle("active");
        document.getElementById("search-box").focus();
    }
});*/

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  document.getElementById("search-box").focus();
  e.preventDefault();
};

//Malfunction 
function start() {
  alert("Error:404");
}

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
