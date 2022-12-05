const cards = document.querySelectorAll('.card');
const playerLifeCount= document.querySelector("span")
let playerLives= 3;

playerLifeCount.textContent= playerLives;

  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard=false;

  function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
     return;
   }

   secondCard = this;

   checkForMatch();
 }

 function checkForMatch() {
    let isMatch = firstCard.dataset.match === secondCard.dataset.match;
 isMatch ? disableCards() : unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);

   resetBoard();
 }

 function unflipCards() {
    lockBoard =true;
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
    
     //lockBoard = false;
     resetBoard();
   }, 975);
   playerLives--;
   if (playerLives=== 0){
     alert("Game Over!");
     }
   playerLifeCount.textContent= playerLives;
  //  if (playerLives=== 0){
  //   resetBoard();
  //  }
  

   
 }


 function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    playerLifeCount.textContent= playerLives;
    
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));