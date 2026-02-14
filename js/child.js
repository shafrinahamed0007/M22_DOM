// console.log("Connected Child JS");

// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode

// create element and set innerText or innerHTML
const newChild  = document.createElement('li');
newChild.innerText = "New Born Footballer here";

// find the parent where you will add the child

const playerList = document.getElementById("players-list");

// append the child to the parent
playerList.appendChild(newChild);
