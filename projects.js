
// Add projects to 'My Scratch Projects'

const projects = document.getElementById("projects");

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
    i.onclick = "document.location = './looks.css'";
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

addProjects("https://scratch.mit.edu/projects/984298414/", "https://uploads.scratch.mit.edu/get_image/project/984298414_846x630.png", "YouTube Tutorials be like");

addProjects("https://scratch.mit.edu/projects/853243007/", "https://uploads.scratch.mit.edu/get_image/project/853243007_440x330.png", "Nano dumb jokes");