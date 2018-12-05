// set initial coordinates for player
var player = {
    left: 450,
    top: 620
}

// function to initalize player
function drawPlayer() {
    var content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
    document.getElementById("players").innerHTML = content;
}
drawPlayer();

// function to move player
document.onkeydown = function(e) {
    // move left
    if(e.keyCode == 37 && player.left > 0) {
        player.left -= 10;
    }
    // move right
    if(e.keyCode == 39 && player.left < 840) {
        player.left += 10;
    }
    // move up
    if(e.keyCode == 38 && player.top > 430) {
        player.top -= 10;
    }
    // move down
    if(e.keyCode == 40 && player.top < 630) {
        player.top += 10;
    }
    // fire missile
    if(e.keyCode == 32) {
        missiles.push({left:player.left+34, top:player.top-8});
    }
    drawPlayer();
    drawMissiles();
}