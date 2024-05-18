// Not a real assembler

// This is a JavaScript code where we add normal scripts.

const date = new Date()
const grade = ["", "", "", "", "", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Age;

function age() {
    if (date.getDate() > 26 | date.getMonth() > 1) {
        Age = date.getFullYear() - 2012
    } else {
        Age = (date.getFullYear() - 2012) - 1
    }
    return Age
}

var prevScrollpos = 42;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollpos) {
    document.getElementById("b2").style.position = "fixed"
    document.getElementById("b2").style.top = "0px";
    document.getElementById("projectsmenu").style.position = "fixed"
    document.getElementById("projectsmenu").style.top = "45px";
    document.getElementById("settingsmenu").style.position = "fixed"
    document.getElementById("settingsmenu").style.top = "45px";
  } else {
    document.getElementById("b2").style.position = "absolute"
    document.getElementById("b2").style.top = "40px";
    document.getElementById("projectsmenu").style.position = "absolute"
    document.getElementById("projectsmenu").style.top = "90px";
    document.getElementById("settingsmenu").style.position = "absolute"
    document.getElementById("settingsmenu").style.top = "90px";
  }
}

document.getElementById("age").innerHTML = age()
const al = document.getElementById("projectsmenu")

function applyProject() {
    if (al.style.display == "none") {
        al.style.display = "block";
        sl.style.display = "none";
    } else {al.style.display = "none";}
}

const sl = document.getElementById("settingsmenu")

function applySettings() {
    if (sl.style.display == "none") {
        sl.style.display = "block";
        al.style.display = "none";
    } else {sl.style.display = "none";}
}