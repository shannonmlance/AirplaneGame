// set initial coordinates for player
var player = {
    left: 450,
    top: 620
}

// set inital coordinates for enemies
var enemies = [
    {left: 300, top: 150},
    {left: 350, top: 200},
    {left: 400, top: 250},
    {left: 500, top: 250},
    {left: 550, top: 200},
    {left: 600, top: 150}
]

// function to initalize player
function drawPlayer() {
    var content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
    document.getElementById("players").innerHTML = content;
}

// function to initialize enemies
function drawEnemies() {
    var content = "";
    for(var i = 0; i < enemies.length; i++) {
        content += "<div class='enemy' style='left:"+enemies[i].left+"px; top:"+enemies[i].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}

// invoke functions
drawPlayer();
drawEnemies();

// function to move player
document.onkeydown = function(e) {
    // move left
    if(e.keyCode == 37) {
        if(player.left > 0) {
            player.left -= 10;
        }
    }
    // move right
    if(e.keyCode == 39) {
        if(player.left < 840) {
            player.left += 10;
        }
    }
    // move up
    if(e.keyCode == 38) {
        if(player.top > 330) {
            player.top -= 10;
        }
    }
    // move down
    if(e.keyCode == 40) {
        if(player.top < 630) {
            player.top += 10;
        }
    }
    drawPlayer();
}