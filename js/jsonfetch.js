"use strict";

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

  `;
  }

  document.querySelector("#footercontent").innerHTML = htmlTemplate;

}