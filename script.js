function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    background('lightblue');
    drawFigure();
}

function drawFigure() {
    // Cuerpo
    strokeWeight(6);
    stroke('black');
    fill('#FFF59D');
    rect(350, 200, 100, 200);  // Cuerpo

    // Cabeza
    fill('#FFF59D');
    ellipse(400, 150, 120, 120);  // Cabeza

    // Ojos
    fill('black');
    ellipse(380, 140, 20, 20);  // Ojo izquierdo
    ellipse(420, 140, 20, 20);  // Ojo derecho

    // Boca
    noFill();
    stroke('black');
    strokeWeight(4);
    arc(400, 160, 50, 30, 0, PI);  // Boca

    // Brazos
    strokeWeight(6);
    line(350, 250, 300, 300);  // Brazo izquierdo
    line(450, 250, 500, 300);  // Brazo derecho

    // Pastel
    fill('pink');
    rect(300, 300, 200, 100);  // Base del pastel
    fill('white');
    rect(330, 270, 140, 50);  // Parte superior del pastel

    // Velas
    fill('yellow');
    rect(360, 260, 10, 20);  // Vela izquierda
    rect(430, 260, 10, 20);  // Vela derecha

    // Fuego de las velas
    fill('orange');
    ellipse(365, 250, 10, 10);  // Fuego izquierda
    ellipse(435, 250, 10, 10);  // Fuego derecha

    // Texto superior
    fill('darkmagenta');
    textSize(60);
    textAlign(CENTER);
    text("Wendy", width / 2, 100);

    // Texto inferior
    textSize(40);
    text("Feliz Cumpleaños", width / 2, 550);
}
