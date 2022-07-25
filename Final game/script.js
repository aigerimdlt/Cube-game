const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diicElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
// const current1Element = document.getElementById('current--1');
// const current0Element = document.getElementById('current--0');
// const score0 = document.getElementById('score--0');
// const score1 = document.getElementById('score--1');
let numsumm = 0
let activePlayer = 0
let score1 = 0
// let Score1 = 0
// let numsumm2 = 0
// let Score2 = 0
// score0 = 0;

// current0Element = 0;
// current1Element = 0;

document.querySelector('.btn--roll').addEventListener
('click', function firstPlayer(){
    let numbRandom = Math.trunc( Math.random()* 6)+1;
    let dice = `dice${numbRandom}.png`;
    document.getElementById("dicenum").src= dice;
    console.log(numbRandom);
    if (numbRandom !== 1) {   
        numsumm += numbRandom;
        // document.getElementById(`current--${activePlayer}`).textContent = numsumm
        current0Element.textContent = numsumm
        
        // document.querySelector('.current-score').textContent = numsumm
    } else {
        numsumm = 0;
        // document.querySelector('.current-score').textContent = numsumm;
        document.getElementById(`current--${activePlayer}`).textContent = numsumm;
        activePlayer = activePlayer === 0 ? 1 :0; 
        current1Element.textContent = numsumm
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }
})



document.querySelector('.btn--hold').addEventListener
('click', function (){ 
    score1 += numsumm
    document.querySelector('.score').textContent = score1
    numsumm = 0
    document.querySelector('.current-score').textContent = numsumm

})

