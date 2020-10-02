# Project's name

## Description
Are you a F.R.I.E.N.D.S fan? Can't you stop watching Friends over and over again? Then this game is your moment to shine!
This game is for a single player only. Each correctly answered question will get you 10 points, an incorrect answer will result in GAME OVER. The time limit for each question is measured by a slice of pizza falling down on Joey. Once he reaches his pizza, the time is up and you loose.
You win the game once you answered 5 questions in a row correctly.

## MVP (DOM - CANVAS)
- game has 6 characters - Ross, Phoebe, Monica, Rachel, Chandler and Joey
- questions are asked in a way that the correct answer is one of the characters, you submit your answer by clicking on a character
- time is meassured by a pizza slice falling down on Joey
- the GAME OVER window will appear when the player doesn't choose any answer in the given time-frame or if the player gives the incorrect answer
- the player wins when they answer correctly 5 questions in a row
- the player has only 1 life

## Backlog
- baground music Phoebe's Smelly Cat
- add lives

## Data structure
## main.js
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

## game.js
- Game () {}
- startLoop () {}
- pizzaFall () {} 
- checkCollisions () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

## questions.js
- questions () { this.x; this.y; this.direction; this.size }
- drawQuestions () {}
- randomQuestions () {}
- randomQuestionPicker () {}

## character.js
- link questions to characters

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen
- winScreen


## Task
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- main - buildWinScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- questions - draw
- questions - randomQuestions
- questions - randomQuestionPicker
- characters - matchQuote
- game - checkCauldronCollision
- game - gameOver
- game - gameWon
- game - addEventListener

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)