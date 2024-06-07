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
    vertex(400, 300);
    bezierVertex(370, 450, 430, 450, 400, 300);
    endShape(CLOSE);
    
    // Cabeza
    fill('lightblue');
    beginShape();
    vertex(400, 300);
    bezierVertex(370, 200, 430, 200, 400, 300);
    endShape(CLOSE);

    // Ojos
    fill('black');
    ellipse(380, 270, 20, 20); // Ojo izquierdo
    ellipse(420, 270, 20, 20); // Ojo derecho

    // Boca
    noFill();
    strokeWeight(4);
    arc(400, 310, 50, 20, 0, PI); // Boca

    // Brazos
    strokeWeight(6);
    line(350, 320, 290, 370); // Brazo izquierdo
    line(450, 320, 510, 370); // Brazo derecho

    // Pastel
    fill('pink');
    rect(310, 370, 80, 40); // Base del pastel
    fill('white');
    rect(325, 350, 50, 30); // Parte superior del pastel

    // Velas
    fill('yellow');
    rect(345, 330, 10, 20); // Vela

    // Fuego de las velas
    fill('orange');
    ellipse(350, 320, 10, 10); // Fuego

    // Sombrero
    fill('pink');
    triangle(390, 250, 410, 250, 400, 220); // Sombrero

    // Texto superior
    fill('darkmagenta');
    textSize(60);
    textAlign(CENTER);
    text("Wendy", width / 2, 100);

    // Texto inferior
    textSize(40);
    text("Feliz Cumpleaños", width / 2, 580);
}
