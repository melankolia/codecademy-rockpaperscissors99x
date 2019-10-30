// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveOneValue,
    playerOneMoveTwoType,
    playerOneMoveTwoValue,
    playerOneMoveThreeType,
    playerOneMoveThreeValue,

    playerTwoMoveOneType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoType,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeType,
    playerTwoMoveThreeValue,

    playerOneWins,
    playerTwoWins



const isValidMoveType = moveType => {
    return moveType === 'rock' || moveType === 'paper' || moveType === 'scissors';
}
const isValidMoveValue = moveValue => {
    return moveValue >= 1 && moveValue <= 99;
}

const setComputerMoves = () => {
    const cpuMove = ['rock','paper','scissors'];
    const moveOneType = cpuMove[Math.floor(Math.random() * 3)];
    const moveTwoType = cpuMove[Math.floor(Math.random() * 3)];
    const moveThreeType = cpuMove[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 98);
    const moveTwoValue = Math.floor(Math.random() * (moveOneValue - 98));
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);

}
const getMoveWinner = (playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue) => {
    if (!isValidMoveType(playerOneMoveOneType) || !isValidMoveType(playerTwoMoveOneType) || 
        !isValidMoveValue(playerOneMoveOneValue) || !isValidMoveValue(playerTwoMoveOneValue)){
            return null;
        }

    if (playerOneMoveOneType === playerTwoMoveOneType){

        if (playerOneMoveOneValue === playerTwoMoveOneValue){
            return 'Tie';    
        } 
        else if (playerOneMoveOneValue > playerTwoMoveOneValue){
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else if (playerOneMoveOneType === 'rock'){

        if (playerTwoMoveOneType === 'scissors'){
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else if (playerOneMoveOneType === 'paper'){

        if (playerTwoMoveOneType === 'rock'){
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else if (playerOneMoveOneType === 'scissors'){

        if (playerTwoMoveOneType === 'paper'){
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }

}
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return "Moves Undefined"
        }
    if (!isValidMoveType(moveOneType) ||
        !isValidMoveType(moveTwoType) ||
        !isValidMoveType(moveThreeType)){
        return "Moves Invalid";
        }
        
    if (!isValidMoveValue(moveOneValue) ||
        !isValidMoveValue(moveTwoValue) ||
        !isValidMoveValue(moveThreeValue)){
        return "Moves Value Invalid";
        }

    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99){
        return "Moves Sum Value Invalid";
    }

    if (player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === 'Player Two') {         
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
        }
}

const getRoundWinner = roundNumber => {
    switch (roundNumber){
        case 1:
            return getMoveWinner(playerOneMoveOneType,playerOneMoveOneValue,
                                playerTwoMoveOneType,playerTwoMoveOneValue)
        case 2:
            return getMoveWinner(playerOneMoveTwoType,playerOneMoveTwoValue,
                                playerTwoMoveTwoType,playerTwoMoveTwoValue)
        case 3:
            return getMoveWinner(playerOneMoveThreeType,playerOneMoveThreeValue,
                                playerTwoMoveThreeType,playerTwoMoveThreeValue)
        default:
            return null;
    }
}

const addWin = roundWinner => {
    if (roundWinner === 'Player One'){
        playerOneWins += 1;
    }
    else if (roundWinner === 'Player Two'){
        playerTwoWins += 1;
    }
}

const getGameWinner = () => {
    if (!playerOneMoveOneType   || !playerOneMoveOneValue   || !playerTwoMoveOneType    || !playerTwoMoveOneValue   ||
        !playerOneMoveTwoType   || !playerOneMoveTwoValue   || !playerTwoMoveTwoType    || !playerTwoMoveTwoValue   ||
        !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveThreeType  || !playerTwoMoveThreeValue ){
            return null;
        }
    playerOneWins = 0;
    playerTwoWins = 0;
    
    addWin(getRoundWinner(1));
    addWin(getRoundWinner(2));
    addWin(getRoundWinner(3));

    if (playerOneWins > playerTwoWins){
        return 'Player One';
    }
    else if (playerOneWins < playerTwoWins){
        return 'Player Two';
    }
    else {
        return 'Tie';
    }

}

