/* This code belongs to navbar in my website,
According to this code, If we have to write something in head we will use module for that:

    <script type="module">
        import hd1 from "./wildmonk.navbar.js";
            // hd1.innerHTML = [text here]
    </script>
    
    Also remember to #include
        <link rel="stylesheet" href="wildmonk.navbar.css">
        <script src="wildmonk.navbar.js"></script>

*/

const c1=document.createElement("center");const b1=document.createElement("span");const hd1=document.createElement("span");const a1=document.createElement("a");const b2=document.createElement("span");const b3=document.createElement("span");const hd2=document.createElement("span");const hd22=document.createElement("span");const hd23=document.createElement("span");const menu1=document.createElement("span");const menu2=document.createElement("span");const hd3=document.createElement("span");const hd33=document.createElement("span");b1.id="b1";hd1.id="hd-1";a1.href="https://wildmonkgithub.github.io";hd1.style="font-size: 16px;";b2.id="b2";hd2.id="hd-2";hd2.innerHTML="Home";hd22.id="hd-2";hd23.id="hd-2";hd2.style="font-size: 16px; text-align:center;";hd22.style="font-size: 16px; text-align:center;";hd22.addEventListener("click", applyProject);hd22.innerHTML="Projects <i class='fa fa-caret-down'></i>";hd23.style="font-size: 16px; text-align:center;";hd23.addEventListener("click", applySettings);hd23.innerHTML="Settings <i class='fa fa-caret-down'></i>";menu1.id="projectsmenu";menu1.style="display: none;";menu2.id="settingsmenu";menu2.style="display: none;";hd3.id="hd-3";hd3.style="font-size:16px; text-align:center;";hd3.innerHTML="Updates";hd3.addEventListener("click",function(){document.location='updates.html';});hd33.innerHTML="Enable Dark mode";hd33.addEventListener("click", function() {alert('Coming soon...');});document.body.appendChild(c1);c1.appendChild(b1);b1.appendChild(hd1);document.body.appendChild(b2);b2.appendChild(b3);b3.appendChild(a1);a1.appendChild(hd2);b3.appendChild(hd22);b3.appendChild(hd23);document.body.appendChild(menu1);menu1.appendChild(hd3);document.body.appendChild(menu2);menu2.appendChild(hd33);var prevScrollpos=42;window.onscroll=function() {var currentScrollPos=window.pageYOffset;if(currentScrollPos > prevScrollpos){document.getElementById("b2").style.position="fixed";document.getElementById("b2").style.top="0px";document.getElementById("projectsmenu").style.position="fixed";document.getElementById("projectsmenu").style.top="45px";document.getElementById("settingsmenu").style.position="fixed";document.getElementById("settingsmenu").style.top="45px";}else{document.getElementById("b2").style.position="absolute";document.getElementById("b2").style.top="40px";document.getElementById("projectsmenu").style.position="absolute";document.getElementById("projectsmenu").style.top="90px";document.getElementById("settingsmenu").style.position="absolute";document.getElementById("settingsmenu").style.top="90px";}};const al=document.getElementById("projectsmenu");function applyProject() {if (al.style.display == "none") {al.style.display="block";sl.style.display="none";} else {al.style.display="none";}}const sl=document.getElementById("settingsmenu");function applySettings(){if (sl.style.display == "none") {sl.style.display="block";al.style.display="none";} else {sl.style.display="none";}}export default hd1;