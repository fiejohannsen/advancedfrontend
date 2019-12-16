"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }

}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  console.log(pageId)
  document.querySelector(`#${pageId}`).style.display = "block";

  location.href = `#${pageId}`;
  document.getElementById("myNav").style.display = "none";
  showLoader(false);
}


// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll("#menu a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }

}



// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

// nav (burgermenu)
function openNav() {
  document.getElementById("myNav").style.animation = "slide-in-left 0.8s ease-out both";
  document.getElementById("myNav").style.display = "block";

}

function closeNav() {

  document.getElementById("myNav").style.animation = "slide-out-left 1s ease-out both";
}



// slider on frontpage
let frontpageSlideIndex = 1;
showFrontPageSlides(frontpageSlideIndex);

function plusFrontpageSlides(n) {
  showFrontPageSlides(frontpageSlideIndex += n);
}

function currentFrontpageSlide(n) {
  showFrontPageSlides(frontpageSlideIndex = n);
}

function showFrontPageSlides(n) {
  let i;
  let frontpageSlides = document.getElementsByClassName("frontpageSlides");
  let frontpageDots = document.getElementsByClassName("frontpageDot");
  if (n > frontpageSlides.length) {
    frontpageSlideIndex = 1
  }
  if (n < 1) {
    frontpageSlideIndex = frontpageSlides.length
  }
  for (i = 0; i < frontpageSlides.length; i++) {
    frontpageSlides[i].style.display = "none";
  }
  for (i = 0; i < frontpageDots.length; i++) {
    frontpageDots[i].className = frontpageDots[i].className.replace(" frontpageDotActive", "");
  }
  frontpageSlides[frontpageSlideIndex - 1].style.display = "block";
  frontpageDots[frontpageSlideIndex - 1].className += " frontpageDotActive";
}


// slider on bisou-page
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Add notification to basket when button is clicked //
function addToBasket() {
  document.getElementById("add-to-basket").style.display = "none";
  document.getElementById("added").style.display = "flex";


  document.getElementById("notification").style.display = "block";
}


// Scroll event on animations
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  Array.prototype.forEach.call(elementsToShow, function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {

  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }

}