
let movimento = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  if (mouseX < width / 2) {

    background(255, 80, 185);
    stroke(255);

    let distancia = dist(mouseX, mouseY, width / 4, height / 2);
    let espessura = map(distancia, 0, width / 2, 1, 15);
    espessura = constrain(espessura, 1, 15);

    strokeWeight(espessura);

    if (mouseIsPressed === true) {
      movimento += 2;
    }

    LinhasHorizontaisRosas();

  } else {

    background(175, 210, 255);
    stroke(0);

    let distancia = dist(mouseX, mouseY, width / 2 + width / 4, height / 2);
    let espessura = map(distancia, 0, width / 2, 1, 22);
    espessura = constrain(espessura, 1, 22);

    strokeWeight(espessura);

    if (mouseIsPressed === true) {
      movimento += 2;
    }

    LinhasVerticaisAzuis();

  }
}


function LinhasHorizontaisRosas() {

  for (let y = -height; y < height * 2; y += 17) {
    line(0, y + movimento % 17, width, y + movimento % 17);
  }

}


function LinhasVerticaisAzuis() {

  for (let x = -width; x < width * 2; x += 50) {
    line(x + movimento % 50, 0, x + movimento % 50, height);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
