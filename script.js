function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    background('lightblue');
    drawFlork();
}

function drawFlork() {
    strokeWeight(6);
    stroke('black');

    // Cuerpo
    fill('lightblue');
    beginShape();
    vertex(400, 400);
    bezierVertex(300, 550, 500, 550, 400, 400);
    endShape(CLOSE);

    // Cabeza
    fill('lightblue');
    beginShape();
    vertex(400, 400);
    bezierVertex(350, 300, 450, 300, 400, 400);
    endShape(CLOSE);

    // Ojos
    fill('black');
    ellipse(380, 360, 20, 20); // Ojo izquierdo
    ellipse(420, 360, 20, 20); // Ojo derecho

    // Boca
    noFill();
    strokeWeight(4);
    arc(400, 380, 50, 20, 0, PI); // Boca

    // Brazos
    strokeWeight(6);
    line(340, 420, 290, 480); // Brazo izquierdo
    line(460, 420, 510, 480); // Brazo derecho

    // Pastel
    fill('pink');
    rect(270, 480, 80, 40); // Base del pastel
    fill('white');
    rect(285, 460, 50, 30); // Parte superior del pastel

    // Velas
    fill('yellow');
    rect(305, 440, 10, 20); // Vela

    // Fuego de las velas
    fill('orange');
    ellipse(310, 430, 10, 10); // Fuego

    // Sombrero
    fill('pink');
    triangle(390, 300, 410, 300, 400, 270); // Sombrero

    // Texto superior
    fill('darkmagenta');
    textSize(60);
    textAlign(CENTER);
    text("Wendy", width / 2, 100);

    // Texto inferior
    textSize(40);
    text("Feliz Cumpleaños", width / 2, 580);
}
