//document.getElementById("Teach").textContent = elem.style.borderColor;
function assistImage(elem){
    if(elem.innerText == "prototype"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/AssistFront.png";
        document.getElementById("ProtoDisplay4").src = "";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "scheduler"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/ScheduleAdd.png";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/Schedule.png";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/ScheduleFilter.png";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "Sticky notes"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/ChecklistDone.png";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/Checklist.png";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/ChecklistSwitch.png";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "stop watch"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/StopwatchPlay.png";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/Stopwatch.png";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/StopwatchCount.png";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "Pomodoro"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/PomodoroTime.png";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/PomodoroRest.png";
        document.getElementById("ProtoDisplay4").src = "";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "cookbook"){
        document.getElementById("ProtoDisplay1").src = "image/Coding/AssistBuddy/CookbookRecipe.png";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/CookbookTooltip.png";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/CookbookIngredient.png";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/Cookbook.png";
        document.getElementById("ProtoDisplay5").src = "image/Coding/AssistBuddy/CookbookMaker.png";
    }
    else{
        if(elem.style.overflow == ""){
            elem.style.overflow = "scroll";
            elem.style.borderColor = "rgb(221, 184, 18)";
        }
        else if(elem.style.overflow == "hidden"){
            elem.style.overflow = "scroll";
            elem.style.borderColor = "rgb(221, 184, 18)";
        }
        else{
            //document.getElementById("Teach").textContent = elem.style.borderColor;
            elem.style.overflow = "hidden";
            elem.style.borderColor = "rgb(122, 231, 250)";
        }
    }
}

function bomberImage(elem){
    if(elem.innerText == "game"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/StartScreen.png";
        document.getElementById("SplashDisplay4").src = "";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "Neo Bomberman"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "image/Games/NeoBombermanStart.jpg";
        document.getElementById("SplashDisplay3").src = "image/Games/NeoBombermanFish.png";
        document.getElementById("SplashDisplay4").src = "image/Games/neo_bombermanBouncer.jpg";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "power-ups"){
        document.getElementById("SplashDisplay1").src = "image/Coding/Splash/3DCup.png";
        document.getElementById("SplashDisplay2").src = "image/Coding/Splash/WaterSprite.png";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/3DDemonHead.png";
        document.getElementById("SplashDisplay4").src = "image/Coding/Splash/DevilSprite.png";
        document.getElementById("SplashDisplay5").src = "image/Coding/Splash/3DRoller.png";
    }
    else if(elem.innerText == "keyboard"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/Controls.png";
        document.getElementById("SplashDisplay4").src = "";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "Blender"){
        document.getElementById("SplashDisplay1").src = "image/Coding/Splash/3DBush.png";
        document.getElementById("SplashDisplay2").src = "image/Coding/Splash/3DMan.png";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/3DTree.png";
        document.getElementById("SplashDisplay4").src = "image/Coding/Splash/3DBarrel.png";
        document.getElementById("SplashDisplay5").src = "image/Coding/Splash/3DPileOfBombs.png";
    }
    else if(elem.innerText == "creation"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/MapMaker.png";
        document.getElementById("SplashDisplay4").src = "";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "maps"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "image/Coding/Splash/BomberGame.png";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/Twilight.png";
        document.getElementById("SplashDisplay4").src = "image/Coding/Splash/Lights.png";
        document.getElementById("SplashDisplay5").src = "";
    }
    else{
        if(elem.style.overflow == ""){
            elem.style.overflow = "scroll";
            elem.style.borderColor = "rgb(221, 184, 18)";
        }
        else if(elem.style.overflow == "hidden"){
            elem.style.overflow = "scroll";
            elem.style.borderColor = "rgb(221, 184, 18)";
        }
        else{
            //document.getElementById("Teach").textContent = elem.style.borderColor;
            elem.style.overflow = "hidden";
            elem.style.borderColor = "rgb(122, 231, 250)";
        }
    }
}