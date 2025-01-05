const API = 'AIzaSyALx1t9PTZDqfQS-iyXKQDNdxbjzEv6DKY';
let scrolls = [0, 342, 343, 344, 686, 687, 688, 1030, 1031, 1032, 1374, 1375, 1376, 1718, 1719, 1720, 2062, 2063, 2064, 2407, 2408]
let scrolls2 = [0, 342, 343, 344, 686, 687, 688, 1030, 1031, 1032, 1374, 1375, 1376, 1718, 1719, 1720, 2062, 2063, 2064, 2406, 2407, 2408, (2408+342),(2408+343), (2408+344), (2408+342+342),(2408+343+343), (2408+344+344), (2408+342+342+342),(2408+343+343+343), (2408+344+344+344)]


window.addEventListener("scroll", function () {
    if (this.scrollY > 98) {
        this.document.getElementsByClassName("home")[0].style.display = "block";
    } else {
        this.document.getElementsByClassName("home")[0].style.display = "none";
    }
})


document.getElementsByClassName("home")[0].style.display = "none";

fetchVideos(API, "OymDLjYbH3o", 1)
fetchVideos(API, "s8KKudBC2fQ", 2)
fetchVideos(API, "IwnzoGWs4Mg", 3)
fetchVideos(API, "0YtL5LvX6aQ", 4)
fetchVideos(API, "_7jjEw6visU", 5)
fetchVideos(API, "bVlyHaT_e_Q", 6)
fetchVideos(API, "h6UAEW00jSM", 7)
fetchVideos(API, "WAd2cQdDE1w", 8)


fetchVideos2(API, "e_pQaLmPZWs", 1)
fetchVideos2(API, "RDyPUQREBww", 2)
fetchVideos2(API, "a7aTyRPUv0k", 3)
fetchVideos2(API, "3XT-F9g0TLQ", 4)
fetchVideos2(API, "ARIf3Av47qU", 5)
fetchVideos2(API, "io6Qas9VWmY", 6)
fetchVideos2(API, "APxJh__bIQ8", 7)
fetchVideos2(API, "WAd2cQdDE1w", 8)
fetchVideos2(API, "", 9)
fetchVideos2(API, "bVlyHaT_e_Q", 10)
fetchVideos2(API, "IwnzoGWs4Mg", 11)
fetchVideos2(API, "s8KKudBC2fQ", 12)


function fetchVideos2(apiKey, videoId, id) {
    if (id != 9) {
        document.getElementById("e_latest_" + id).addEventListener("click", function () {
            document.location = "https://youtube.com/watch?v=" + videoId;
        })
    } else {
        document.getElementById("e_latest_9").addEventListener("click", function () {
            document.location = "https://scratch.mit.edu/projects/863918076"
        })
    }
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
    const views = data.items[0].statistics.viewCount;
    const likes = data.items[0].statistics.likeCount;
    document.getElementById('n-views-' + id).innerHTML = '<img src="..lib/views.png" id="view_logo" height="10" style="margin-right:10px">' + views;
    document.getElementById('n-likes-'+id).innerHTML = '<img src="..lib/likes.png" id="likes_logo" height="13" style="margin-right:10px; margin-left: 20px;">'  + likes;
        })
        .catch(error => console.error('Error:', error));
}

function fetchVideos(apiKey, videoId, id) {
    document.getElementById('views-' + id).innerHTML = '<img src="lib/views.png" id="view_logo" height="10" style="margin-right:10px">' + views;
    document.getElementById("latest_" + id).addEventListener("click", function () {
        document.location = "https://youtube.com/watch?v=" + videoId;
    })
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
    const views = data.items[0].statistics.viewCount;
    const likes = data.items[0].statistics.likeCount;
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

function DscrollNext() {
    if (scrolls2.includes(document.getElementsByClassName("video_section")[0].scrollLeft)) {
        document.getElementsByClassName("video_section")[0].scrollLeft += 344;
    }
}

function DscrollPrevious() {
    if (scrolls2.includes(document.getElementsByClassName("video_section")[0].scrollLeft)) {
        document.getElementsByClassName("video_section")[0].scrollLeft -= 344;
    }
}

function SscrollNext() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[1].scrollLeft)) {
        document.getElementsByClassName("video_section")[1].scrollLeft += 344;
    }
}

function SscrollPrevious() {
    if (scrolls.includes(document.getElementsByClassName("video_section")[1].scrollLeft)) {
        document.getElementsByClassName("video_section")[1].scrollLeft -= 344;
    }
}