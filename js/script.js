const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]
hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("nav .nav-links ul li a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav .nav-links ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


var swiper = new Swiper(".blog-slider", {
  loop: true,
  slidesPerView: "1",
  speed: 500,
  effect: "coverflow",
  coverflowEffect: {
      slideShadows: false,
  },
  mousewheel: {
      invert: false,
  },
  autoplay: {
      delay: 3000,
  },
  breakpoints: {
      0: {
          effect: "slide",
          centeredSlides: false,
      },
      768: {
          slidesPerView: "2",
          centeredSlides: true,
      },
      1200: {
          slidesPerView: "3",
          centeredSlides: true,
      }
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
  },

});
