// Moirano Julia
// tp4 comisión 1
// Link del video:

let luchadorx, luchadory;
let rivalx, rivaly;
let ancho, altura;
let blanco= 255;
let negro= 0;
let estado= 0;
let puntaje1= 0;
let puntaje2= 0;
let tiempototal= 91;
let imagen;
let temporarizador = new Array(tiempototal);
let arranque;

function preload(){
  imagen = loadImage("data/imagen0.png");
  temporarizador= loadStrings("data/temporarizador.txt");
}

function setup() {
 createCanvas(800,600);
  luchadorx= width/5;
  luchadory= height/2;
  rivalx= width/5+480;
  rivaly= height/2;
  ancho= 50;
  altura= 50;
}

function draw() {
  if(estado===0){
    background(175,255,127);
    text("hi, this is boxing. Lets play!", 200,200);
  } else if(estado===1){
    
 if(arranque===true){   
 if(frameCount%60===0){
   tiempototal--;
 }
 }
  background(175,255,127);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  push();
  noFill();
  strokeWeight(10);
  stroke(150,75,0);
  rect(width/2,height/2,600,450);
  pop();
    if (keyIsDown(87)||keyIsDown(119)) {
      if (luchadory>450/3) {
      luchadory-=2;
      }
    } 
    if (keyIsDown(83)||keyIsDown(115)) {
      if(luchadory<height-450/3){
      luchadory+=2;
    }
    }
    if (keyIsDown(65)||keyIsDown(97)) {
      if(luchadorx>600/5){
      luchadorx-=4;
      }
    }
    if (keyIsDown(68)||keyIsDown(100)) {
      if(luchadorx<width-600/4 && luchadorx<rivalx){
      luchadorx+=4;
      }
    } 
    if (keyIsDown(UP_ARROW) && rivaly>450/3) {
      rivaly-=2;
    }
    if (keyIsDown(DOWN_ARROW) && rivaly<height-450/3) {
      rivaly+=2;
    }
    if (keyIsDown(LEFT_ARROW) && rivalx>600/4 && rivalx>luchadorx) {
      rivalx-=4;
    }
    if (keyIsDown(RIGHT_ARROW) && rivalx<width-600/5) {
      rivalx+=4;
    }
  if (keyIsDown(81)||keyIsDown(113)){ /// "Q"||"q"
    push();
    translate(luchadorx,luchadory);
    rotate(PI/4);
    brazosdejugador1(0,0,255);
    pop();
    if (contacto(luchadorx+95,luchadory+26,luchadorx+114,luchadory+7.5,rivalx,rivaly,ancho,altura)){
     puntaje1++;
   }
  } else if(keyIsDown(90)||keyIsDown(122)){ /// "Z"||"z"
    push();
    translate(luchadorx,luchadory);
    rotate(7*PI/4);
    brazosdejugador1(0,0,255);
    pop();
    if (contacto(luchadorx+95,luchadory+24,luchadorx+114,luchadory+42.5,rivalx,rivaly,ancho,altura)){
     puntaje1++;
   }
  } else {
    brazosdejugador1(luchadorx,luchadory,blanco);
  }
  cabeza(luchadorx,luchadory,ancho,altura,blanco);
  ///////////////////////////////////////////////
  if(keyIsDown(76)||keyIsDown(108)){
    push();
    translate(rivalx,rivaly);
    rotate(7*PI/4);
    brazosdejugador2(0,0,0);
    pop();
   if (contacto(rivalx-45,rivaly+26,rivalx-64,rivaly+7.5,luchadorx,luchadory,ancho,altura)){
     puntaje2++;
   }
  } else if(keyIsDown(75)||keyIsDown(107)){
    push();
    translate(rivalx,rivaly);
    rotate(PI/4);
    brazosdejugador2(0,0,0);
    pop();
    if (contacto(rivalx-45,rivaly+24,rivalx-64,rivaly+42.5,luchadorx,luchadory,ancho,altura)){
     puntaje2++;
   }
  } else {
  brazosdejugador2(rivalx,rivaly,negro);
  }
  cabeza(rivalx,rivaly,ancho,altura,negro);
   image(imagen,0,0);
   push();
   fill(127,0,0);
   textSize(30);
   text(puntaje1,width/5,height/15);
   text(puntaje2,width/5+480,height/15);
   textSize(40);
   text(temporarizador[tiempototal],width/2,height/12);
   pop();
 if(tiempototal<1){
  arranque=false;
  fill(175,255,127,125);
  rect(width/2,height/2,800,600);
  fill(127,50,0);
  text("you won yipiii", 200,200);
  boton(width/4,height/4+height/2,100,50,0);
}
  }
}
