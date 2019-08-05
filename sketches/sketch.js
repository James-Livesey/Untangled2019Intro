class Snake {
    constructor(initialX, initialY, colour, plumpiness, maxLength) {
        this.x = initialX;
        this.y = initialY;
        this.colour = colour;
        this.plumpiness = plumpiness;
        this.maxLength = maxLength;

        this.positionMemory = [[initialX, initialY]];
    }

    draw() {
        if (this.positionMemory.length < 2) {
            fill(... this.colour);
            
            circle(this.x, this.y, this.plumpiness, this.plumpiness);
        } else {

            for (var i = 0; i < this.positionMemory.length; i++) {
                fill(
                    Math.min(this.colour[0] + (255 * ((this.positionMemory.length - i) / this.positionMemory.length)), 255),
                    Math.min(this.colour[1] + (255 * ((this.positionMemory.length - i) / this.positionMemory.length)), 255),
                    Math.min(this.colour[2] + (255 * ((this.positionMemory.length - i) / this.positionMemory.length)), 255)
                );
                
                circle(this.positionMemory[i][0], this.positionMemory[i][1], this.plumpiness, this.plumpiness);
            }
        }
    }

    translate(x, y) {
        this.positionMemory.push([this.x + x, this.y + y]);

        if (this.positionMemory.length > this.maxLength) {
            this.positionMemory.shift();
        }

        this.x = this.positionMemory[this.positionMemory.length - 1][0];
        this.y = this.positionMemory[this.positionMemory.length - 1][1];
    }
}

var snakey = new Snake(window.innerWidth / 3, window.innerHeight / 2, [255, 0, 0], 100, 200);
var slithery = new Snake((window.innerWidth / 3) * 2, window.innerHeight / 2, [0, 0, 255], 100, 200);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(255);

    snakey.draw();
    slithery.draw();

    if (keyIsDown(87)) {
        snakey.translate(0, -2);
    } else if (keyIsDown(83)) { 
        snakey.translate(0, 2);
    }

    if (keyIsDown(65)) {
        snakey.translate(-2, 0);
    } else if (keyIsDown(68)) {
        snakey.translate(2, 0);
    }

    if (keyIsDown(UP_ARROW)) {
        slithery.translate(0, -2);
    } else if (keyIsDown(DOWN_ARROW)) { 
        slithery.translate(0, 2);
    }

    if (keyIsDown(LEFT_ARROW)) {
        slithery.translate(-2, 0);
    } else if (keyIsDown(RIGHT_ARROW)) {
        slithery.translate(2, 0);
    }
}