// set missiles
var missiles = [];

// function to initialize missiles
function drawMissiles() {
    var content = "";
    for(var i = 0; i < missiles.length; i++) {
        content += "<div class='missile' style='left:"+missiles[i].left+"px; top:"+missiles[i].top+"px'></div>";
    }
    document.getElementById("missiles").innerHTML = content;
}

// function to move missiles
function moveMissiles() {
    for(var i = 0; i < missiles.length; i++) {
        missiles[i].top -= 10;
    }
}