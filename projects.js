
// Add projects to 'My Scratch Projects'

const projects = document.getElementById("projects");
const videos = document.getElementById("videos");
const videosAB = document.getElementById("videos-a");

function addProjects(link, imglink, text) {
    let i;
    let s;
    let t;
    s = document.createElement("span")
    i = document.createElement("img")
    t = document.createElement("p")
    i.className = "scratchproject"
    i.height = 200;
    i.title = text;
    i.onclick = function() {document.location = link;};
    i.src = imglink;
    t.style = "font-weight: 800;";
    t.innerHTML = text;
    s.style = "display: inline-block; margin-right: 20px;"

    projects.appendChild(s);
    s.appendChild(i);
    s.appendChild(t);
}

addProjects("https://scratch.mit.edu/projects/1077545562/", "https://uploads.scratch.mit.edu/get_image/project/1077545562_440x330.png", "Pico and the Suspicious Stew");

addProjects("https://scratch.mit.edu/projects/670871895/", "https://uploads.scratch.mit.edu/get_image/project/670871895_432x324.png", "Pico's Grammar Mistake");

addProjects("https://scratch.mit.edu/projects/729027411/", "https://uploads.scratch.mit.edu/get_image/project/729027411_432x324.png", "What happens when MouseHeadz get...");

addProjects("https://scratch.mit.edu/projects/863918076/", "https://uploads.scratch.mit.edu/get_image/project/863918076_432x324.png", "Scratch Minecraft Survival Series");

function addVideos(link, imglink, text) {
    let i;
    let s;
    let t;
    s = document.createElement("span")
    i = document.createElement("img")
    t = document.createElement("p")
    i.className = "youtubevideo"
    i.height = 200;
    i.title = text;
    i.onclick = function() {document.location = link;};
    i.src = imglink;
    t.style = "font-weight: 800;";
    t.innerHTML = text;
    s.style = "display: inline-block; margin-right: 20px;"

    videos.appendChild(s);
    s.appendChild(i);
    s.appendChild(t);
}

addVideos("https://www.youtube.com/watch?v=bVlyHaT_e_Q", "https://uploads.scratch.mit.edu/get_image/project/1060606026_440x330.png", "Scratch Cat and his talking tail")

addVideos("https://www.youtube.com/watch?v=IwnzoGWs4Mg", "https://uploads.scratch.mit.edu/get_image/project/1077547209_432x324.png", "What if MouseHeadz drank WRONG POTI...")

addVideos("https://www.youtube.com/watch?v=_7jjEw6visU", "https://uploads.scratch.mit.edu/get_image/project/1077545295_440x330.png", "Edward teaches Kemistree!?")

addVideos("https://www.youtube.com/watch?v=xsGDyLXURJg", "https://uploads.scratch.mit.edu/get_image/project/642767709_432x324.png", "What happens when Math hater...")

function addVideosA(link, imglink, text) {
    let i;
    let s;
    let t;
    s = document.createElement("span")
    i = document.createElement("img")
    t = document.createElement("p")
    i.className = "youtubevideo"
    i.height = 200;
    i.title = text;
    i.onclick = function() {document.location = link;};
    i.src = imglink;
    t.style = "font-weight: 800;";
    t.innerHTML = text;
    s.style = "display: inline-block; margin-right: 20px;"

    videosAB.appendChild(s);
    s.appendChild(i);
    s.appendChild(t);
}

addVideosA("https://www.youtube.com/watch?v=1dy-blqvGWE", "https://uploads.scratch.mit.edu/get_image/project/1059875039_846x630.png", "Gobo got an ENDER PEARL")