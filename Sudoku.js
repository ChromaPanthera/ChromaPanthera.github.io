//document.getElementById()
var blockSize = 45;
var gap = 5;
var boxNum = 9;
var selectedNum = 0;
var font = "34px Verdana";

var sudokuGameData = [];
var sudokuStarter = [];

//Checks the 3x3 space for containing the identical number
function boxCheck(x, y, num){
    let secX = Math.floor(x / 3);
    let secY = Math.floor(y / 3);

    let group = [];

    for(let i = 0;i < 3; i++){
        for(let j = 0;j < 3; j++){
            group.push(sudokuGameData[(secY * 3 + i) * 9 + secX * 3 + j]);
        }
    }

    return group.includes(num);
}

//Core
function createSudoku(){
    const canvas = document.getElementById("Sudoku");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    //Squares
    for(let i = 0; i < boxNum; i++){
        for(let j = 0; j < boxNum; j++){
            ctx.fillRect(j * (blockSize + gap), i * (blockSize + gap), blockSize, blockSize);
        }
    }

    //Lines
    ctx.fillStyle = "rgb(179, 21, 179)";
    ctx.fillRect(0, (blockSize + gap) * 3 - 5, (blockSize + gap) * 9 - gap, 5);
    ctx.fillRect(0, (blockSize + gap) * 6 - 5, (blockSize + gap) * 9 - gap, 5);
    ctx.fillRect((blockSize + gap) * 3 - 5, 0, 5, (blockSize + gap) * 9 - gap);
    ctx.fillRect((blockSize + gap) * 6 - 5, 0, 5, (blockSize + gap) * 9 - gap);

    //Numbers
    ctx.font = font;
    ctx.fillStyle = "white";
    for(let j = 0; j < boxNum; j++){
        ctx.fillText(j+1, j * (blockSize + gap) + 13, (blockSize + gap) * 9 + blockSize);
    }

    resetSudoku();
    canvas.addEventListener("click", sudokuClick);
}

//Checks 0-8 or equivalent
function horizontalCheck(x, num){
    let row = sudokuGameData.slice(x * boxNum, x * boxNum + boxNum);

    //document.getElementById("Game").innerText = x;
    return row.includes(num);
}

//Write number in square
function numberClick(x, y, ctx){
    let row = x * (blockSize + gap);
    let column = y * (blockSize + gap);

    //Fills square as reset
    ctx.fillStyle = "white";
    ctx.fillRect(row, column, blockSize, blockSize);
    ctx.font = font;

    //document.getElementById("Game").innerText = verticalCheck(y, selectedNum);

    //Checks if a copy of selectedNum exist vertical or horizontal
    if(sudokuCheck(x, y)){
        if(sudokuGameData[y * boxNum + x] != selectedNum){
            ctx.fillStyle = "rgb(172, 6, 6)";
            sudokuGameData[y * boxNum + x] = selectedNum;
        }
        else{
            sudokuGameData[y * boxNum + x] = 0;
        }
    }
    else{
        ctx.fillStyle = "rgb(145, 238, 172)";
        sudokuGameData[y * boxNum + x] = selectedNum;
    }

    ctx.fillText(selectedNum, row + 13, column + 35);
}

//Deselects number
function numberDeselect(num, ctx){
    ctx.font = font;
    ctx.fillStyle = "white";
    ctx.fillText(num + 1, num * (blockSize + gap) + 13, (blockSize + gap) * 9 + blockSize);
}

//Selects number
function numberSelect(num, ctx){
    ctx.font = font;
    ctx.fillStyle = "rgba(236, 194, 5, 0.62)";
    ctx.fillText(num + 1, num * (blockSize + gap) + 13, (blockSize + gap) * 9 + blockSize);
}

