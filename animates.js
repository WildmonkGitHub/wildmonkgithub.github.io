const lion = document.getElementById("logo-w");
const opt = document.getElementById("opt1")

function changePhoto() {
    lion.src = "./lib/redlion.png";
}

function resetphoto() {
    lion.src = "./lib/lion.jpeg";
}

function displaymedia() {
    opt.style = "transition: 0.5s; margin-left: 0px;"
}

document.onclick = function () {opt.style = "transition: 0.5s; margin-left: -900px;"}