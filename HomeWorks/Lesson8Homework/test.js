var image = document.querySelector("img");
var framesCounter = 1;

function startAnimation() {
    image.src = "Frames/Frame" + framesCounter + ".png";

    if(framesCounter === 6) {
        framesCounter = 1;
    } else {
        framesCounter++;
    }
}

setInterval(startAnimation, 200);