// Moirano Julia
// tp5 comisión 1
// Link del video:

let principal;
let cantidadtotal= 21;
let imagenes= new Array(cantidadtotal);

function setup() {
 createCanvas(800,600);
 principal= new juego();
 for (let i= 0; i < cantidadtotal; i++) {
   imagenes[i]= loadImage("data/imagen"+i+".png");
 }
}

function draw() {
  print(mouseX);
  background(0);
  principal.dibujar();
}

function mousePressed(){
  principal.clickear();
}

function keyPressed(){
  principal.presionar(keyCode);
}
