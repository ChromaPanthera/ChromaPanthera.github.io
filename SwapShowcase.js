//document.getElementById("Teach").textContent = elem.style.borderColor;
function assistImage(elem){
    if(elem.innerText == "prototype"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/AssistFront.PNG";
        document.getElementById("ProtoDisplay4").src = "";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "scheduler"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/ScheduleAdd.PNG";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/Schedule.PNG";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/ScheduleFilter.PNG";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "Sticky notes"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/ChecklistDone.PNG";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/Checklist.PNG";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/ChecklistSwitch.PNG";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "stop watch"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/StopwatchPlay.PNG";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/Stopwatch.PNG";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/StopwatchCount.PNG";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "Pomodoro"){
        document.getElementById("ProtoDisplay1").src = "";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/PomodoroTime.PNG";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/PomodoroRest.PNG";
        document.getElementById("ProtoDisplay4").src = "";
        document.getElementById("ProtoDisplay5").src = "";
    }
    else if(elem.innerText == "cookbook"){
        document.getElementById("ProtoDisplay1").src = "image/Coding/AssistBuddy/CookbookRecipe.PNG";
        document.getElementById("ProtoDisplay2").src = "image/Coding/AssistBuddy/CookbookTooltip.PNG";
        document.getElementById("ProtoDisplay3").src = "image/Coding/AssistBuddy/CookbookIngredient.PNG";
        document.getElementById("ProtoDisplay4").src = "image/Coding/AssistBuddy/Cookbook.PNG";
        document.getElementById("ProtoDisplay5").src = "image/Coding/AssistBuddy/CookbookMaker.PNG";
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
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/StartScreen.PNG";
        document.getElementById("SplashDisplay4").src = "";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "Neo Bomberman"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "image/Games/NeoBombermanStart.jpg";
        document.getElementById("SplashDisplay3").src = "image/Games/NeoBombermanFish.PNG";
        document.getElementById("SplashDisplay4").src = "image/Games/neo_bombermanBouncer.jpg";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "power-ups"){
        document.getElementById("SplashDisplay1").src = "image/Coding/Splash/3DCup.PNG";
        document.getElementById("SplashDisplay2").src = "image/Coding/Splash/WaterSprite.PNG";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/3DDemonHead.PNG";
        document.getElementById("SplashDisplay4").src = "image/Coding/Splash/DevilSprite.PNG";
        document.getElementById("SplashDisplay5").src = "image/Coding/Splash/3DRoller.PNG";
    }
    else if(elem.innerText == "keyboard"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/Controls.PNG";
        document.getElementById("SplashDisplay4").src = "";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "Blender"){
        document.getElementById("SplashDisplay1").src = "image/Coding/Splash/3DBush.PNG";
        document.getElementById("SplashDisplay2").src = "image/Coding/Splash/3DMan.PNG";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/3DTree.PNG";
        document.getElementById("SplashDisplay4").src = "image/Coding/Splash/3DBarrel.PNG";
        document.getElementById("SplashDisplay5").src = "image/Coding/Splash/3DPileOfBombs.PNG";
    }
    else if(elem.innerText == "creation"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/MapMaker.PNG";
        document.getElementById("SplashDisplay4").src = "";
        document.getElementById("SplashDisplay5").src = "";
    }
    else if(elem.innerText == "maps"){
        document.getElementById("SplashDisplay1").src = "";
        document.getElementById("SplashDisplay2").src = "image/Coding/Splash/BomberGame.PNG";
        document.getElementById("SplashDisplay3").src = "image/Coding/Splash/Twilight.PNG";
        document.getElementById("SplashDisplay4").src = "image/Coding/Splash/Lights.PNG";
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