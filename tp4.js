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
   
  if (keyIsDown(81)||keyIsDown(113)){
    push();
    translate(luchadorx,luchadory);
    rotate(PI/4);
    brazosdeluchador(0,0,50,50);
    pop();
    if (colision(luchadorx,luchadory,rivalx,rivaly,ancho,altura)){
      fill(200,200,15);
     puntaje1++;
   }
  } else if(keyIsDown(90)||keyIsDown(122)){
    push();
    translate(luchadorx,luchadory);
    rotate(7*PI/4);
    brazosdeluchador(0,0,50,50);
    pop();
  } else {
    brazosdeluchador(luchadorx,luchadory);
  }
  cabezadeluchador(luchadorx,luchadory,50,50);
  
  ///////////////////////////////////////////////
  if(keyIsDown(76)||keyIsDown(108)){
    push();
    translate(rivalx,rivaly);
    rotate(7*PI/4);
    brazosderival(25,0,50,50);
    pop();
  } else if(keyIsDown(75)||keyIsDown(107)){
    push();
    translate(rivalx,rivaly);
    rotate(PI/4);
    brazosderival(25,0,50,50);
    pop();
  } else {
  brazosderival(rivalx+25,rivaly);
  }
  cabezaderival(rivalx,rivaly,50,50);
   image(imagen,0,0);
   fill(127,0,0);
   textSize(30);
   text(puntaje1,width/5,height/15);
   text(puntaje2,width/5+480,height/15);
   textSize(40);
   temporarizador("0"+minutos+":"+segundos,width/2,height/12);
   pop();
}

function brazosdeluchador(posx,posy){
  push();
  fill(255);
  noStroke();
  rect(posx-12.5,posy,50-25,50+100);//brazos
  rect(posx+25,posy+62.5,50,50-25);//puños
  rect(posx+25,posy-62.5,50,50-25);//puños
  pop();
}

function cabezadeluchador(posx,posy,anchura,altura){
  push();
  fill(255);
  stroke(125);
  ellipse(posx,posy,anchura,altura);
  pop();
}

function brazosderival(posx,posy){
  push();
  fill(0);
  stroke(0);
  rect(posx-12.5,posy,50-25,50+100);//brazos
  rect(posx-50,posy+62.5,50,50-25);//puños
  rect(posx-50,posy-62.5,50,50-25);//puños
  pop();
}
function cabezaderival(posx,posy,anchura,altura){
  push();
  fill(0);
  stroke(125);
  ellipse(posx,posy,anchura,altura);
  pop();
}
function temporarizador(texto,ancho,altura){
  text(texto,ancho,altura);
}
function colision(posx1,posy1,posx2,posy2,ancho2,altura2){
  let distancia= dist(posx1,posy1,posx2,posy2);
  if(distancia<ancho2 && distancia<altura2){
    return true;
  } else {
    return false;
  }
}
  }
}
