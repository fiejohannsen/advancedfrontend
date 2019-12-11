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

// nav (burgermenu)
function openNav() {
  document.getElementById("myNav").style.animation = "slide-in-left 0.8s ease-out both";
  document.getElementById("myNav").style.opacity = "1";
  document.getElementById("myNav").style.display = "block";

}

function closeNav() {

  document.getElementById("myNav").style.animation = "slide-out-left 1s ease-out both";


}




// slider on frontpage
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


// slider on bisou-page
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

// Add notification to basket when button is clicked //
function addToBasket() {
  document.getElementById("add-to-basket").style.display = "none";
  document.getElementById("added").style.display = "flex";


  document.getElementById("notification").style.display = "block";
}


// fetching data from json

const doc = document;

fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendBikes(json.bikes);
  });

function appendBikes(bikes) {
  let htmlTemplate = '';
  for (let bike of bikes) {
    htmlTemplate += `

          <div onclick="showPage('bisou')">
            <h2>BISOU</h2>
            <img class="bikes-img" src="${bike.bisou.bluegrey}">
          </div>

          <div onclick="showPage('cs26')">
            <h2>CS26</h2>
            <img class="bikes-img" src="${bike.cs26.bamboo}">
          </div>
          <div onclick="showPage('limited')">
            <h2>LIMITED</h2>
            <img class="bikes-img" src="${bike.limited.midnight}">
          </div>
          <div onclick="showPage('little')">
            <h2>LITTLE</h2>
            <img class="bikes-img" src="${bike.little.jefferred}">
          </div>
          <div onclick="showPage('')">
            <h2>MINI VELO</h2>
            <img class="bikes-img" src="${bike.minivelo.mattsage}">
          </div>
          <div onclick="showPage('')">
            <h2>SINGLE SPEED</h2>
            <img class="bikes-img" src="${bike.singlespeed.midnight}">
          </div>
          <div onclick="showPage('')">
            <h2>SPORT</h2>
            <img class="bikes-img" src="${bike.sport.mattblack}">
          </div>
  `;

  }

  document.querySelector("#models").innerHTML = htmlTemplate;

}



// Fetching footer from json

fetch('json/footer.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendFooters(json.footers);
  });

function appendFooters(footers) {
  let htmlTemplate = '';
  for (let footer of footers) {
    htmlTemplate += `
    <div>
    <h2>${footer.name}</h2>
    <h3>${footer.street}</h3>
    <h3>${footer.city}</h3>
    </div>
    <div>
    <h2>${footer.openinghours}</h2>
    <h3>${footer.weekdays}</h3>
    <h3>${footer.weekends}</h3>
    </div>
    <div>
    <h2>${footer.contacttitle}</h2>
    <h3>${footer.email}</h3>
    <h3>${footer.phone}</h3>
    </div>
    <div class="map">
    <img src="${footer.location}">
    </div>
  `;
  }

  document.querySelector("#footercontent").innerHTML = htmlTemplate;

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
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
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



// We tried making a mapbox, but it failed to load in footer on each page and would only show up once. Maybe because it has an id (container: 'map'), that we can't change?
// mapboxgl.accessToken = "pk.eyJ1IjoibGFlcmtlbGFuZ2UiLCJhIjoiY2p0aWJwbTVjMGpuMTN5bno5eXI2OHZ6cCJ9.M1Fc8ANdg2nEM6YOtvH1_g";
//
//
// let map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/light-v10',
//   zoom: 13.43,
//   center: [10.2153, 56.1634]
// });
//
// // code from the next step will go here!
// let geojson = {
//   type: 'FeatureCollection',
//   features: [{
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [10.2161, 56.1638]
//     },
//     properties: {
//       title: 'FIX & FINITO',
//       description: 'SKOVVEJEN 7<br> AARHUS C'
//     }
//   }]
// };
// // add markers to map
// geojson.features.forEach(function(marker) {
//
//   // create a HTML element for each feature
//   let el = document.createElement('div');
//   el.className = 'marker';
//
//   // make a marker for each feature and add to the map
//   new mapboxgl.Marker(el)
//     .setLngLat(marker.geometry.coordinates)
//     .addTo(map);
//   new mapboxgl.Marker(el)
//     .setLngLat(marker.geometry.coordinates)
//     .setPopup(new mapboxgl.Popup({
//         offset: 25
//       }) // add popups
//       .setHTML('<h3><b>' + marker.properties.title + '</b></h3><p>' + marker.properties.description + '</p>'))
//     .addTo(map);
// });