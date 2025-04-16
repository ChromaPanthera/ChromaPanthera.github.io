let FoodCount = 0;
let GameCount = 0;;

function foodSwitch(){
    //document.getElementById("answer").innerText = "FoodCount";
    FoodCount = (FoodCount + 1) % 11;

    let image = document.getElementById("ShowcaseFood");
    
    switch(FoodCount){
        case 0:
            image.src = "image/Food/curry.jpg"
            break;
        case 1:
            image.src = "image/Food/dumplings.jpg"
            break;
        case 2:
            image.src = "image/Food/Handrolls.jpg"
            break;
        case 3:
            image.src = "image/Food/Strawberry cake.jpg"
            break;
        case 4:
            image.src = "image/Food/Zhong.jpg"
            break;
        case 5:
            image.src = "image/Food/kdog.jpg"
            break;
        case 6:
            image.src = "image/Food/brunch plate.jpg"
            break;
        case 7:
            image.src = "image/Food/bingsu.jpg"
            break;
        case 8:
            image.src = "image/Food/fish&chips.jpg"
            break;
        case 9:
            image.src = "image/Food/durian cake.jpg"
            break;
        case 10:
            image.src = "image/Food/eel.jpg"
            break;
        default:
            break;
    }
}

//Core
function GameSwitch(){
    GameCount = (GameCount + 1) % 4;

    let image = document.getElementById("ShowcaseGames");

    switch(GameCount){
        case 0:
            image.src = "image/Games/AOE2.gif"
            break;
        case 1:
            image.src = "image/Games/AOE2 Cannons.png"
            break;
        case 2:
            image.src = "image/Games/AOE2 Bridge.png"
            break;
        case 3:
            image.src = "image/Games/Inferno.png"
            break;
        default:
            break;
    }
}