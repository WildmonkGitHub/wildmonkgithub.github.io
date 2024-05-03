const main = document.body
    main.style.backgroundColor = "black"

const framebox = document.createElement("div")
    framebox.style.height="50vb"
    framebox.style.width="100%"
    framebox.style.backgroundColor="rgb(31, 31, 31)"
    framebox.style.position="absolute"
    framebox.style.top = "0px"
    framebox.style.left = "0px"
    framebox.style.boxShadow="2px 2px 2px 2px rgba(104, 104, 104, 0.479)"

    main.appendChild(framebox)

const logo = document.createElement("img")
    logo.src="./lib/lion.jpeg"
    logo.style.height="35vb"
    framebox.appendChild(logo)