/*
Algorithm:
Start with empty
Pick a number from 1-9
Place number on board while following rules.  Order it through row number
If number can't be inserted after 3 times, start a for loop to iterate all 9 slots
If fails, reset.
Repeat until a board appears
*/
//Creates the sudoku board
function randomizeSudoku(){
    let numRand, boxRand;
    createSudoku();
    let failCount = 0, dumFail = 0, extraNum = 0, extraLimit = 22;

    let x = Math.floor(Math.random() * 3);
    let y = Math.floor(Math.random() * 3);
    let numberNotEntered = true;

    /*
    //Section 1, 5, 9 gets filled with 1-9.  No restrictions/check
    for(let i = 0; i < 3; i++){
        for(let num = 1; num <= boxNum; num++){
            while(numberNotEntered){
                x = Math.floor(Math.random() * 3);
                y = Math.floor(Math.random() * 3);
                if(sudokuGameData[i * 30 + (x * 9 + y)] == 0){
                    sudokuGameData[i * 30 + (x * 9 + y)] = num;
                    numberNotEntered = false;
                }
            }
            numberNotEntered = true;
        }
    }
    */
    
    //document.getElementById("Game").innerText =  Math.floor(Math.random() * boxNum * boxNum);

    //Fills other sections, 54 minimum runs
    while(sudokuGameData.includes(0) && extraNum < extraLimit){
        //document.getElementById("Game").innerText = "Too soon?";
        //Pick 1-9, ignores numbers that fill 9 spaces
        numRand = Math.floor(Math.random() * boxNum) + 1;
        while(sudokuGameData.filter(a => a ==numRand).length >= 6){
            numRand = Math.floor(Math.random() * boxNum) + 1;
        }

        //Pick empty Slot
        boxRand = Math.floor(Math.random() * boxNum * boxNum);
        while(sudokuGameData[boxRand] != 0 && dumFail < 5){
            boxRand = Math.floor(Math.random() * boxNum * boxNum);
            dumFail++;
        }

        dumFail = 0;

        //document.getElementById("Game").innerText =  numRand + " " + boxRand;
        //document.getElementById("Game").innerText =  sudokuGameData[boxRand];

        selectedNum = numRand;
        if(sudokuCheck(boxRand % boxNum, Math.floor(boxRand / boxNum))){
            //document.getElementById("Game").innerText = temp;
            failCount++;
        }
        else{
            sudokuGameData[boxRand] = numRand;
            extraNum++;
            failCount = 0;
        }

        //If 9 attempts to add a number is reached
        if(failCount >= 10){
            break;
        }
    }

    /*
    //Redo
    if(temp.includes(0)){
        document.getElementById("Game").innerText = temp;
        randomizeSudoku();
    }
    //Accept
    else{
        sudokuGameData = temp;
        writeNumber();
    }
    */
    sudokuStarter = sudokuGameData;
    writeNumber();
}

//Core
function resetSudoku(){
    sudokuGameData = [];
    sudokuAnswerKey = [];
    for(let i = 0; i < boxNum * boxNum; i++){
        sudokuGameData.push(0);
        sudokuAnswerKey.push(0);
    }
    //document.getElementById("Game").innerText = sudokuGameData;
}

//Check if number exist somewhere else
function sudokuCheck(x, y){
    return horizontalCheck(y, selectedNum) || verticalCheck(x, selectedNum) || boxCheck(x, y, selectedNum);
}

//Core
function sudokuClick(event){
    const canvas = document.getElementById("Sudoku");
    const ctx = canvas.getContext("2d");

    let rect = canvas.getBoundingClientRect();

    //Mouse position
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    //0-8
    let blockX = Math.floor(x/(blockSize + gap));
    let blockY = Math.floor(y/(blockSize + gap));

    //Check if click within the writing area
    if(0 <= x && x < boxNum * (blockSize + gap) && 0 <= y && y < boxNum * (blockSize + gap) && selectedNum != 0){
        numberClick(blockX, blockY, ctx);
        //document.getElementById("Game").innerText = blockY * boxNum + blockX;
    }

    //Check if click within the number selection area
    if(0 <= x && x < boxNum * (blockSize + gap) && boxNum * (blockSize + gap) <= y && y < (boxNum + 1) * (blockSize + gap)){
        let numHold = blockX + 1;

        if(selectedNum != 0){
            numberDeselect(selectedNum - 1, ctx);
        }

        if(numHold == selectedNum){
            selectedNum = 0;
        }
        else{
            selectedNum = numHold;
            numberSelect(selectedNum - 1, ctx);
        }
    }
}

//Works
function testDrive(){
    document.getElementById("Game").innerText = "Hi";
}

function verticalCheck(y, num){
    let column = [];
    for(let i = 0; i < boxNum; i++){
        column.push(sudokuGameData[i * boxNum + y]);
    }
    //document.getElementById("Game").innerText = column;
    return column.includes(num);
}

function writeNumber(){
    const canvas = document.getElementById("Sudoku");
    const ctx = canvas.getContext("2d");

    ctx.font = font;
    ctx.fillStyle = "rgb(0, 0 ,0)";

    for(let i = 0; i < boxNum * boxNum; i++){
        selectedNum = sudokuGameData[i];
        if(selectedNum != 0){
            ctx.fillText(selectedNum, (i % boxNum) * (blockSize + gap) + 13, Math.floor(i / boxNum) * (blockSize + gap) + + 35);
        }
    }
    selectedNum = 0;
}
