var sync;
let r = 235;
let g = 245;
let b = 94;
let a = 1;
let dr = 1;
let dg = 1;
let db = 1;
let da = -1;

function colourgrad(elem){
    let rand = Math.floor(Math.random() * 7) + 1;
    if(r + rand * dr < 0 || r + rand * dr > 255){
        dr = -dr;
    }
    r = r + rand * dr;

    rand = Math.floor(Math.random() * 2) + 1;
    if(g + rand * dg < 0 || g + rand * dg > 255){
        dg = -dg;
    }
    g = g + rand * dg;

    rand = Math.floor(Math.random() * 4) + 1;
    if(b + rand * db < 0 || b + rand * db > 255){
        db = -db;
    }
    b = b + rand * db;

    a = a + da * 0.04;

    //elem.innerText = r;
    if(a <= 0.32 || a >= 1){
        da = -da;
    }

    elem.style.color = "rgba(" + r + "," +  g + "," + b + "," + a + ")";
}

function starter(elem){
    if(sync == null){
        sync = setInterval(colourgrad, 50, elem);
    }
}