console.log("testing")
//Questions
var question = ["What type of Pokemon is Charmander?<br /><br />", "Where did Ash get his first Pokemon?<br /><br />", "Where is Ash from?<br /><br />", "What is the name of the Nintendo 64 Pokemon Photo game?<br /><br />"]
var $newGame = document.getElementById('newGame');
// answers

var answer1 = ["<button class=buttons2 onclick=question1correct()>fire",
    "<button class=buttons2 onclick=question2incorrect()>His Mom",
    "<button class=buttons2 onclick=question3incorrect()>The Elite Four",
    "<button class=buttons2 onclick=question4incorrect()>Donkey Kong",];

var answer2 = ["<button class=buttons2 onclick=question1incorrect()>water",
    "<button class=buttons2 onclick=question2incorrect()>His Dad",
    "<button class=buttons2 onclick=question3incorrect()>Bad Lands",
    "<button class=buttons2 onclick=question4correct()>Pokemon Snap",];

var answer3 = ["<button class=buttons2 onclick=question1incorrect()>earth",
    "<button class=buttons2 onclick=question2correct()>Prof. Oak",
    "<button class=buttons2 onclick=question3incorrect()>Uptown",
    "<button class=buttons2 onclick=question4incorrect()>Pokemon Red",];

var answer4 = ["<button class=buttons2 onclick=question1incorrect()>wind",
    "<button class=buttons2 onclick=question2incorrect()>At School",
    "<button class=buttons2 onclick=question3correct()>Palet Town",
    "<button class=buttons2 onclick=question4incorrect()>Pokemon Blue",
];

var correct = ["Correct", "Correct", "Correct", "Correct",]
var incorrect = ["Incorrect", "Incorrect", "Incorrect", "Incorrect",]

var n = 0;
n++;
var s = 0;
s++;

//start
function begin1() {
    t = 30;
    dissapear1.innerHTML = "";
    message1.innerHTML = "";
    question1.innerHTML = question[0];
    option1.innerHTML = answer1[0];
    option2.innerHTML = answer2[0];
    option3.innerHTML = answer3[0];
    option4.innerHTML = answer4[0];
    number1.innerHTML = n++;

}
// correct or incorrect
function question1correct() {
    answer1.innerHTML = "<div>" + correct[3] + "</div>";
    option1.innerHTML = "Correct!";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=fresh2()>Next Question</button>";
    score1.innerHTML = s++;
}

function question1incorrect() {
    answer1.innerHTML = "<div>" + incorrect[0] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "Incorrect";
    option3.innerHTML = "";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=fresh2()>Next Question</button>";

}

// Creates next Question

function fresh2() {
    message1.innerhtml = "";
    question1.innerHTML = question[1];
    option1.innerHTML = answer1[1];
    option2.innerHTML = answer2[1];
    option3.innerHTML = answer3[1];
    option4.innerHTML = answer4[1];
    next1.innerHTML = "";
    answer1.innerHTML = "";
    number1.innerHTML = n++;

}

function question2correct() {
    answer1.innerHTML = "<div>" + correct[1] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "Correct";
    option3.innerHTML = "";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=fresh3()>Next Question</button>";
    score1.innerHTML = s++;
}

function question2incorrect() {
    answer1.innerHTML = "<div>" + incorrect[1] + "</div>";
    option1.innerHTML = "Incorrect";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=fresh3()>Next Question</button>";

}

function fresh3() {
    message1.innerhtml = "";
    question1.innerHTML = question[2];
    option1.innerHTML = answer1[2];
    option2.innerHTML = answer2[2];
    option3.innerHTML = answer3[2];
    option4.innerHTML = answer4[2];
    next1.innerHTML = "";
    answer1.innerHTML = "";
    number1.innerHTML = n++;

}

function question3correct() {
    answer1.innerHTML = "<div>" + correct[3] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "Correct";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=fresh4()>Next Question</button>";
    score1.innerHTML = s++;
}

function question3incorrect() {
    answer1.innerHTML = "<div>" + incorrect[1] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "Incorrect";
    option3.innerHTML = "";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=fresh4()>Next Question</button>";

}

function fresh4() {
    message1.innerhtml = "";
    question1.innerHTML = question[3];
    option1.innerHTML = answer1[3];
    option2.innerHTML = answer2[3];
    option3.innerHTML = answer3[3];
    option4.innerHTML = answer4[3];
    next1.innerHTML = "";
    answer1.innerHTML = "";
    number1.innerHTML = n++;
}

function question4correct() {
    answer1.innerHTML = "<div>" + correct[2] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "Correct";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=end1()>End Game</button>";
    score1.innerHTML = s++;
}
// last Question and End Game
function question4incorrect() {
    answer1.innerHTML = "<div>" + incorrect[1] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "Incorrect";
    option3.innerHTML = "";
    option4.innerHTML = "";
    number1.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=end1()>End Game</button>";

}

function end1() {
    message1.innerhtml = "PIKA PIKA";
    question1.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=restart1()>Restart</button>" + "</div>";
    answer1.innerHTML = "";

}
// Timer

function timer() {
    t = t - 1;
    if (t < 30) {
    clock.innerHTML = t;
    }

    if (t < 1) {
        window.clearInterval(update);
        message1.innerhtml = "PIKA PIKA";
    question1.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next1.innerHTML = "<button class=buttons1 onclick=restart1()>Restart</button>" + "</div>";
    answer1.innerHTML = "";
    }
}

update = setInterval("timer()",1000);

function restart1() {
    location.reload();

}

