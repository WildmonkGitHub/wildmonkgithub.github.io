const API = 'AIzaSyALx1t9PTZDqfQS-iyXKQDNdxbjzEv6DKY';

fetchVideos(API, "OymDLjYbH3o", 1)
fetchVideos(API, "s8KKudBC2fQ", 2)
fetchVideos(API, "IwnzoGWs4Mg", 3)
fetchVideos(API, "0YtL5LvX6aQ", 4)
fetchVideos(API, "_7jjEw6visU", 5)
fetchVideos(API, "bVlyHaT_e_Q", 6)
fetchVideos(API, "h6UAEW00jSM", 7)
fetchVideos(API, "WAd2cQdDE1w", 8)

function fetchVideos(apiKey, videoId, id) {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
    const views = data.items[0].statistics.viewCount;
    const likes = data.items[0].statistics.likeCount;
    document.getElementById('views-' + id).innerHTML = '<img src="lib/views.png" id="view_logo" height="10" style="margin-right:10px">' + views;
    document.getElementById("latest_" + id).addEventListener("click", function () {
        document.location = "https://youtube.com/watch?v=" + videoId;
    })
    document.getElementById('likes-'+id).innerHTML = '<img src="lib/likes.png" id="likes_logo" height="13" style="margin-right:10px; margin-left: 20px;">'  + likes;
        })
        .catch(error => console.error('Error:', error));
}

fetchChannel(API, "UCR6VFzttmTuMssygnUcLzfA")
fetchChannel2(API, "UCBtR0gm2mwNjvWjpx50z6EQ")

function fetchChannel(apiKey, channelId) {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
    const views = data.items[0].statistics.subscriberCount;
    document.getElementById("subscribers").innerHTML = views + " subscribers";
        })
        .catch(error => console.error('Error:', error));
}

function fetchChannel2(apiKey, channelId) {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
    const views = data.items[0].statistics.subscriberCount;
    document.getElementById("subscribers-2").innerHTML = views + " subscribers";
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById("subscribe_button").addEventListener("click", function () {
    document.location = "https://youtube.com/channel/UCR6VFzttmTuMssygnUcLzfA";
})

document.getElementById("subscribe_button-2").addEventListener("click", function () {
    document.location = "https://youtube.com/channel/UCBtR0gm2mwNjvWjpx50z6EQ";
})

document.getElementsByClassName("home")[0].style.display = "none";

window.addEventListener("scroll", function () {
    if (this.scrollY > 98) {
        this.document.getElementsByClassName("home")[0].style.display = "block";
    } else {
        this.document.getElementsByClassName("home")[0].style.display = "none";
    }
})

projects("https://scratch.mit.edu/projects/1059864143/", 1)
projects("https://scratch.mit.edu/projects/1059875039/", 2)
projects("https://scratch.mit.edu/projects/1089570259/", 3)
projects("https://scratch.mit.edu/projects/1097700059/", 4)
projects("https://scratch.mit.edu/projects/1102811282/", 5)
projects("https://scratch.mit.edu/projects/1103448328/", 6)
projects("https://scratch.mit.edu/projects/1105809700/", 7)
projects("https://scratch.mit.edu/projects/1107017418/", 8)

function projects(projectId, id) {
    document.getElementById("a_latest_" + id).addEventListener("click", function () {
    document.location = projectId;
})
}

Sprojects("https://scratch.mit.edu/projects/944951457/", 1)
Sprojects("https://scratch.mit.edu/projects/863918076/", 2)
Sprojects("https://scratch.mit.edu/projects/839528661/", 3)
Sprojects("https://scratch.mit.edu/projects/821918108/", 4)
Sprojects("https://scratch.mit.edu/projects/811094818/", 5)
Sprojects("https://scratch.mit.edu/projects/781204175/", 6)
Sprojects("https://scratch.mit.edu/projects/695801765/", 7)
Sprojects("https://scratch.mit.edu/projects/695231398/", 8)

function Sprojects(projectId, id) {
    document.getElementById("s_latest_" + id).addEventListener("click", function () {
    document.location = projectId;
})
}

let scrolls = [0, 342, 343, 344, 686, 687, 688, 1030, 1031, 1032, 1374, 1375, 1376, 1718, 1719, 1720, 2062, 2063, 2064, 2407, 2408]

function scrollNext() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[0].scrollLeft)) {
        document.getElementsByClassName("video_section")[0].scrollLeft += 344;
    }
}

function scrollPrevious() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[0].scrollLeft)) {
        document.getElementsByClassName("video_section")[0].scrollLeft -= 344;
    }
}

function AscrollNext() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[1].scrollLeft)) {
        document.getElementsByClassName("video_section")[1].scrollLeft += 344;
    }
}

function AscrollPrevious() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[1].scrollLeft)) {
        document.getElementsByClassName("video_section")[1].scrollLeft -= 344;
    }
}

function SscrollNext() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[2].scrollLeft)) {
        document.getElementsByClassName("video_section")[2].scrollLeft += 344;
    }
}

function SscrollPrevious() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[2].scrollLeft)) {
        document.getElementsByClassName("video_section")[2].scrollLeft -= 344;
    }
}