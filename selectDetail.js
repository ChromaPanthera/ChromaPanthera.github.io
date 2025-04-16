function highlight(elem){
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

//This fires, window doesn't work
function jumpTo(elem){
    //document.getElementById("Main").textContent = elem.offsetHeight;
    window.scrollTo(0, document.getElementById("blogCore").offsetHeight * (elem.id - 1));
}