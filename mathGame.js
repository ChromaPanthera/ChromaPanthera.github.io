//document.getElementById()
//Addition, Subtraction, Multiplication, Division, fractions
var operations = "Addition";
var length1 = 1, length2 = 1;
let fractions = false;
let questions = [];
let answers = [];
let correct = 0;
let currentQuestion = 0;
var asyncQuestions;
let startTime;
let orient = "Vertical";

let add="Addition", sub="Subtraction", mult="Multiplication", divi="Division";

//Core Function
//Process answers, check, and either give results or new question
function attemptQuestion(event){
    //document.getElementById("MathInstructions").innerText = event.key;
    if(event.key == "Enter"){
        if(checkCorrect()){
            document.getElementById("Answer").value = "";
            correct = correct + 1;
            createMathBoard();
            currentQuestion = currentQuestion + 1;
            if(currentQuestion < 100){
                if(fractions){
                    drawMathAcross(questions[currentQuestion][0], questions[currentQuestion][2], questions[currentQuestion][1], questions[currentQuestion][3]);
                }
                else if(orient == "Horizontal"){
                    drawMathAcross(questions[currentQuestion][0], questions[currentQuestion][1]);
                }
                else{
                    drawMathTopDown(questions[currentQuestion][0], questions[currentQuestion][1]);
                }
            }
            else{
                tallyResults();
            }
        }
        else{
            //document.getElementById("MathInstructions").innerText = "Incorrect";
            tallyResults();
        }
    }
}

//Toggle if fractions on or not.  Disables most settings except operations
function changeFrac(elem){
    if(elem.innerText == "On"){
        fractions = true;
    }
    else{
        fractions = false;
    }
}

//Toggle to horizontal orientation
function changeHorizon(){
    orient = "Horizontal";
}

//Toggle to vertical orientation
function changeVert(){
    orient = "Vertical";
}

//Checks if input matches the calculated answer
function checkCorrect(){
    let text = document.getElementById("Answer");

    if(fractions){
        //document.getElementById("MathInstructions").innerText = answers[currentQuestion][0] + "/" + answers[currentQuestion][1];
        if(!text.value.includes("/")){
            return text.value + "/1" == answers[currentQuestion][0] + "/" + answers[currentQuestion][1];
        }
        return text.value == answers[currentQuestion][0] + "/" + answers[currentQuestion][1];
    }
    return text.value == answers[currentQuestion];
}

//Finds the lowest common multiple
function commonDenom(first, second){
    for(let i = first; i <= first * second; i = i + first){
        if(i % second == 0){
            return i;
        }
    }
}

//Solves the question, whether whole number or fractions
function createAnswer(numSet){
    //document.getElementById("MathInstructions").innerText = "Answer being processed";
    if(!fractions && numSet.length == 2){
        switch(operations){
            case add:
                answers.push(numSet[0] + numSet[1]);
                break;
            case sub:
                answers.push(numSet[0] - numSet[1]);
                break;
            case mult:
                answers.push(numSet[0] * numSet[1]);
                break;
            case divi:
                answers.push(numSet[0] / numSet[1]);
                break;
            default:
                answers.push("Huh?");    
        }
    }
    else if(fractions){
        let fracsAns;
        switch(operations){
            case add:
                fracsAns = [numSet[0] * numSet[3] + numSet[2] * numSet[1], numSet[1] * numSet[3]];
                break;
            case sub:
                fracsAns = [numSet[0] * numSet[3] - numSet[2] * numSet[1], numSet[1] * numSet[3]];
                break;
            case mult:
                fracsAns = [numSet[0] * numSet[2], numSet[1] * numSet[3]];
                break;
            case divi:
                fracsAns = [numSet[0] * numSet[3], numSet[1] * numSet[2]];
                break;
            default:
                fracsAns = ["Huh?", "Huh.."];    
        }
        let commDonom = findGCF(fracsAns[0], fracsAns[1]);

        fracsAns[0] = fracsAns[0] / commDonom;
        fracsAns[1] = fracsAns[1] / commDonom;
        answers.push(fracsAns);
    }
    else{
        answers.add("Huh?");
    }
}

