// set inital coordinates for enemies
var enemies = [
    {left: 300, top: 150},
    {left: 350, top: 200},
    {left: 400, top: 250},
    {left: 500, top: 250},
    {left: 550, top: 200},
    {left: 600, top: 150}
]

// function to initialize enemies
function drawEnemies() {
    var content = "";
    for(var i = 0; i < enemies.length; i++) {
        content += "<div class='enemy' style='left:"+enemies[i].left+"px; top:"+enemies[i].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}
drawEnemies();

// function to move enemies
function moveEnemies() {
    for(var i = 0; i < enemies.length; i++) {
        enemies[i].top += 1;
    }
}

function gameLoop() {
    moveEnemies();
    drawEnemies();
    moveMissiles();
    drawMissiles();
    setTimeout(gameLoop, 50);
}
gameLoop();