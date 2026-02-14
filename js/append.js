// 1. parent node
const mainContainer = document.getElementById("main-container");

// 2. create child
const placesSection = document.createElement("section");

// create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placesSection.appendChild(h1);

// create p
const p = document.createElement("p");
p.innerText = "This is my paragraph";
placesSection.appendChild(p);

// create UL

const ul = document.createElement("ul");
placesSection.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.innerText = "Bandarban";
li2.innerText = "Noakhali";
ul.appendChild(li1);
ul.appendChild(li2);

// 3. append placesSection to the mainContainer
mainContainer.appendChild(placesSection);

// easier to create HTML
const booksSection = document.createElement("section");
booksSection.innerHTML = `
 <h1>Books I need to read </h1>
 <ul>
  <li>Physics</li>
  <li>Chemistry</li>
</ul>
`
mainContainer.appendChild(booksSection);
