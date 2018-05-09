//Global Variables

var randomNum = 0;
var redNum = 0;
var blueNum = 0;
var yellowNum = 0;
var greenNum = 0;

var scoreCounter = 0;
var winCounter = 0;
var loseCounter = 0;

//Functions

function startGame() {

    randomNum = Math.floor(Math.random() * 120) + 1;

    redNum = Math.floor(Math.random() * 20) + 1;

    blueNum = Math.floor(Math.random() * 20) + 1;

    yellowNum = Math.floor(Math.random() * 20) + 1;

    greenNum = Math.floor(Math.random() * 20) + 1;

    console.log(randomNum);

}

//Starting the Game

$(document).ready(function () {

    startGame();

    console.log("ready!");
});

//Red Crystal

$(".red").click(function () {
    $(".red-card").html(redNum);
    console.log(redNum);
});

//Blue Crystal

$(".blue").click(function () {
    $(".blue-card").html(blueNum);
    console.log(blueNum);
});

//Yellow Crystal

$(".yellow").click(function () {
    $(".yellow-card").html(yellowNum);
    console.log(yellowNum);
});

//Green Crystal

$(".green").click(function () {
    $(".green-card").html(greenNum);
    console.log(greenNum);
});
