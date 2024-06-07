function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    background('lightblue');
    drawFigure();
}

function drawFigure() {
    strokeWeight(15);
    stroke('black');

    // Primer segmento
    beginShape();
    noFill();
    vertex(400, 300);  // Ajusta la posición inicial
    bezierVertex(400 + 134.87, 300 - 11.44, 400 + 107.51, 300 - 11.44, 400 + 186.17, 300 + 93.86);
    bezierVertex(400 + 203.9, 300 + 93.86, 400 + 118.68, 300 + 30.91, 400 + 247.8, 300 + 89.43);
    bezierVertex(400 + 366.94, 300 + 26.42, 400 + 3.64, 300 + 33.88, 400 + 80.93, 300 + 33.88);
    endShape();

    // Ojo derecho
    fill('black');
    noStroke();
    ellipse(600, 235, 21.84 * 2);

    // Segundo segmento
    noFill();
    stroke('black');
    beginShape();
    vertex(360, 340);
    bezierVertex(360 + 120.27, 340 + 14.26, 360 + 120.27 + 120.27, 340 + 14.26 + 120.27, 360 + 120.27 + 120.27 + 120.27, 340 + 14.26 + 120.27 + 120.27);
    endShape();

    // Brazo derecho
    beginShape();
    vertex(350, 450);
    vertex(350 + 68.74 * cos(radians(235.33)), 450 + 68.74 * sin(radians(235.33)));
    vertex(350 + 68.74 * cos(radians(235.33)) + 24.72 * cos(radians(225)), 450 + 68.74 * sin(radians(235.33)) + 24.72 * sin(radians(225)));
    vertex(350 + 68.74 * cos(radians(235.33)) + 24.72 * cos(radians(225)) + 78.61 * cos(radians(130.7)), 450 + 68.74 * sin(radians(235.33)) + 24.72 * sin(radians(225)) + 78.61 * sin(radians(130.7)));
    endShape();

    // Pie derecho
    fill('black');
    beginShape();
    vertex(240, 515);
    vertex(240 - 75.88, 515);
    bezierVertex(240 - 75.88 + 45.07 * cos(radians(302.66)), 515 + 45.07 * sin(radians(302.66)), 240 - 75.88 + 45.07 * cos(radians(302.66)) + 45.07 * cos(radians(302.66)), 515 + 45.07 * sin(radians(302.66)) + 45.07 * sin(radians(302.66)), 240 - 75.88 + 45.07 * cos(radians(302.66)) + 45.07 * cos(radians(302.66)) + 45.07 * cos(radians(302.66)), 515 + 45.07 * sin(radians(302.66)) + 45.07 * sin(radians(302.66)) + 45.07 * sin(radians(302.66)));
    endShape(CLOSE);

    // Pie izquierdo
    noFill();
    stroke('black');
    beginShape();
    vertex(320, 515);
    vertex(320 - 173.34, 515);
    endShape();

    // Ojo izquierdo
    fill('black');
    ellipse(480, 235, 8.52 * 2);

    // Ojo derecho
    ellipse(380, 245, 8.52 * 2);

    // Mejilla izquierda
    fill('pink');
    strokeWeight(8);
    beginShape();
    vertex(432, 235);
    bezierVertex(432 + 107.03 * cos(radians(320.51)), 235 + 107.03 * sin(radians(320.51)), 432 + 107.03 * cos(radians(320.51)) + 107.03 * cos(radians(320.51)), 235 + 107.03 * sin(radians(320.51)) + 107.03 * sin(radians(320.51)), 432 + 107.03 * cos(radians(320.51)) + 107.03 * cos(radians(320.51)) + 107.03 * cos(radians(320.51)), 235 + 107.03 * sin(radians(320.51)) + 107.03 * sin(radians(320.51)) + 107.03 * sin(radians(320.51)));
    endShape(CLOSE);

    // Cuerpo
    fill('#FFF59D');
    strokeWeight(6);
    beginShape();
    vertex(300, 415);
    vertex(300, 415 + 64.60);
    vertex(300 - 163.41, 415 + 64.60);
    vertex(300 - 163.41, 415);
    endShape(CLOSE);

    // Vestido
    fill('#FFC0CB');
    beginShape();
    vertex(300, 445);
    vertex(300, 445 + 21.82);
    vertex(300 - 163.41, 445 + 21.82);
    vertex(300 - 163.41, 445);
    endShape(CLOSE);

    // Banda del vestido
    fill('#FFF59D');
    beginShape();
    vertex(230, 475);
    vertex(230, 475 + 29.94);
    vertex(230 - 26.09, 475 + 29.94);
    vertex(230 - 26.09, 475);
    endShape(CLOSE);

    // Detalle de la banda
    noFill();
    beginShape();
    vertex(215, 505);
    vertex(215, 505 + 10.69);
    endShape();

    // Botón del vestido
    fill('orange');
    beginShape();
    vertex(225, 515);
    vertex(225 + 22.56 * cos(radians(111.7)), 515 + 22.56 * sin(radians(111.7)));
    vertex(225 + 22.56 * cos(radians(111.7)) + 22.56 * cos(radians(248.3)), 515 + 22.56 * sin(radians(111.7)) + 22.56 * sin(radians(248.3)));
    vertex(225 + 22.56 * cos(radians(111.7)) + 22.56 * cos(radians(248.3)) + 16.68, 515 + 22.56 * sin(radians(111.7)) + 22.56 * sin(radians(248.3)));
    endShape(CLOSE);

    // Texto superior
    fill('darkmagenta');
    textSize(60);
    textAlign(RIGHT);
    text("Wendy", 400, 100);

    // Texto inferior
    textSize(40);
    text("Feliz Cumpleaños", 600, 550);
}
