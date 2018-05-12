//Global Variables

var randomNum = 0;
var redNum = 0;
var purpleNum = 0;
var goldNum = 0;
var greenNum = 0;

var yourScore = 0;
var wins = 0;
var losses = 0;

//Functions

function startGame() {

    randomNum = Math.floor(Math.random() * 70) + 50;

    redNum = Math.floor(Math.random() * 8) + 1;
    purpleNum = Math.floor(Math.random() * 15) + 1;
    goldNum = Math.floor(Math.random() * 12) + 1;
    greenNum = Math.floor(Math.random() * 20) + 1;

    yourScore = 0;

    $(".randomNum").html(randomNum);
    $(".yourScore").html(yourScore);
    $(".redNumber").empty();
    $(".purpleNumber").empty();
    $(".greenNumber").empty();
    $(".goldNumber").empty();

};


function winGame() {
    $(".header").html("You Win!");
    wins++;
    console.log(wins);
    $(".winsCount").html(wins);
    startGame();
};

function loseGame() {
    $(".header").html("You lose!");
    losses++;
    console.log(losses);
    $(".lossesCount").html(losses);
    startGame();
};


//Starting the Game

$(window).ready(function () {

    startGame();
    $(".randomNum").html(randomNum);
    $(".yourScore").html(yourScore);
    console.log("ready!");

    //Red Crystal

    $(".red").click(function () {
        $(".header").html("Crystal Collector");
        $(".redNumber").html(redNum);
        yourScore += redNum;
        $(".yourScore").html(yourScore);
        if (yourScore === randomNum) {
            winGame();
        }
        if (yourScore > randomNum) {
            loseGame();
        };

    });

    //Blue Crystal

    $(".purple").click(function () {
        $(".header").html("Crystal Collector");
        $(".purpleNumber").html(purpleNum);
        yourScore += purpleNum;
        $(".yourScore").html(yourScore);
        if (yourScore === randomNum) {
            winGame();
        }
        if (yourScore > randomNum) {
            loseGame();
        };

    });

    //Yellow Crystal

    $(".green").click(function () {
        $(".header").html("Crystal Collector");
        $(".greenNumber").html(greenNum);
        yourScore += greenNum;
        $(".yourScore").html(yourScore);
        if (yourScore === randomNum) {
            winGame();
        }
        if (yourScore > randomNum) {
            loseGame();
        };

    });

    //Green Crystal

    $(".gold").click(function () {
        $(".header").html("Crystal Collector");
        $(".goldNumber").html(goldNum);
        yourScore += goldNum;
        $(".yourScore").html(yourScore);
        if (yourScore === randomNum) {
            winGame();
        }
        if (yourScore > randomNum) {
            loseGame();
        };

    });

});