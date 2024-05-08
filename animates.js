const lion = document.getElementById("logo-w");
const opt = document.getElementById("opt1")
let opener = 0;

function changePhoto() {
    lion.src = "./lib/redlion.png";
}

function resetphoto() {
    lion.src = "./lib/lion.jpeg";
}


function showmedia() {
    if (opener == 0) {
        opt.style = "transition: 0.5s; margin-left: 0px;"
        opener = 1
    } else {
        opener = 0
        opt.style = "transition: 0.5s; margin-left: -900px;"
    }
}