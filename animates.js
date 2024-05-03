const wl1 = document.getElementsByClassName("wildicon");
const txt = document.getElementsByClassName("txticon");
const para = document.getElementsByClassName("txtpara");
let run = 1;

function expand1() {
    const pl1 = document.getElementById("pngicon1");
    txt[0].style = "margin-left: 45%; margin-top: -35%;"
    para[0].style = "margin-left: 45%; margin-top: -5%;"
    wl1[0].style = "left: 10px; width: 67vb; padding-right: 40px;"
    pl1.style = "margin-top: 4%; margin-left: 5%;"
    document.getElementById("page").style = "margin-left: 40%;"
}

function expand2() {
    if (run == 1) {
        const pl2 = document.getElementById("pngicon2");
        txt[1].style = "margin-left: 45%; margin-top: -35%;"
        para[1].style = "margin-left: 45%; margin-top: -5%;"
        wl1[1].style = "left: 10px; width: 67vb; padding-right: 40px;"
        pl2.style = "margin-top: 4%; margin-left: 5%;"
        document.getElementById("page").style = "margin-left: 40%;"
        run = 0
    }
}

function expand3() {
    const pl3 = document.getElementById("pngicon3");
    txt[2].style = "margin-left: 45%; margin-top: -35%;"
    para[2].style = "margin-left: 45%; margin-top: -5%;"
    wl1[2].style = "left: 10px; width: 67vb; padding-right: 40px;"
    pl3.style = "margin-top: 4%; margin-left: 5%;"
    document.getElementById("page").style = "margin-left: 40%;"
}

function leave1() {
    const pl1 = document.getElementById("pngicon1");

    wl1[0].style = "left: -50px;"
    txt[0].style = "margin-left: -150%;"
    para[0].style = "margin-left: -500%;"
    pl1.style = "margin-top:8%; margin-left: 25%;"
    document.getElementById("page").style = "margin-left: 50vb;"
}

function leave3() {
    const pl3 = document.getElementById("pngicon3");

    wl1[2].style = "left: -50px;"
    txt[2].style = "margin-left: -150%;"
    para[2].style = "margin-left: -500%;"
    pl3.style = "margin-top:8%; margin-left: 25%;"
    document.getElementById("page").style = "margin-left: 50vb;"
}

function leave2() {
    const pl2 = document.getElementById("pngicon2");
    run = 1

    wl1[1].style = "left: -50px;"
    txt[1].style = "margin-left: -150%;"
    para[1].style = "margin-left: -500%;"
    pl2.style = "margin-top:8%; margin-left: 25%;"
    document.getElementsByTagName("table")[0].style = "margin-left: -8000px;"
    document.getElementById("page").style = "margin-left: 50vb;"
    wl1[2].style = "margin-top: 0;"
}

function stalks() {
    document.getElementsByTagName("table")[0].style = "margin-left: 0px;"
    wl1[1].style = "height: 300px; width: 76vb; left: 30px;"
    txt[1].style = "margin-top: -30%; margin-left: 40%;"
    para[1].style = "margin-left: 40%; margin-top: -5%; padding-left: -50px;"
    wl1[2].style = "margin-top: 10%;"
}