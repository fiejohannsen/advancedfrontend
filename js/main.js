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
  document.querySelector(`#${pageId}`).style.display = "block";

  location.href = `#${pageId}`;
  document.getElementById("myNav").style.display = "none";

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

// nav
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

// slider
var slideIndex = 1;
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





// slider
var frontpageSlideIndex = 1;
showFrontPageSlides(frontpageSlideIndex);

function plusFrontpageSlides(n) {
  showFrontPageSlides(frontpageSlideIndex += n);
}

function currentFrontpageSlide(n) {
  showFrontPageSlides(frontpageSlideIndex = n);
}

function showFrontPageSlides(n) {
  var i;
  var frontpageSlides = document.getElementsByClassName("frontpageSlides");
  var frontpageDots = document.getElementsByClassName("frontpageDot");
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



const doc = document;
let bikes;

fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendBikes(json.bikes);
  });

// Adds persons to the DOM by giving parameter, persons
function appendBikes(bikes) {
  let htmlTemplate = '';
  for (let bike of bikes) {
    htmlTemplate += `
          <a onclick="showPage('bisou')">
            <h2>BISOU</h2>
            <img class="bikes-img" src="${bike.bisou.bluegrey}">
          </a>

          <a onclick="showPage('cs26')">
            <h2>CS26</h2>
            <img class="bikes-img" src="${bike.cs26.bamboo}">
          </a>

          <a onclick="showPage('little')">
            <h2>LITTLE</h2>
            <img class="bikes-img" src="${bike.little.jefferred}">
          </a>

          <a onclick="showPage('limited')">
            <h2>LIMITED</h2>
            <img class="bikes-img" src="${bike.limited.midnight}">
          </a>
  `;

  }

  document.querySelector("#models").innerHTML = htmlTemplate;

}