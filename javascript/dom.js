// target body
let body = document.querySelector("body")
// target splash screen
let splashScreen = document.querySelector("#splash")
// create the canvas tag element
// createElement
let canvasContainer = document.createElement("div")
canvasContainer.innerHTML = `<canvas width="600" height="600"></canvas>`
// target button
let startBtn = document.querySelector("#start-btn")

// addEventListener for the start button
// the button will remove splash screen and insert canvas


let canvas, ctx;
let showQuestion = true;
let score = 0;
let questionObj= {}
let intervalId = 0;

function renderGame(){
  intervalId = setInterval (()=> { 
    
    ctx.clearRect(0,0,600,600)
    addDoorFrame ()
    addJoyEatingPizza ()
    addPizzaSlice ()
    addRoss ()
    addPhoebe ()
    addChandler ()
    addMonica ()
    addJoey ()
    addRachel ()
    if (showQuestion) {
      console.log(questionObj.question)
      drawQuestion (questionObj.question)
    }
  
 }, 50)
}



  startBtn.addEventListener("click", () => {
    // remove the splash
   questionObj = pickQuestion()
    splashScreen.parentNode.removeChild(splashScreen)
    // insert the canvas
    body.appendChild(canvasContainer)
    canvas = document.querySelector("canvas")
    canvas.style.backgroundColor = "#CA96F5"
    ctx = canvas.getContext("2d")
    //add clearRect inside the interval
    //newSound() //- not in the setInterval 
    renderGame()
    
})

let myMusic;

/*function newSound() {
  myMusic = new Audio("../resources/cut_smelly_cat.mp3")
  myMusic.play();
} //0. property changing the volume
*/
let board = ""

function addDoorFrame () {

    let ctx = canvas.getContext("2d")
    let board = new Image()
    board.src = "../resources/images/board_frame02.png"
    ctx.drawImage(board, 105, 65 )

}

let joyEatingPizza = ""

function addJoyEatingPizza () {

  let ctx = canvas.getContext("2d")
  let joyEatingPizza = new Image()
  joyEatingPizza.src = "../resources/images/joey_eating_pizza01.jpg"
  ctx.drawImage(joyEatingPizza, 7, 493 )

}

let pizzaSlice = ""
// let intervalId = 0;
let pizzaX = 6;
let pizzaY = 0;
let pizzaIncrement = 1;

function addPizzaSlice () {

  // setInterval (()=> {

  let ctx = canvas.getContext("2d")
  let pizzaSlice = new Image()
  pizzaSlice.src = "../resources/images/pizza_slice.png"
  ctx.drawImage(pizzaSlice, pizzaX, pizzaY )
 
  pizzaY+=pizzaIncrement

  if (pizzaY === 500) {
    //go to the screen GAME OVER
    showQuestion = false
  } 
  
// }, 300)  
}


// ADDING ALL THE CHARACTERS

let ross = ""

function addRoss () {

  let ctx = canvas.getContext("2d")
  let ross = new Image()
  ross.src = "../resources/images/Ross01.jpg"
  ctx.drawImage(ross, 499, 07 )

}

let phoebe = ""

function addPhoebe () {

  let ctx = canvas.getContext("2d")
  let phoebe = new Image()
  phoebe.src = "../resources/images/Phoebe02.png"
  ctx.drawImage(phoebe, 499, 107 )

}

let chandler = ""

function addChandler () {

  let ctx = canvas.getContext("2d")
  let chandler = new Image()
  chandler.src = "../resources/images/Chandler01.jpg"
  ctx.drawImage(chandler, 499, 207 )

}

let monica = ""

function addMonica () {

  let ctx = canvas.getContext("2d")
  let monica = new Image()
  monica.src = "../resources/images/Monica01.jpg"
  ctx.drawImage(monica, 499, 307 )

}

let joey = ""

