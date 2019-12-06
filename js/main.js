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



// FIREBASE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPhhJdvEJpgb4cfVsBDOOavFlIxtzZVc",
  authDomain: "advanced-frontend-project.firebaseapp.com",
  databaseURL: "https://advanced-frontend-project.firebaseio.com",
  projectId: "advanced-frontend-project",
  storageBucket: "advanced-frontend-project.appspot.com",
  messagingSenderId: "746928528190",
  appId: "1:746928528190:web:9b148f1fb11021f9ffea6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const bikeRef = db.collection("bike");
let bikes = [];



bikeRef.onSnapshot(function(snapshotData) {
  bikes = snapshotData.docs;
  appendBikes(bikes);
});

function appendBikes(bikes) {
  let htmlTemplate = "";
  for (let bike of bikes) {
    console.log(bike.data());
    htmlTemplate += `
    <h1>CYKELMODELLER</h1>

    <button href="#" onclick="viewModel('${i}')" class="bisou">
      <h2>${bike.data().model}</h2>
      <img src="${bike.data().img}">
    </button>
    `;
  }
  document.querySelector('#model-container').innerHTML = htmlTemplate;

}