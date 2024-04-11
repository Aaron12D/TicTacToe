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

    const checkForThree = ((one == two && two == three && one == player)
        || (four == five && five == six && four.length == 1)
        || (seven == eight && eight == nine && seven.length == 1) 
        || (one == four && four == seven && one.length == 1)
        || (two == five && five == eight && two.length == 1)
        || (three == six && six == nine && three.length == 1)
        || (one == five && five == nine && one.length == 1)
        || (three == five && five == seven && three.length == 1)
        );
    console.log()
    
    function oWinner(){
        player = 'o'
        console.log(player)
        return checkForThree ? console.log('o wins') : (player = 'x')}

    xWinner = (() => {checkForThree ? console.log('x wins') : (oWinner())})();
    
};

const playerTurn = (() => {
    let player = 0
    document.addEventListener('click', function(event){
        
    event.target.className === 'boxes' ? 
        (marker = (() => {
        ((player % 2 == 0) && event.target.textContent == '') ? (event.target.textContent = 'x', player++)
        :event.target.textContent == '' ? (event.target.textContent = 'o', player++) :'';
         })(),
         checkWin()) :'';
});
})();