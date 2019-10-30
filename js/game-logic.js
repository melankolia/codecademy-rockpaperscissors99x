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
    playerTwoMoveThreeValue

const isValidMoveType = moveType => {
    return moveType === 'rock' || moveType === 'paper' || moveType === 'scissors';
}
const isValidMoveValue = moveValue => {
    return moveValue >= 1 && moveValue <= 99;
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

const getRoundWinner = round => {

}

const getGameWinner = () => {

}