//Paints the whiteboard
function createMathBoard(){
    const canvas = document.getElementById("MathGame");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

//Makes 2 fractions
function createFraction(){
    let mult1 = numbergen(1, 1), mult2 = numbergen(1, 1);
    let numer1, numer2, denom1, denom2;

    if(operations == add){
        numer1 = numberRand(16);
        numer2 = numberRand(16);
        denom1 = numberRand(20);
        denom2 = numberRand(20);
    }
    else if(operations == sub){
        var temp1, temp2;
        
        numer1 = numberRand(16);
        numer2 = numberRand(16);
        denom1 = numberRand(20);
        denom2 = numberRand(20);

        temp1 = numer1 * denom2;
        temp2 = numer2 * denom1;

        if(temp2 > temp1){
            temp1 = numer1;
            temp2 = numer2;
            numer1 = temp2;
            numer2 = temp1;

            temp1 = denom1;
            temp2 = denom2;
            denom1 = temp2;
            denom2 = temp1;
        }
    }
    else if(operations == mult){
        numer1 = numberRand(12) * mult1;
        numer2 = numberRand(12) * mult2;
        denom1 = numberRand(12) * mult2;
        denom2 = numberRand(12) * mult1;
    }
    else if(operations == divi){
        numer1 = numberRand(12) * mult1;
        numer2 = numberRand(12) * mult1;
        denom1 = numberRand(12) * mult2;
        denom2 = numberRand(12) * mult2;
    }

    let commDonom = findGCF(numer1, denom1);
    numer1 = numer1 / commDonom;
    denom1 = denom1 / commDonom;

    commDonom = findGCF(numer2, denom2)
    numer2 = numer2 / commDonom;
    denom2 = denom2 / commDonom;

    questions.push([numer1, denom1, numer2, denom2]);
    createAnswer([numer1, denom1, numer2, denom2]);
}

//Async method to create questions
function createQuestion(){
    let first;
    let second;
    //document.getElementById("MathInstructions").innerText = "Commence";
    if(operations == sub){
        second = numbergen(length2);
        first = Math.max(numbergen(length1, second), second);
    }
    else if(operations == divi){
        second = numbergen(length2, 1);
        first = second * (numbergen(length1) % 50);
    }
    else{
        //document.getElementById("MathInstructions").innerText = "Right place";
        first = numbergen(length1);
        second = numbergen(length2);
        //document.getElementById("MathInstructions").innerText = [first, second];
    }
    
    questions.push([first, second]);
    createAnswer([first, second]);

    //document.getElementById("MathInstructions").innerText = questions;
    if(questions.length >= 100){
        clearInterval(asyncQuestions);
        //document.getElementById("MathInstructions").innerText = answers;
    }
}

function digitCount(num){
    if(num/100 >= 1){
        return 3;
    }
    else if(num/10 >= 1){
        return 2;
    }
    else{
        return 1;
    }
}

function drawMathAcross(num1, num2, den1 = 0, den2 = 0){
    const canvas = document.getElementById("MathGame");
    const ctx = canvas.getContext("2d");

    ctx.font = "60px Verdana";
    ctx.fillStyle = "rgb(28, 47, 133)";

    if(den1 != 0 && den2 != 0){
        let maxDigit1 = Math.max(digitCount(num1), digitCount(den1));
        let maxDigit2 = Math.max(digitCount(num2), digitCount(den2));

        ctx.fillText(num1, 80 + (maxDigit1 - digitCount(num1)) * 30, 100);
        ctx.beginPath();
        ctx.moveTo(80, 110);
        ctx.lineTo(80 + maxDigit1 * 40, 110);
        ctx.stroke();
        ctx.fillText(den1, 80 + (maxDigit1 - digitCount(den1)) * 30, 160);

        ctx.fillText(operationConvert(), 80 + maxDigit1 * 40, 130);

        ctx.fillText(num2, 140 + maxDigit1 * 40 + (maxDigit2 - digitCount(num2)) * 20, 100);
        ctx.beginPath();
        ctx.moveTo(140 + maxDigit1 * 40, 110);
        ctx.lineTo(140 + maxDigit1 * 40 + maxDigit2 * 40, 110);
        ctx.stroke();
        ctx.fillText(den2, 140 + maxDigit1 * 40 + (maxDigit2 - digitCount(num2)) * 20, 160);
    }
    else{
        ctx.fillText(num1 + " " + operationConvert() + " " + num2, 80 ,120);
    }
    //document.getElementById("MathInstructions").innerText = questions[currentQuestion] + "||" + answers[currentQuestion];

    document.getElementById("Answer").focus();
}

function drawMathTopDown(num1, num2){
    const canvas = document.getElementById("MathGame");
    const ctx = canvas.getContext("2d");

    let maxDigit = Math.max(digitCount(num1), digitCount(num2));
    let start = 80;

    ctx.font = "60px Verdana";
    ctx.fillStyle = "rgb(28, 47, 133)";
    ctx.fillText(num1, start + 50 + (maxDigit - digitCount(num1)) * 40,100);
    ctx.fillText(operationConvert(), start, 160);
    ctx.fillText(num2, start + 50 + (maxDigit - digitCount(num2)) * 40,160);
    ctx.beginPath();
    ctx.moveTo(80, 165);
    ctx.lineTo(start + 50 + maxDigit * 40, 165);
    ctx.stroke();

    document.getElementById("Answer").focus();
}

function findGCF(num1, num2){
    for(let i = Math.min(num1, num2);i >= 1;i = i - 1){
        if(num1 % i == 0 && num2 % i == 0){
            return i;
        }
    }

    return 1;
}

//Random Number Generatior
function numberRand(upperlimit){
    return Math.floor(Math.random()*upperlimit) + 1;
}

//Random number generator.  Has systems to change starting point
function numbergen(digit, limited = 0){
    return Math.floor(Math.random()*(Math.pow(10, digit) - limited)) + limited;
}

function operationConvert(){
    switch(operations){
        case add:
            return "+";
        case sub:
            return "-";
        case mult:
            return "×";
        case divi:
            return "÷";
        default:
            return "Uh oh";      
    }
}

//Reassures that the answer is positive and/or no remainder
function operationLimits(num1, num2){
    if(operations == sub){
        return num1 >= num2;
    }
    else if(operations == divi){
        return num1 >= num2 && num1 % num2 == 0;
    }
    return true;
}

function resetMath(){
    questions = [];
    answers = [];
    correct = 0;
    currentQuestion = 0;
    document.getElementById("Answer").value = "";
}

//Core function
//Set the digits of the first number
function setLength1(elem){
    //document.getElementById("MathInstructions").innerText = elem.innerText;
    if(elem.innerText == "Single Digit"){
        length1 = 1;
    }
    else if(elem.innerText == "Double Digit"){
        length1 = 2;
    }
    //document.getElementById("MathInstructions").innerText = length1;
}

//Core Function
//Set the digits of the second number
function setLength2(elem){
    if(elem.innerText == "Single Digit"){
        length2 = 1;
    }
    else if(elem.innerText == "Double Digit"){
        length2 = 2;
    }
}

//Core Function
//Set the operation
function setOperation(elem){
    //document.getElementById("MathInstructions").innerText = elem.innerText;
    if(elem.innerText == add){
        operations = add;
    }
    else if(elem.innerText == sub){
        operations = sub;
    }
    else if(elem.innerText == mult){
        operations = mult;
    }
    else if(elem.innerText == divi){
        operations = divi;
    }
}

function startMathGame(){
    //document.getElementById("MathInstructions").innerText = "Commence";
    resetMath();
    createMathBoard();
    if(fractions){
        createFraction();
        asyncQuestions = setInterval(createFraction, 10);
        drawMathAcross(questions[currentQuestion][0], questions[currentQuestion][2], questions[currentQuestion][1], questions[currentQuestion][3]);
    }
    else{
        createQuestion();
        asyncQuestions = setInterval(createQuestion, 10);
        if(orient == "Horizontal"){
            drawMathAcross(questions[currentQuestion][0], questions[currentQuestion][1]);
        }
        else{
            drawMathTopDown(questions[currentQuestion][0], questions[currentQuestion][1]);
        }
    }
    
    
    
    
    startTime = Date.now();
}

function tallyResults(){
    const canvas = document.getElementById("MathGame");
    const ctx = canvas.getContext("2d");
    let results = "";
    
    createMathBoard();
    ctx.font = "34px Verdana";
    ctx.fillStyle = "rgb(28, 47, 133)";

    results = "Correct Answers: " + correct;
    ctx.fillText(results, 30, 90);
    results = "Time: " + Math.floor((Date.now() - startTime)/1000) + "s";
    ctx.fillText(results, 30, 150);
}