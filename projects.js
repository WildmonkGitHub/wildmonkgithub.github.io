const tablepro = document.getElementById("scrpro");
const trpro = document.getElementById("trpro");

let cap;
let image;
let col;

function addprojects(caption, source, column, link) {
    cap = document.createElement("p")
    cap.innerHTML = caption
    cap.style = "text-align: center; font-weight: 500;"

    image = document.createElement("img")
    image.src = source;
    image.className = "scrprojects"
    image.title = caption;
    image.height = "200"
    image.onclick = function () {
        document.location=(link)
    }

    if (column == 1) {
        col = document.createElement("td")
        trpro.appendChild(col)
        col.appendChild(image)
        col.appendChild(cap)
    }
}

addprojects("YouTube Tutorials be like", "https://uploads.scratch.mit.edu/get_image/project/984298414_846x630.png", 1, "https://scratch.mit.edu/projects/984298414/")

addprojects("Level Editor v0.1", "https://uploads.scratch.mit.edu/get_image/project/944951457_440x330.png", 1, "https://scratch.mit.edu/projects/944951457/")

addprojects("Scratch Minecraft Survival Series - Ep 1", "https://uploads.scratch.mit.edu/get_image/project/863918076_440x330.png", 1, "https://scratch.mit.edu/projects/863918076/")

const ytpro = document.getElementById("ytpro");
const youpro = document.getElementById("youpro");

function addvideo(caption, source, thumbnail, column, link) {
    cap = document.createElement("p")
    cap.innerHTML = caption
    cap.style = "text-align: center; font-weight: 500;"

    image = document.createElement("img")
    image.src = thumbnail;
    image.className = "scrprojects"
    image.title = caption;
    image.height = "200"
    image.onclick = function () {
        document.location=(link)
    }
    image.onmouseover = function() {
        let c = setTimeout(showrun, 3000)
        function showrun() {
            image.src = source;
        }
    }
    image.onmouseleave = function() {
        image.src = thumbnail;
        clearTimeout(c)
    }

    if (column == 1) {
        col = document.createElement("td")
        youpro.appendChild(col)
        col.appendChild(image)
        col.appendChild(cap)
    }
}

addvideo("MouseHeadz but no glasses", "https://i.ytimg.com/an_webp/h6UAEW00jSM/mqdefault_6s.webp?du=3000&sqp=CMiVhbEG&rs=AOn4CLDkurAKjWH938UAcEPR1Sj314DUGg", "https://uploads.scratch.mit.edu/get_image/project/839505254_440x330.png", 1, "https://www.youtube.com/watch?v=h6UAEW00jSM")

addvideo("Nano dumb jokes", "https://i.ytimg.com/an_webp/APxJh__bIQ8/mqdefault_6s.webp?du=3000&sqp=CNuJhbEG&rs=AOn4CLAYJZsNhBUcklmg8R0SRE3gDUKuCg", "https://uploads.scratch.mit.edu/get_image/project/853243007_440x330.png", 1, "https://www.youtube.com/watch?v=APxJh__bIQ8")