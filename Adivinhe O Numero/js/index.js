/***Variaveis***/

const form = document.getElementById("form");
form.addEventListener("submit", HandleSubmit);

let statusNumber = document.getElementById("statusNumber");
let attempt = document.getElementById("attempt");
let result = document.getElementById("result");

const Guess = {
    max: 100,
    attemptsNumber: 0,
    numberDrawn: function RandomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

/*****/
function UpdateAttempt(attempt, value){
    attempt.innerHTML = "Tentativas: " + value;
};

function HandleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById("kick").value;

    if(!kick){
        alert("Digite algum valor!");
        return;
    };

    UpdateAttempt(attempt, ++(Guess.attemptsNumber));

    if(numberDrawn == kick){
        PlayAgain();
        statusNumber.innerHTML = "Parabéns, você acertou!!!";
        result.style.transition = "0.4s";
        result.style.backgroundColor = "#37c978";
        result.style.color = "#fff";
        statusNumber.style.color = "#fff";
        Clear();
    }
    else if(numberDrawn > kick){
        statusNumber.innerHTML = "O número é maior!";
        statusNumber.style.color = "#DE4251";
        Clear();
    }
    else if(numberDrawn < kick){
        statusNumber.innerHTML = "O número é menor!";
        statusNumber.style.color = "#DE4251";
        Clear();
    }
};

function PlayAgain(){
    document.getElementById("btnRestart").style.display = "flex";
};

function Restart(){
    document.location.reload(true);
};

function Clear(){
    document.getElementById("kick").value = "";
};