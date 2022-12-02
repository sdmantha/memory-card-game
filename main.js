const selectors={
    boardContainer: document.querySelector('.container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('.button'),
    win: document.querySelector('.win')
}
const newGame={
    gameStarted: false,
    flippedCards: 0,
    totalFlips:0,
    totalTime: 0,
    loop: null
}

const createGame =()=>{
    const dimensions = selector.board.getAttribute('data-dimernsion')

    if(dimensions % 2 !==0){
        throw new Error('The dimension of the game must be even.')
    }
const img=['flower.1','flower.2']
}
