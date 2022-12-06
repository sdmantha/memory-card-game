//create variables and consts
const cards = document.querySelectorAll('.card');
const playerLifeCount= document.querySelector("span")
let playerLives= 12;
let counter = 0

//pop up on the screen
playerLifeCount.textContent= playerLives;

//create more varialbes
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard=false;
  let allCardsFlipped=true;


// 'this' represents that the card was flipped 
//'hasflippedcard' is true is no card is flipped
//flipped card is set to the clicked card
  function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
     return;
   }
   //calling the function
   secondCard = this;
   checkForMatch();
 }
//ternary function
//added data atrributes in the html to each picture so that I can match them up in JS and create a dataset. A match is the first and second data set and if they dont match then the cards got back to "unflipcards"
 function checkForMatch() {
    let isMatch = firstCard.dataset.match === secondCard.dataset.match;
 isMatch ? disableCards() : unflipCards();
 }
//add counter here bc disable cards check if you had a match, each match adds one to the counter
 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   counter++
   if (counter === 6){
    //this will erase the container in the front and show the words you won
    document.getElementById('whatever').innerHTML= "Yaay you won !";
    console.log('You win!')
    document.getElementById('container').style.display = 'none'
  }
//called the reset func
   resetBoard();
 }


//lockboard will prevent any card flipping before the cards are hidden or match
 function unflipCards() {
    lockBoard =true;
    //time out lets the card flip back over at a certain speed in ms
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
     resetBoard();
   }, 975);
   //subtract one playerlives(life)
   playerLives--;
   if (playerLives=== 0){
     alert("Game Over!");
     }
   playerLifeCount.textContent= playerLives;   
 }




//if the hasFlippedCard(not flipped) and lockboard(no cards ) are false and the first and second data match are null then the board can be reset
 function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    playerLifeCount.textContent= playerLives;
    
  }


//shuffle cards
 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();
//called the function
  cards.forEach(card => card.addEventListener('click', flipCard));

  