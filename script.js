document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
  
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "#555";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    };
  
    var navLinks = document.querySelectorAll('.navbar a');
  
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('mouseover', function () {
        this.style.backgroundColor = "#ddd";
        this.style.color = "black";
      });
  
      navLink.addEventListener('mouseout', function () {
        this.style.backgroundColor = "";
        this.style.color = "#f2f2f2";
      });
    });
  });
  