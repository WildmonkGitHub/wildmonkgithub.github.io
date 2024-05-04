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

document.getElementById("age").innerHTML = age()
