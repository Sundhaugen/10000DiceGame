var imagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var imgIdArray = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

var url = "../pictures/";

var gameState = false;

var dice1Checked = false;

var dice2Checked = false;

var dice3Checked = false;

var dice4Checked = false;

var dice5Checked = false;

var dice6Checked = false;

var checkedArr = {
    'dice1': '',
    'dice2': '',
    'dice3': '',
    'dice4': '',
    'dice5': '',
    'dice6': '',
};

var allDices = [];

function initielizeDiceStart() {

    dice1Checked = false;

    dice2Checked = false;

    dice3Checked = false;

    dice4Checked = false;

    dice5Checked = false;

    dice6Checked = false;

}

function initielizeDiceStop() {

    dice1Checked = true;

    dice2Checked = true;

    dice3Checked = true;

    dice4Checked = true;

    dice5Checked = true;

    dice6Checked = true;

}

function initielizeCheckedDice() {

    checkedArr = {
        'dice1': '',
        'dice2': '',
        'dice3': '',
        'dice4': '',
        'dice5': '',
        'dice6': '',
    };

}


function displayImage() {



    if (dice1Checked === false) {

        num = randomNumber();

        changeDice(num, imgIdArray[0]);

    } else {

        checkedArr['dice1'] = cleanDiceText(document.getElementById("dice1").src)

    }

    if (dice2Checked === false) {

        num = randomNumber();

        changeDice(num, imgIdArray[1]);

    } else {

        checkedArr['dice2'] = cleanDiceText(document.getElementById("dice2").src)

    }

    if (dice3Checked === false) {

        num = randomNumber();

        changeDice(num, imgIdArray[2]);

    } else {

        checkedArr['dice3'] = cleanDiceText(document.getElementById("dice3").src)

    }

    if (dice4Checked === false) {
        num = randomNumber();
        changeDice(num, imgIdArray[3]);

    } else {

        checkedArr['dice4'] = cleanDiceText(document.getElementById("dice4").src)

    }

    if (dice5Checked === false) {

        num = randomNumber();

        changeDice(num, imgIdArray[4]);

    } else {

        checkedArr['dice5'] = cleanDiceText(document.getElementById("dice5").src)

    }

    if (dice6Checked === false) {

        num = randomNumber();

        changeDice(num, imgIdArray[5]);

    } else {

        checkedArr['dice6'] = cleanDiceText(document.getElementById("dice6").src)

    }

    checkIfPoints(checkedArr);
}

function randomNumber() {

    var num = Math.floor(Math.random() * 6); // 0...6

    return num;

}

function changeDice(num, id) {

    document.getElementById(id).src = url.concat(imagesArray[num]);

}

function addPlayer() {

    if (gameState === false) {

        if (document.getElementById("player-3").style.display === "") {

            document.getElementById("player-3").style.display = "inline-block";

            return;

        }

        if (document.getElementById("player-4").style.display === "") {

            document.getElementById("player-4").style.display = "inline-block";

            return;

        }

    }


}

function removePlayer() {

    if (gameState === false) {

        if (document.getElementById("player-4").style.display === "inline-block") {

            document.getElementById("player-4").style.display = "";

            return;

        }

        if (document.getElementById("player-3").style.display === "inline-block") {

            document.getElementById("player-3").style.display = "";

            return;

        }
    }

}

function startGame() {

    startGameState();

    initielizeDiceStart();

    document.getElementById("start-game-button").style.display = "none";

    document.getElementById("stop-game-button").style.display = "inline-block";

    document.getElementById("player-1-score").innerHTML = "Score: 0";

    document.getElementById("player-2-score").innerHTML = "Score: 0";

    document.getElementById("player-3-score").innerHTML = "Score: 0";

    document.getElementById("player-4-score").innerHTML = "Score: 0";

    setPlayersTurn("Player 1");

}

function stopGame() {

    endGameState();

    initielizeDiceStop();

    document.getElementById("stop-game-button").style.display = "none";

    document.getElementById("start-game-button").style.display = "inline-block";

    setPlayersTurn("");

    setGameText("");



}

function setPlayersTurn(player) {

    var playersTurn = "Players turn: ";

    document.getElementById("players-turn").innerHTML = playersTurn.concat(player);

}

function startGameState() {

    gameState = true;

}

function endGameState() {

    gameState = false;

}

