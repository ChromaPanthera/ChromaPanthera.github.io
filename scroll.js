window.addEventListener("scroll", sidebarAdjuster);

function sidebarAdjuster(){
    var scrollbar = document.getElementById("tableOfContent");
    let barBot = document.getElementsByClassName("Bar")[0].getBoundingClientRect();

    scrollbar.style.top = Math.max(0, barBot.bottom + 10) + 'px';

    //document.getElementById("Teach").textContent = scrollbar.style.top;
}

function tester(){
    let c = document.getElementById("Teach");
    c.textContent = "It Works";
}