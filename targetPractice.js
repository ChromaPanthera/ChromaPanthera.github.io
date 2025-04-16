//document.getElementById()

/*
Click button
1. Start 5 second countdown
2. Readjust the window
3. Disable scroll?
Start timer for 60
Spawn target every 1.5seconds
Change to 1 second after 5 targets
Change to 0.5 second after 10 targets
Change to 0.2 second after 15 targets
Spawn 20 targets and end
Targets exist for 2 seconds before disappearing
During session:
Cannot scroll
Clicking the canvas triggers actions
1. Find where it was clicked
2. Decide if target hit
2b. If target gets hit, removes the target
3. Record location and time
End game
Show number of targets hit
Show accuracy of clicks
Show precision of how centred clicks are
*/

//Static record
let spawnTime = [];
//Working record
let active = [];
//Static record
let shotsCount = 0;
//Static record
let breakTime = [];
let targetCounter = 0;
let base = 1500;
let stage = 0;
let diameter = 50;
var asyncStuff, clock;
let decayTime = 2000;

//Starts the game
function beginGame(){
    resetTargetSettings();
    asyncStuff = setInterval(spawnTarget, base - 350 * stage);
    clock = setInterval(clocker, 10);
}

//Check if target was clicked
function checkHit(x, y, targetx, targety){
    //document.getElementById("Status").innerText = [x, y];
    return Math.pow(x - (targetx + diameter/2), 2) + Math.pow(y - (targety + diameter/2), 2) <= Math.pow(diameter/2, 2);
}

//Check if top left corners are within range (should be centre, but top left works too)
function checkSpawn(targetx, targety){
    const rule = (elem) => Math.pow(Math.pow(elem[1]- targetx, 2) + Math.pow(elem[2] - targety, 2), 1/2) > diameter;

    //document.getElementById("Status").innerText = Math.pow(Math.pow(active[0][1]- (targetx + diameter/2), 2) + Math.pow(active[0][2] - (targety + diameter/2), 2), 1/2);
    return active.every(rule);
}

//Checks if the first target is out for 2 seconds
function clocker(){
    let date = Date.now();
    if(active.length != 0 && date - active[0][3] > decayTime){
        removeTarget(active[0][1] + diameter/2, active[0][2] + diameter/2);
        breakTime.push([active[0][0], Infinity, Infinity, date]);
        active.splice(0, 1);
    }
    else if(asyncStuff == 0 && active.length == 0){
        statCalculate();
    }
}

//Mouseclick
function getCoords(event){
    let x = event.offsetX;
    let y = event.offsetY;

    return [x, y];
}

//Makes the game faster, or stops it
function readjustSpawnTime(){
    clearInterval(asyncStuff);
    asyncStuff = 0;
    stage = stage + 1;
    if(stage < 4){
        asyncStuff = setInterval(spawnTarget, base - 350 * stage);
    }
}

//Draws circle to cover target
function removeTarget(x, y){
    const targetArea = document.getElementById("targetCanvas");
    const ctx = targetArea.getContext("2d");

    ctx.beginPath();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.arc(x, y, diameter/2 + 1, 0, 2 *Math.PI);
    ctx.lineWidth = 0;
    ctx.fill();
    ctx.stroke();
}

//Hard reset the game
function resetTargetSettings(){
    const targetArea = document.getElementById("targetCanvas");
    const ctx = targetArea.getContext("2d");

    spawnTime = [];
    active = [];
    breakTime = [];
    shotsCount = 0;
    targetCounter = 0;
    stage = 0;
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, targetArea.clientWidth, targetArea.clientHeight);
}

//Core function
function shoot(event){
    let date = Date.now();
    shotsCount = shotsCount + 1;
    if(clock != 0){
        let coord = getCoords(event);
        //document.getElementById("Status").innerText = coord;
        for(let i = 0; i < active.length; i = i + 1) {
            if(checkHit(coord[0], coord[1], active[i][1], active[i][2])){
                removeTarget(active[i][1] + diameter/2, active[i][2]  + diameter/2);
                breakTime.push([active[i][0], coord[0], coord[1], date]);
                active.splice(i, 1);
                break;
            }
        }
    }
}

//Creates a target (or attempts to)
function spawnTarget(){
    const targetArea = document.getElementById("targetCanvas");
    const ctx = targetArea.getContext("2d");
    const img = document.getElementById("dartboard");
    var time = Date.now();

    let x = Math.floor(Math.random()*(targetArea.getBoundingClientRect().width - diameter));
    let y = Math.floor(Math.random()*(targetArea.getBoundingClientRect().height - diameter));

    while(!checkSpawn(x, y)){
        x = Math.floor(Math.random()*(targetArea.getBoundingClientRect().width - diameter));
        y = Math.floor(Math.random()*(targetArea.getBoundingClientRect().height - diameter));
    }

    ctx.drawImage(img, x, y, diameter, diameter);
    targetCounter = targetCounter + 1;

    //Three numbers?
    spawnTime.push([targetCounter, x, y, time]);
    active.push([targetCounter, x, y, time]);

    //document.getElementById("Status").innerText = active;

    if(targetCounter / (5 * 2 ** stage) >= 1){
        readjustSpawnTime();
    }
}

//Core function
function starterTarget(){
    const targetArea = document.getElementById("targetCanvas");

    targetArea.addEventListener("click", shoot);

    resetTargetSettings();
}

//Core function
function statCalculate(){
    let status = document.getElementById("Status");
    let accuracySet = [];
    let accuracy = Infinity;
    let timeDiff = [];
    let fastest = Infinity;

    //a, b are elements of breakTime
    breakTime.sort(function(a, b){return a[0] - b[0]});

    for(let i = 0; i < breakTime.length; i = i + 1){
        timeDiff.push(breakTime[i][3] - spawnTime[i][3]);
    }

    //Remove non-clicked targets
    timeDiff = timeDiff.filter(function(time){return time < decayTime});

    for(let i = 0; i < timeDiff.length; i = i + 1){
        if(timeDiff[i] < fastest){
            fastest = timeDiff[i];
        }
    }

    //Precision technically, oops
    for(let i = 0; i < breakTime.length; i = i + 1){
        accuracySet.push(Math.pow(Math.pow(breakTime[i][1] - (spawnTime[i][1] + diameter/2), 2) + Math.pow(breakTime[i][2] - (spawnTime[i][2] + diameter/2), 2), 1/2));
    }

    for(let i = 0; i < accuracySet.length; i = i + 1){
        if(accuracySet[i] < accuracy){
            accuracy = accuracySet[i];
        }
    }

    status.innerText = "Best Precision: " + Math.floor(accuracy) + 
        " pixels \n Best Speed: " + fastest/1000 + 
        " seconds \n Accuracy: " + Math.floor((timeDiff.length / shotsCount)*1000)/10 + 
        "% \n Targets Hit: " + timeDiff.length +"/"+ spawnTime.length;

    stopGame();
}

//Shuts down the game
function stopGame(){
     clearInterval(asyncStuff);
     clearInterval(clock);
     asyncStuff = 0;
     clock = 0;
     //document.getElementById("Status").innerText = "Done";
}