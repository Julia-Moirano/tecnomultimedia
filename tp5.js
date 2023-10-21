// Moirano Julia
// tp5 comisión 1
// Link del video: https://youtu.be/AzGIM8w1k04

let principal;

function setup() {
 createCanvas(800,600);
 principal= new juego();
}

function draw() {
  background(0);
  principal.dibujar();
}

function mousePressed(){
  principal.clickear();
}

function keyPressed(){
  principal.presionar(keyCode);
}
