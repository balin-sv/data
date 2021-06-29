import { findName } from "./data.js";
import data from "./data/ghibli/ghibli.js";

console.log(data);
let mainContainer = document.querySelector(".main-show-more-container");

let peopleArray = [];
for (let i = 0; i < data.films.length; i++) {
  peopleArray.push(data.films[i].people);
}

printList();

function printList() {
  let response;
  let allform = document.querySelector("form");
  let button = document.getElementById("theButton");
  let text = document.getElementById("formValueId");
  button.onclick = function (event) {
    event.preventDefault();
    response = findName(peopleArray, text.value.trim());
    allform.reset();
    console.log(response);
    if (mainContainer.firstChild) {
      while (mainContainer.firstChild) {
        mainContainer.firstChild.remove();
      }
    }
    showPerson(response, sectionImg, sectionDescr);
  };

  let div = document.querySelector(".section-1-titles");
  let list = document.createElement("ul");
  list.className = "listOfPersons";
  let sectionImg = document.querySelector(".section-2-img");
  let sectionDescr = document.querySelector(".section-2-descr");

  let divImg = document.createElement("div");

  divImg.innerHTML = '<img src= "img/j.png "/> ';
  divImg.className = "start-img";

  divImg.style.marginLeft = "50% ";
  sectionImg.appendChild(divImg);
  for (let j = 0; j < data.films.length; j++) {
    let link = document.createElement("a");
    link.href = "#";

    let elem = document.createElement("li");

    link.innerText = data.films[j].title;
    elem.appendChild(link);
    list.appendChild(elem);
    elem.addEventListener("click", function (event) {
      if (mainContainer.firstChild) {
        while (mainContainer.firstChild) {
          mainContainer.firstChild.remove();
        }
      }
      event.preventDefault();

      showInfo(j, sectionImg, sectionDescr);
    });
  }

  div.appendChild(list);
}

function showPerson(response, sectionImg, sectionDescr) {
  if (sectionImg.firstChild || sectionDescr.firstChild) {
    sectionImg.removeChild(sectionImg.firstChild);
    while (sectionDescr.firstChild) {
      sectionDescr.firstChild.remove();
    }
  }

  let divDescr = document.createElement("div");
  let button = document.createElement("button");
  let divImg = document.createElement("div");
  divImg.className = "divImg";

  if (response.length < 3) {
    divDescr.innerHTML = `<h1>El personaje no existe</h1>
    <br/>`;
    divImg.innerHTML = '<img src= "img/dragon.png "/> ';
    sectionImg.appendChild(divImg);
    sectionDescr.append(divDescr);
  } else {
    button.innerText = `conocer companeros de ${response[0].name} `;
    console.log(response[0].name);

    divDescr.innerHTML = `<h1>${response[0].name}</h1>
    <br/>
    <b>sexo: </b>${response[0].gender}
    <br/>
    <b>edad: </b>${response[0].age}
    <br/>
    <b>raza: </b>${response[0].specie}
    <br/>`;
    divImg.innerHTML = `<img src = "${response[0].img}"/>`;

    button.addEventListener("click", () => {
      showMore(response[1], response[2]);
    });
    sectionImg.appendChild(divImg);
    sectionDescr.append(divDescr, button);
  }
}

function showInfo(j, sectionImg, sectionDescr) {
  if (sectionImg.firstChild || sectionDescr.firstChild) {
    sectionImg.removeChild(sectionImg.firstChild);
    while (sectionDescr.firstChild) {
      sectionDescr.firstChild.remove();
    }
  }

  let divDescr = document.createElement("div");

  let button = document.createElement("button");
  button.innerText = "saber mas";

  divDescr.innerHTML = `<h1>${data.films[j].title}</h1>
    <br/>
    <p>${data.films[j].description}</p>
    <br/>
    <b>director: </b>${data.films[j].director}
    <br/>
    <b>ano: </b>${data.films[j].release_date}
    <br/>
    <b>puntaje: </b>${data.films[j].rt_score}
    <br/>`;

  let divImg = document.createElement("div");
  divImg.className = "divImg";

  divImg.innerHTML = `<img src = "${data.films[j].poster}"/>`;
  sectionImg.appendChild(divImg);

  sectionDescr.append(divDescr, button);

  button.addEventListener("click", () => {
    showMore(j);
  });
}

function showMore(j, i) {
  if (mainContainer.firstChild) {
    while (mainContainer.firstChild) {
      mainContainer.firstChild.remove();
    }
  }

  let showMoreSection = document.createElement("section");
  showMoreSection.className = "show-more-section";
  let sectionTitle = document.createElement("div");
  sectionTitle.className = "section-title";
  let sectionItemsWrapper = document.createElement("div");
  sectionItemsWrapper.className = "section-items-wrapper";
  sectionTitle.innerHTML = `<h1>"${data.films[j].title}" Personajes</h1>`;

  for (i = 0; i < data.films[j].people.length; i++) {
    let itemCard = document.createElement("div");
    itemCard.className = "item-card";
    let itemImg = document.createElement("div");
    itemImg.className = "item-img";
    let itemCardDescr = document.createElement("div");
    itemCardDescr.className = "item-card-descr";

    itemImg.innerHTML = `
          <img src= "${data.films[j].people[i].img}"/>
          <br/>`;

    itemCardDescr.innerHTML = `
          <b>nombre: </b>${data.films[j].people[i].name}
          <br/>
          <b>raza: </b>${data.films[j].people[i].specie}
          <br/>
          <b>sexo: </b>${data.films[j].people[i].gender}
          <br/>
          <b>edad: </b>${data.films[j].people[i].age}
          <br/>`;

    itemCard.append(itemImg, itemCardDescr);
    sectionItemsWrapper.append(itemCard);
    console.log(itemCard);
  }

  showMoreSection.append(sectionTitle, sectionItemsWrapper);

  let showMoreSection2 = document.createElement("section");
  showMoreSection2.className = "show-more-section";
  let sectionTitle2 = document.createElement("div");
  sectionTitle2.className = "section-title";
  let sectionItemsWrapper2 = document.createElement("div");
  sectionItemsWrapper2.className = "section-items-wrapper";

  sectionTitle2.innerHTML = `<h1>"${data.films[j].title}" Lugares</h1>`;

  for (i = 0; i < data.films[j].locations.length; i++) {
    let itemCard = document.createElement("div");
    itemCard.className = "item-card";
    let itemImg = document.createElement("div");
    itemImg.className = "item-img";
    let itemCardDescr = document.createElement("div");
    itemCardDescr.className = "item-card-descr";
    itemImg.innerHTML = `
          <img src= "${data.films[j].locations[i].img}"/>
          <br/>`;
    itemCardDescr.innerHTML = `
          <b>nombre: </b>${data.films[j].locations[i].name}          
          <br/>`;

    itemCard.append(itemImg, itemCardDescr);
    sectionItemsWrapper2.append(itemCard);
    console.log(itemCard);
  }
  showMoreSection2.append(sectionTitle2, sectionItemsWrapper2);
  mainContainer.append(showMoreSection, showMoreSection2);
}