function addJoey () {

  let ctx = canvas.getContext("2d")
  let joey = new Image()
  joey.src = "../resources/images/Joey01.jpg"
  ctx.drawImage(joey, 499, 407 )

}

let rachel = ""

function addRachel () {

  let ctx = canvas.getContext("2d")
  let rachel = new Image()
  rachel.src = "../resources/images/Rachel01.jpg"
  ctx.drawImage(rachel, 499, 507 )

}

//GET MOUSE COORDINATES
function getMousePosition(canvas, event) {

  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
  console.log("Coordinate x: " + x,  
              "Coordinate y: " + y); 
  let imageName = getCoordinates(x, y)
  answerDetermine(imageName)
} 

canvasContainer.addEventListener("mousedown", function(e) 
{ 
  getMousePosition(canvasContainer, e); 
}); 


let positon = ""

function getCoordinates (x, y) {
    
  if ((x > 499 && x < 593) && (y > 7 && y < 102 )) {
    position =  "Ross"
  } else if ((x > 499 && x < 593) && (y > 107 && y < 200)) {
    position =  "Phoebe"
  } else if ((x> 499 && x < 593) && (y > 207 && y < 300)) {
    position =  "Chandler"
  } else if ((x> 499 && x < 593) && (y > 307 && y < 400)) {
    position =  "Monica"
  } else if ((x> 499 && x < 593) && (y > 407 && y < 500)) {
    position =  "Joey"
  } else if ((x> 499 && x < 593) && (y > 507 && y < 600)) {
    position =  "Rachel"
    //else do nothing, position + " "?? 
  }
    return position  
}

//QUESTIONS
const questions = [
  {question: "Who got sick after eating tacos?", 
  solution: "Ross"},
  {question: "Who said: 'physical act of love?'",
  solution: "Ross"},
  {question: "Julie was a girlfriend of?",
  solution: "Ross"},
  {question: "Who was dating a diplomat?",
  solution: "Phoebe"},
  {question: "Who found a thumb in a soda can?",
  solution: "Phoebe"},
  {question: "Who tried to teach Joey French?",
  solution: "Phoebe"},
  {question: "Janice and ...?",
  solution: "Chandler"},
  {question: "Who doesn't like dogs?",
  solution: "Chandler"},
  {question: "The one with ... in a box.",
  solution: "Chandler"},
  {question: "Who was working in the 1950's dinner?",
  solution: "Monica"},
  {question: "Who kissed Timothy?",
  solution: "Monica"},
  {question: "Who got Porsche as a gift?",
  solution: "Monica"},
  {question: "Who is Ken Adams?",
  solution: "Joey"},
  {question: "Days of Our Lives",
  solution: "Joey"},
  {question: "Who doesn't share their food?",
  solution: "Joey"},
  {question: "Gunther was in love with ..?",
  solution: "Rachel"},
  {question: "Who was dating Tag?",
  solution: "Rachel"},
  {question: "Who has Barneys on speed dial?",
  solution: "Rachel"},
]

function answerDetermine (answer) {
  if (answer == questionObj.solution) {
    score += 10
    console.log("YAY")
    questionObj = pickQuestion()
    clearInterval(intervalId)
    pizzaY = 0
    renderGame()

    // SPLICE THE QUESTIONS SO THAT IT GETS DELETED 
    
  }
  else {
    console.log('GAME OVER')
  }
  
}

//random question picker

function pickQuestion() {

  let index = getRandomQuestion(questions)

  let pickedQuestion = questions[index];
  return pickedQuestion
}

function getRandomQuestion(array) {
  return Math.floor(Math.random() * array.length)
}

//draw question

function drawQuestion(question) {
 // let ctx = canvas.getContext("2d")
  ctx.font = "20px cursive"
  ctx.fillStyle = "#EDD00C";
  //console.log(pickQuestion())
  //console.log('Inside draw ', question)
  ctx.fillText(question, 210,190 ) //the question + the coordinates of the door
}