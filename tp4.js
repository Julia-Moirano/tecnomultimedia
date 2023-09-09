// Moirano Julia
// tp4 comisión 1
//

let luchadorx, luchadory;
let rivalx, rivaly;
let ancho, altura;
let estado= 0;
let puntaje1= 0;
let puntaje2= 0;
let segundos;
let minutos;
let arranque;
let imagen;

function setup() {
 createCanvas(800,600);
  luchadorx= width/5;
  luchadory= height/2;
  rivalx= width/5+480;
  rivaly= height/2;
  ancho= 50;
  altura= 50;
  //Cómo la pelea dura un minuto y medio, empezará con las siguentes variables númericas:
  segundos=30;
  minutos=1;
}

function preload(){
  imagen = loadImage("data/imagen0.png");
}

function draw() {
 if(frameCount%60===0){
   segundos--;
   if(segundos<10 && segundos>=0){
     segundos="0"+segundos;
   } else if(segundos<0){
     minutos= 0;
     segundos= 59;
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
  luchador(luchadorx,luchadory,ancho,altura);
  rival(rivalx,rivaly,ancho,altura);
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
   if (golpe(rivalx,rivaly,luchadorx,luchadory) && keyIsDown(76)){
     puntaje2++;
   }
   if (golpe(luchadorx,luchadory,rivalx,rivaly) && keyIsDown(81)){
     puntaje1++;
   }
   image(imagen,0,0);
    push();
    fill(127,0,0);
    textSize(30);
   text(puntaje1,width/5,height/15);
   text(puntaje2,width/5+480,height/15);
   textSize(40);
   temporarizador("0"+minutos+":"+segundos,width/2,height/12);
   pop();
}

function luchador(posx,posy) {
if (keyIsDown(81)||keyIsDown(113)){
    push();
    translate(posx,posy);
    rotate(PI/4);
    brazosdeluchador(0,0,50,50);
    pop();
  } else if(keyIsDown(90)||keyIsDown(122)){
    push();
    translate(posx,posy);
    rotate(7*PI/4);
    brazosdeluchador(0,0,50,50);
    pop();
  } else {
    brazosdeluchador(posx,posy);
  }
    cabezadeluchador(posx,posy,50,50); // cabeza
}

function brazosdeluchador(posx,posy){
  rect(posx-12.5,posy,50-25,50+100);//brazos
  rect(posx+25,posy+62.5,50,50-25);//puños
  rect(posx+25,posy-62.5,50,50-25);//puños
}

function cabezadeluchador(posx,posy,anchura,altura){
  ellipse(posx,posy,anchura,altura);
}
function rival(posx,posy){
   if(keyIsDown(76)||keyIsDown(108)){
    push();
    translate(posx,posy);
    rotate(7*PI/4);
    brazosderival(25,0,50,50);
    pop();
  } else if(keyIsDown(75)||keyIsDown(107)){
    push();
    translate(posx,posy);
    rotate(PI/4);
    brazosderival(25,0,50,50);
    pop();
  } else {
  brazosderival(posx+25,posy,50,50);
  }
  ellipse(posx,posy,50,50);
}

function brazosderival(posx,posy){
  rect(posx-12.5,posy,50-25,50+100);//brazos
  rect(posx-50,posy+62.5,50,50-25);//puños
  rect(posx-50,posy-62.5,50,50-25);//puños
}

function temporarizador(texto,ancho,altura){
  text(texto,ancho,altura);
}
function golpe(posx1,posy1,posx2,posy2){
  if(posx1===posx2 && posy1===posy2){
    return true;
  } else {
    return false;
  }
}
