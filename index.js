let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
];

const dataPanel = document.querySelector("#data-panel");

// write your code here

//Since the order of object properties is not guranteed,
//we need to use array to keep it.
let keysInOrder = ["name", "pts", "reb", "ast", "stl", "blk"];

function displayPlayerList(playersArray) {
  for (let playerIdx in playersArray) {
    let player = playersArray[playerIdx];
    let newRow = document.createElement("tr");
    for (let keyIdx in keysInOrder) {
      let newCell = document.createElement("td");
      let keyName = keysInOrder[keyIdx];
      let value = player[keyName];
      let textNode = document.createTextNode(value);
      newCell.appendChild(textNode);
      if (keysInOrder[keyIdx] !== "name") {
        newCell.appendChild(createButton(true));
        newCell.appendChild(createButton(false));
      }
      newRow.appendChild(newCell);
    }
    dataPanel.appendChild(newRow);
  }
}

function createButton(isPlus) {
  let button = document.createElement("i");
  if (isPlus === true) {
    button.className = "fa fa-plus-circle";
  } else {
    button.className = "fa fa-minus-circle";
  }
  button.addEventListener("click", updateText);
  return button;
}

function calculate(isPlus, number) {
  if (isPlus === true) {
    return ++number;
  } else if (number <= 0) {
    return 0;
  } else {
    return --number;
  }
}

function updateText(event) {
  console.log(event.target.parentElement.firstChild.textContent);
  if (event.target.className === "fa fa-plus-circle") {
    event.target.parentElement.firstChild.textContent =
      calculate(true, event.target.parentElement.firstChild.textContent);
  } else {
    event.target.parentElement.firstChild.textContent =
      calculate(false, event.target.parentElement.firstChild.textContent);
  }
}

displayPlayerList(players);
