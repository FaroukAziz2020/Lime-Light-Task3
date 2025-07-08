/*!
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

document.addEventListener("DOMContentLoaded", function () {
  const academicImages = document.querySelectorAll(".academic-img");

  academicImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.filter = "brightness(1.1)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.filter = "brightness(1)";
    });
  });
});

document.querySelectorAll('.academic-circle').forEach(circle => {
  circle.addEventListener('mouseenter', () => {
    circle.style.boxShadow = '0 12px 25px rgba(111, 66, 193, 0.6)';
  });
  circle.addEventListener('mouseleave', () => {
    circle.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-more");

  toggles.forEach(button => {
    button.addEventListener("click", () => {
      const moreInfo = button.nextElementSibling;
      if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        button.textContent = "More";
      } else {
        moreInfo.style.display = "block";
        button.textContent = "Less";
      }
    });
  });
});

