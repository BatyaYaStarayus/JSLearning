function getRandomColorInRGB() {

    var colorsArray = [];
    var randomColor;

    for (var i = 0; i < 3; i++) {
        var randomColorPart = Math.floor((Math.random() * 255) + 1);
        colorsArray.push(randomColorPart);
    }

    randomColor = "(" + colorsArray.join(",") + ")";

    return randomColor;

}

function getRandomChar() {

    var randomString = Math.random().toString(36);
    var randomStringWithoutNumbers = randomString.replace(/[0-9][.]/g, "").slice(1);
    var randomChar = randomStringWithoutNumbers.charAt((Math.random() * randomStringWithoutNumbers.length) + 1 );

    return randomChar
}

function createTable(n, m) {

    var table = document.createElement("table");
    document.body.appendChild(table);

    for (var i = 0; i < n; i++) {

        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < m; j++) {
            var td = document.createElement("td");

            td.setAttribute("bgcolor", getRandomColorInRGB());
            td.innerText = getRandomChar();

            tr.appendChild(td);
        }
    }
}

createTable(8, 8);