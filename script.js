function setup() {
    createCanvas(800, 600);
    background('lightblue');
    drawFigure();
}

function drawFigure() {
    strokeWeight(15);
    stroke('black');

    // Primer segmento
    beginShape();
    noFill();
    vertex(273.97, -258.28);
    bezierVertex(273.97, -258.28, 273.97 + 1348.69, -258.28, 273.97 + 1348.69 * 0.11, -258.28 + 1348.69 * 0.11);
    bezierVertex(273.97 + 1348.69 * 0.11 + 186.17 * 0.93, -258.28 + 1348.69 * 0.11 + 186.17 * 0.93, 273.97 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3, -258.28 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3, 273.97 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3 + 26.09 * 0.89, -258.28 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3 + 26.09 * 0.89);
    bezierVertex(273.97 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3 + 26.09 * 0.89 + 366.94 * 0.26, -258.28 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3 + 26.09 * 0.89 + 366.94 * 0.26, 273.97 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3 + 26.09 * 0.89 + 366.94 * 0.26 + 80.93 * 0.33, -258.28 + 1348.69 * 0.11 + 186.17 * 0.93 + 118.68 * 0.3 + 26.09 * 0.89 + 366.94 * 0.26 + 80.93 * 0.33);
    endShape();

    // Ojo derecho
    fill('black');
    noStroke();
    ellipse(205.86, -65.70, 21.84 * 2);

    // Segundo segmento
    noFill();
    stroke('black');
    beginShape();
    vertex(-40.44, 40.23);
    bezierVertex(-40.44 + 1202.76 * 0.14, 40.23 + 1202.76 * 0.14, -40.44 + 1202.76 * 0.14 + 1202.76 * 0.14, 40.23 + 1202.76 * 0.14 + 1202.76 * 0.14, -40.44 + 1202.76 * 0.14 + 1202.76 * 0.14 + 1202.76 * 0.14, 40.23 + 1202.76 * 0.14 + 1202.76 * 0.14 + 1202.76 * 0.14);
    endShape();

    // Brazo derecho
    beginShape();
    vertex(-49.72, -102.85);
    vertex(-49.72 + 68.74 * cos(radians(235.33)), -102.85 + 68.74 * sin(radians(235.33)));
    vertex(-49.72 + 68.74 * cos(radians(235.33)) + 24.72 * cos(radians(225)), -102.85 + 68.74 * sin(radians(235.33)) + 24.72 * sin(radians(225)));
    vertex(-49.72 + 68.74 * cos(radians(235.33)) + 24.72 * cos(radians(225)) + 78.61 * cos(radians(130.7)), -102.85 + 68.74 * sin(radians(235.33)) + 24.72 * sin(radians(225)) + 78.61 * sin(radians(130.7)));
    endShape();

    // Pie derecho
    fill('black');
    beginShape();
    vertex(-159.50, -84.99);
    vertex(-159.50 - 75.88, -84.99);
    bezierVertex(-159.50 - 75.88 + 45.07 * cos(radians(302.66)), -84.99 + 45.07 * sin(radians(302.66)), -159.50 - 75.88 + 45.07 * cos(radians(302.66)) + 45.07 * cos(radians(302.66)), -84.99 + 45.07 * sin(radians(302.66)) + 45.07 * sin(radians(302.66)), -159.50 - 75.88 + 45.07 * cos(radians(302.66)) + 45.07 * cos(radians(302.66)) + 45.07 * cos(radians(302.66)), -84.99 + 45.07 * sin(radians(302.66)) + 45.07 * sin(radians(302.66)) + 45.07 * sin(radians(302.66)));
    endShape(CLOSE);

    // Pie izquierdo
    noFill();
    stroke('black');
    beginShape();
    vertex(-108.16, -84.99);
    vertex(-108.16 - 173.34, -84.99);
    endShape();

    // Ojo izquierdo
    fill('black');
    ellipse(117.79, 65.41, 8.52 * 2);

    // Ojo derecho
    ellipse(-19.49, 77.88, 8.52 * 2);

    // Mejilla izquierda
    fill('pink');
    strokeWeight(8);
    beginShape();
    vertex(32.75, 126.62);
    bezierVertex(32.75 + 107.03 * cos(radians(320.51)), 126.62 + 107.03 * sin(radians(320.51)), 32.75 + 107.03 * cos(radians(320.51)) + 107.03 * cos(radians(320.51)), 126.62 + 107.03 * sin(radians(320.51)) + 107.03 * sin(radians(320.51)), 32.75 + 107.03 * cos(radians(320.51)) + 107.03 * cos(radians(320.51)) + 107.03 * cos(radians(320.51)), 126.62 + 107.03 * sin(radians(320.51)) + 107.03 * sin(radians(320.51)) + 107.03 * sin(radians(320.51)));
    endShape(CLOSE);

    // Cuerpo
    fill('#FFF59D');
    strokeWeight(6);
    beginShape();
    vertex(-108.62, -78.18);
    vertex(-108.62, -78.18 + 64.60);
    vertex(-108.62 - 163.41, -78.18 + 64.60);
    vertex(-108.62 - 163.41, -78.18);
    endShape(CLOSE);

    // Vestido
    fill('#FFC0CB');
    beginShape();
    vertex(-108.62, -35.40);
    vertex(-108.62, -35.40 + 21.82);
    vertex(-108.62 - 163.41, -35.40 + 21.82);
    vertex(-108.62 - 163.41, -35.40);
    endShape(CLOSE);

    // Banda del vestido
    fill('#FFF59D');
    beginShape();
    vertex(-171.94, -13.58);
    vertex(-171.94, -13.58 + 29.94);
    vertex(-171.94 - 26.09, -13.58 + 29.94);
    vertex(-171.94 - 26.09, -13.58);
    endShape(CLOSE);

    // Detalle de la banda
    noFill();
    beginShape();
    vertex(-184.98, 16.36);
    vertex(-184.98, 16.36 + 10.69);
    endShape();

    // Botón del vestido
    fill('orange');
    beginShape();
    vertex(-177.07, 27.06);
    vertex(-177.07 + 22.56 * cos(radians(111.7)), 27.06 + 22.56 * sin(radians(111.7)));
    vertex(-177.07 + 22.56 * cos(radians(111.7)) + 22.56 * cos(radians(248.3)), 27.06 + 22.56 * sin(radians(111.7)) + 22.56 * sin(radians(248.3)));
    vertex(-177.07 + 22.56 * cos(radians(111.7)) + 22.56 * cos(radians(248.3)) + 16.68, 27.06 + 22.56 * sin(radians(111.7)) + 22.56 * sin(radians(248.3)));
    endShape(CLOSE);

    // Texto superior
    fill('darkmagenta');
    textSize(60);
    textAlign(RIGHT);
    text("Wendy", -50, 200);

    // Texto inferior
    textSize(40);
    text("Feliz Cumpleaños", 310, -320);
}
