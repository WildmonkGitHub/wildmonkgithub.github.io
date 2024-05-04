
// Add projects to 'My Scratch Projects'

const projects = document.getElementById("projects");
const videos = document.getElementById("videos");

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

addProjects("https://scratch.mit.edu/projects/984298414/", "https://uploads.scratch.mit.edu/get_image/project/984298414_846x630.png", "YouTube Tutorials be like");

addProjects("https://scratch.mit.edu/projects/853243007/", "https://uploads.scratch.mit.edu/get_image/project/853243007_440x330.png", "Nano dumb jokes");

addProjects("https://scratch.mit.edu/projects/839503951/", "https://uploads.scratch.mit.edu/get_image/project/839503951_440x330.png", "Mr. Cursor");

addProjects("https://scratch.mit.edu/projects/839505254/", "https://uploads.scratch.mit.edu/get_image/project/839505254_440x330.png", "MouseHeadz but no glasses");

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

addVideos("https://www.youtube.com/watch?v=ARIf3Av47qU", "https://uploads.scratch.mit.edu/get_image/project/839376992_440x330.png", "Once upon a time...")

addVideos("https://www.youtube.com/watch?v=gjdNbsobPyU", "https://uploads.scratch.mit.edu/get_image/project/785044441_432x324.png", "Edward lose in Tic Tac Toe")

addVideos("https://www.youtube.com/watch?v=l2TkF-MMZ7s", "https://uploads.scratch.mit.edu/get_image/project/809681205_432x324.png", "Edward and Oliver Game Review")

addVideos("https://www.youtube.com/watch?v=LSq1euT_DfU", "https://uploads.scratch.mit.edu/get_image/project/739621967_432x324.png", "If MouseHeadz were glasses")