function checkDice(el) {

    switch (el.id) {

        case "dice1":
            dice1Checked = true;
            dice1.style.border = "2px solid orange";
            break;

        case "dice2":
            dice2Checked = true;
            dice2.style.border = "2px solid orange";
            break;

        case "dice3":
            dice3Checked = true;
            dice3.style.border = "2px solid orange";
            break;

        case "dice4":
            dice4Checked = true;
            dice4.style.border = "2px solid orange";
            break;

        case "dice5":
            dice5Checked = true;
            dice5.style.border = "2px solid orange";
            break;

        case "dice6":
            dice6Checked = true;
            dice6.style.border = "2px solid orange";
            break;

    }

}

function checkIfPoints(checkedArr) {

    if (checkIfMarked(checkedArr) === true) {

        score = calculatePoints(checkedArr);

        console.log('score is ' + score)

    } else {

        setGameText("Ingen terninger valgt, runden går til neste spiller");

        cleanMark();

        //Todo add set player

    }



}

function setGameText(gameText) {

    document.getElementById("play-feed-text").innerHTML = gameText;

}

function cleanDiceText(string) {

    ret = string.replace("http://127.0.0.1:5500/pictures/", "");

    ret = ret.replace(".png", "");

    return ret;

}

function cleanMark() {
    
    for (j = 0; j < imgIdArray.length; j++) {

        document.getElementById(imgIdArray[j]).style.border = "none";
    
    }

    initielizeDiceStart();

    initielizeCheckedDice();

}

function checkIfMarked(checkedArr) {

    var check = false;

    Object.keys(checkedArr).forEach(function(item,index,array) {

        if(checkedArr[item].length > 0){

            check = true;

        }

    })

    return check;
}

function calculatePoints(checkedArr) {

    var newScore = 0;

    var scoreTable = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    Object.keys(checkedArr).forEach(function(item,index,array) {

        if (checkedArr[item] != "") {

            switch (checkedArr[item]) {

                case "dice1":
                    scoreTable[1]++;
                    break;

                case "dice2":
                    scoreTable[2]++;
                    break;

                case "dice3":
                    scoreTable[3]++;
                    break;

                case "dice4":
                    scoreTable[4]++;
                    break;

                case "dice5":
                    scoreTable[5]++;
                    break;

                case "dice6":
                    scoreTable[6]++;
                    break;

            }

        }

    })

    var strongDice = [1,5];

    var weakDice = [2,3,4,6];

    Object.keys(scoreTable).forEach(function(item,index,array) {

        item = parseInt(item)
        
        if(scoreTable[item] === 1 && checkIfStraight(scoreTable)){

            newScore += 2000;

        }

        if(scoreTable[item] === 2 && checkIfThreePairs(scoreTable)){

            newScore += 1500;

        }

        if (weakDice.includes(parseInt(item)) && scoreTable[item] > 2) {

            newScore += calculateWeakDicePoints(item, scoreTable[item]);

        }  

        if(strongDice.includes(parseInt(item)) && scoreTable[item] > 0) {

            newScore += calculateStrongDicePoints(item, scoreTable[item]);

        }

    })


    return newScore;


}

function calculateWeakDicePoints(diceNumber, amount){

    score = diceNumber*100;

    switch(amount){

        case 4:
            return score*2;
        
        case 5:
            return score*4;
        
        case 6:
            return score*8;

        default:
            return score
    }

}

function calculateStrongDicePoints(diceNumber, amount){

    if(amount >= 3){

        if(diceNumber === 1){

            score = 1000;

        } 
        
        if(diceNumber === 5){
            
            score = 500;
        
        }
        

    } else {

        if(diceNumber === 1){

            return amount*100;

        } 
        
        if(diceNumber === 5){
            
            return amount*50;
        
        }
        
    }

    switch(amount){

        case 4:
            return score*2;
        
        case 5:
            return score*4;
        
        case 6:
            return score*8;

        default:
            return score
    }

}

function checkIfThreePairs(scoreTable){

    var count = 0;

    Object.keys(scoreTable).forEach(function(item,index,array) {

        if(scoreTable[item] === 2){
            
            count++;

        }

    })

    if(count === 3){
        return true;
    } else {
        return false;
    }

}

function checkIfStraight(scoreTable){

    var count = 0;

    Object.keys(scoreTable).forEach(function(item,index,array) {

        if(scoreTable[item] === 1){
            
            count++;

        }

    })

    if(count === 6){
        return true;
    } else {
        return false;
    }

}