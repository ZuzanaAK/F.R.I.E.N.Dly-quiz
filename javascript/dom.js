// target body
let body = document.querySelector("body")

// target splash screen
let splashScreen = document.querySelector("#splash")

// create the canvas tag element
// createElement
let canvasContainer = document.createElement("div")
canvasContainer.innerHTML = `<canvas width="600" height="600"></canvas>`

// add a class

// target button
let startBtn = document.querySelector("#start-btn")

// addEventListener for the start button
// the button will remove splash screen and insert canvas

let canvas;
  startBtn.addEventListener("click", () => {
    // remove the splash
    splashScreen.parentNode.removeChild(splashScreen)
    // insert the canvas
    body.appendChild(canvasContainer)
    canvas = document.querySelector("canvas")
    canvas.style.backgroundColor = "lightblue"
  
    addChandler ()
})


let board = ""

function addChandler () {
    let ctx = canvas.getContext("2d")
    let board = new Image()
    board.src = "../resources/images/Chandler.jpg"
    ctx.drawImage(board, 0, 0 )
}












