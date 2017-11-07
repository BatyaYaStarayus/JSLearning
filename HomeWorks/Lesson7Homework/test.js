var tableBody = document.querySelector("tbody");
var count = 0;


function setColorOnClick() {
    checkColoredCells();
    this.style.backgroundColor = "red";
    count++;
}

function checkColoredCells() {
    if (count >= 5) {
        alert("Enough!");
        tableBody.children[i].children[j].removeEventListener("click", setColorOnClick);

    }
}



for (var i = 0; i < tableBody.children.length; i++) {
    for(var j = 0; j < tableBody.children[i].children.length; j++) {
        tableBody.children[i].children[j].addEventListener("click", setColorOnClick);
    }
}