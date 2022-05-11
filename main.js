canvas = new fabric.Canvas("myCanvas");
blockwidth = 30;
blockheight = 30;
playerX = 10;
playerY = 10;
playerobject = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerobject);
    });
}

function newimage(get_img) {
    fabric.Image.fromURL(get_img, function(Img) {
        blockimgobject = Img;
        blockimgobject.scaleToWidth(blockwidth);
        blockimgobject.scaleToHeight(blockheight);
        blockimgobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockimgobject);
    });

}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log("keypressed=" + keypressed);
    if (keypressed == 80 && e.shiftKey) {
        console.log("p & shift pressed together");
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10
        document.getElementById("current_width").innerHTML = blockwidth;
        document.getElementById("current_height").innerHTML = blockheight;

    }
    if (keypressed == 77 && e.shiftKey) {
        console.log("m & shift pressed together");
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("current_width").innerHTML = blockwidth;
        document.getElementById("current_height").innerHTML = blockheight;
    }
    if (keypressed == 37) {
        console.log("left arrow key");
        left();
    }
    if (keypressed == 38) {
        console.log(" up arrow key");
        up();
    }
    if (keypressed == 39) {
        console.log(" right arrow key");
        right();
    }
    if (keypressed == 40) {
        console.log(" down arrow key");
        down();
    }
    if (keypressed == 87) {
        console.log("W key pressed");
        newimage("wall.jpg");
    }
    if (keypressed == 71) {
        console.log("G key pressed");
        newimage("ground.png");
    }
    if (keypressed == 76) {
        console.log("L key pressed");
        newimage("light_green.png");
    }
    if (keypressed == 84) {
        console.log("T key pressed");
        newimage("trunk.jpg");
    }
    if (keypressed == 82) {
        console.log("R key pressed");
        newimage("roof.jpg");
    }
    if (keypressed == 89) {
        console.log("Y key pressed");
        newimage("yellow_wall.png");
    }
    if (keypressed == 68) {
        console.log("D key pressed");
        newimage("dark_green.png");
    }
    if (keypressed == 85) {
        console.log("U key pressed");
        newimage("unique.png");
    }
    if (keypressed == 67) {
        console.log("C key pressed")
        newimage("cloud.jpg");
    }
}

function up() {
    if (playerY > 0) {
        playerY = playerY - blockheight;
        console.log("blockheight=" + blockheight);
        canvas.remove(playerobject);
        playerupdate();
    }

}

function down() {
    if (playerY < 400) {
        playerY = playerY + blockheight;
        console.log("blockheight=" + blockheight);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockwidth;
        console.log("blockwidth=" + blockwidth);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function right() {
    if (playerX < 600) {
        playerX = playerX + blockwidth;
        console.log("blockwidth=" + blockwidth);
        canvas.remove(playerobject);
        playerupdate();
    }
}