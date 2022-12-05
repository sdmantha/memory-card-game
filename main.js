// const cards = document.querySelectorAll('.memory-card');

// let hasFlippedCard = false;
// let firstCard, secondCard;

// function flipCard() {
//   this.classList.add('flip');

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;
//    return;
//  }

//  secondCard = this;
//  hasFlippedCard = false;

//  checkForMatch();
// }

// function checkForMatch() {
//  if (firstCard.dataset.framework === secondCard.dataset.framework) {
//    disableCards();
//    return;
//  }

//  unflipCards();
// }

// function disableCards() {
//  firstCard.removeEventListener('click', flipCard);
//  secondCard.removeEventListener('click', flipCard);
// }

// function unflipCards() {
//  setTimeout(() => {
//    firstCard.classList.remove('flip');
//    secondCard.classList.remove('flip');
//  }, 1500);
// }

//   cards.forEach(card => card.addEventListener('click', flipCard));


const cards = document.querySelectorAll('.card');
const playerLifeCount= document.querySelector("span")
let playerLives= 20;

playerLifeCount.textContent= playerLives;

  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard=false;

  function flipCard() {
    if(lockBoard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
     return;
   }

   secondCard = this;
   hasFlippedCard = false;

   checkForMatch();
 }

 function checkForMatch() {
    let isMatch = firstCard.dataset.match === secondCard.dataset.match;
 isMatch ? disableCards() : unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
 }

 function unflipCards() {
    lockBoard =true;
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
    
     lockBoard=false;
   }, 975);
   playerLives--
   playerLifeCount.textContent= playerLives
 }

 

 
 function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));