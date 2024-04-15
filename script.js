function checkWin(){
    const one = document.querySelector('#one').textContent;
    const two = document.querySelector('#two').textContent;
    const three = document.querySelector('#three').textContent;
    const four = document.querySelector('#four').textContent;
    const five = document.querySelector('#five').textContent;
    const six = document.querySelector('#six').textContent;
    const seven = document.querySelector('#seven').textContent;
    const eight = document.querySelector('#eight').textContent;
    const nine = document.querySelector('#nine').textContent;
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
    
    
    
    function oWinner(){
        player = 'O';
        checkForThree();
        return checkForThree() ? scoreboard() :'';
    };

    player = 'X';
    xWinner = (() => {checkForThree() ?  scoreboard(): (oWinner())})();
};

const scoreboard = () => {
    const xScore = document.querySelector('#xScore');
    let xScoreValue = document.querySelector('#xScore').textContent;
    xScore.textContent = parseInt(xScoreValue)+1;
    
    const oScore = document.querySelector('#oScore');
    let oScoreValue = document.querySelector('#oScore').textContent;
    oScore.textContent = parseInt(oScoreValue)+1;

}


function toggleDisplay() {
    const form = document.querySelector('#form');
    const gameboard = document.querySelector('.gameboard');

    form.classList.toggle('toggleDisplay');
    gameboard.classList.toggle('toggleDisplay');
};

const playerTurn = (() => {
    let player = 0
    document.addEventListener('click', function(event){
        
    event.target.className === 'boxes' ? 
        (marker = (() => {
        ((player % 2 == 0) && event.target.textContent == '') ? (event.target.textContent = 'X', player++)
        :event.target.textContent == '' ? (event.target.textContent = 'O', player++) :'';
         })(),
         checkWin()) 
    : event.target.id === 'start' ? (event.preventDefault(), toggleDisplay())
    :'';
});
})();