const results = document.querySelector('#result');

function checkWin(){
    let one = document.querySelector('#one').textContent;
    let two = document.querySelector('#two').textContent;
    let three = document.querySelector('#three').textContent;
    let four = document.querySelector('#four').textContent;
    let five = document.querySelector('#five').textContent;
    let six = document.querySelector('#six').textContent;
    let seven = document.querySelector('#seven').textContent;
    let eight = document.querySelector('#eight').textContent;
    let nine = document.querySelector('#nine').textContent;
    let player = '';

    function checkForThree() { 
        return ((one == two && two == three && one == player && one.length == 1)
        || (four == five && five == six && four == player && four.length == 1)
        || (seven == eight && eight == nine && seven == player && seven.length == 1) 
        || (one == four && four == seven && one == player && one.length == 1)
        || (two == five && five == eight && two == player && two.length == 1)
        || (three == six && six == nine && three == player && three.length == 1)
        || (one == five && five == nine && one == player && one.length == 1)
        || (three == five && five == seven && three == player && three.length == 1)
    )};
    
    function checkForTie(){
        if (one.length == 1 &&
            two.length == 1 &&
            three.length == 1 &&
            four.length == 1 &&
            five.length == 1 &&
            six.length == 1 &&
            seven.length == 1 &&
            eight.length == 1 &&
            nine.length == 1){
                resetGrid();
                results.textContent = `It's a Tie. Next round!`
            };
        };
    
    function oWinner(){
        player = 'O';
        checkForThree();
        return checkForThree() ?
         (oScoreboard(), resetGrid(), results.textContent = `${getOName()} wins this round!`) 
         : checkForTie();
    };

    player = 'X';
    xWinner = (() => {checkForThree() ?
        (xScoreboard(), resetGrid(), results.textContent = `${getXName()} wins this round!`)
        : (oWinner())})();

    if (document.querySelector('#xScore').textContent == 3){
            results.textContent = `${getXName()} WINS THE GAME! Restart to play again.`;
    } else if (document.querySelector('#oScore').textContent == 3){
            results.textContent = `${getOName()} WINS THE GAME! Restart to play again.`;
    };
};

function getOName(){
    const oInput = document.querySelector('#O').value;
    if (oInput != ''){
        return oInput;
    } else {
        return 'O';
    }
}

function getXName(){
    const xInput = document.querySelector('#X').value;
    if (xInput != ''){
        return xInput;
    } else {
        return 'X';
    }
}

function resetGrid() {
    setTimeout(() => {
    let grid = document.querySelectorAll('.boxes');
    grid.forEach(box => box.textContent = ''); }, 1000)
};

function setNames() {
    const xName = document.querySelector('#p1');
    const oName = document.querySelector('#p2');

    xName.textContent = `Player ${getXName()}:`
    oName.textContent = `Player ${getOName()}:`
    
};

function xScoreboard() {
    const xScore = document.querySelector('#xScore');
    let xScoreValue = document.querySelector('#xScore').textContent;
    xScore.textContent = parseInt(xScoreValue) + 1;
};

const oScoreboard = () => {
    const oScore = document.querySelector('#oScore');
    let oScoreValue = document.querySelector('#oScore').textContent;
    oScore.textContent = parseInt(oScoreValue)+1;
};

function toggleDisplay() {
    const form = document.querySelector('#form');
    const gameboard = document.querySelector('.gameboard');

    form.classList.toggle('toggleDisplay');
    gameboard.classList.toggle('toggleDisplay');
};

function highlightPlayer() {
    const xPlayer = document.querySelector('#p1');
    const oPlayer = document.querySelector('#p2');

    xPlayer.classList.toggle('highlight');
    oPlayer.classList.toggle('highlight');
};

const playerTurn = (() => {
    let player = 0;
    document.addEventListener('click', function(event){
    if (document.querySelector('#xScore').textContent == 3 
        || document.querySelector('#oScore').textContent == 3){
    } else {
        event.target.className === 'boxes' ? 
            (marker = (() => {
            ((player % 2 == 0) && event.target.textContent == '') ? (event.target.textContent = 'X', player++, highlightPlayer())
            :event.target.textContent == '' ? (event.target.textContent = 'O', player++, highlightPlayer()) 
            : '';
            })(),
            checkWin()) 
        : '';
    }
    event.target.id === 'start' ? (event.preventDefault(), toggleDisplay(), setNames())
    : event.target.id === 'restart' ? 
    (toggleDisplay(), 
    document.querySelector('#xScore').textContent = 0, 
    document.querySelector('#oScore').textContent = 0,
    results.textContent = '',
    document.querySelector('#X').value = '',
    document.querySelector('#O').value = '',
    resetGrid(),
    player = 0)
    :'';
});
})();