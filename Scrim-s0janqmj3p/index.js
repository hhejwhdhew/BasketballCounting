let score1Shown = document.getElementById("score1");
let score2Shown = document.getElementById("score2");

let score1 = 0;
let score2 = 0;

function addOne() {
    score1 += 1;
    score1Shown.textContent = score1;
}

function addTwo() {
    score1 += 2;
    score1Shown.textContent = score1;
}

function addThree() {
    score1 += 3;
    score1Shown.textContent = score1;
}

function addOneG() {
    score2 += 1;
    score2Shown.textContent = score2;
}

function addTwoG() {
    score2 += 2;
    score2Shown.textContent = score2;
}

function addThreeG() {
    score2 += 3;
    score2Shown.textContent = score2;
}

function restart() {
    score1Shown.textContent = 0;
    score2Shown.textContent = 0;
    score1 = 0;
    score2 = 0;
}