let spacing = 15;
let amp = 50;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255, 15);
    textFont('Archivo Black');
    textSize(144);
    textAlign(CENTER);
    strokeWeight(4);
    drawSinWave();

    noStroke();
    text("erin b.", width/2, height/2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }

function drawSinWave() {
    for(i = -width/2; i <= width/2 / 15; i++) {
        strokeWeight(5);
        stroke(125)
        point(i * spacing + sin(i * PI + frameCount / (amp / 2)) * amp + width/2, cos(i / PI + frameCount / (amp / 2)) * amp + height/2 - amp)
  }
}

