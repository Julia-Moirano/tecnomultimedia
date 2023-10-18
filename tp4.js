// Moirano Julia
// tp4 comisión 1
// Link del video: https://www.youtube.com/watch?v=g0Nfa6YUZps

let jugador1x, jugador1y;
let jugador2x, jugador2y;
let ancho, alto;
let blanco= 255;
let negro= 0;
let estado= 0;
let puntaje1= 0;
let puntaje2= 0;
let tiempototal= 91;
let temporizador= new Array(tiempototal);
let cantidadtotal= 4;
let imagen= new Array(cantidadtotal);
let arranque;
let golpeado1;
let golpeado2;

function preload() {
  temporizador= loadStrings("data/temporizador.txt");
  for (let i= 0; i < cantidadtotal; i++) {
    imagen[i]= loadImage("data/imagen"+i+".png");
  }
}

function setup() {
  createCanvas(800,600);
  jugador1x= width/5;
  jugador1y= height/2;
  jugador2x= width/5+480;
  jugador2y= height/2;
  ancho= 50;
  alto= 50;
  golpeado1= false;
  golpeado2= false;
}

function draw() {
 background(175,255,127);
 rectMode(CENTER);
 textAlign(CENTER,CENTER);
  if (estado===0) {///// PANTALLA DE INICIO /////
    campodecombate(width/2,height/2,600,450);
    image(imagen[1],0,0);
    image(imagen[0],width/4,0,width/2,height/2);
    for (let bx= 60; bx < 60+500; bx += 240) {
      boton(bx,height/2,200,50,0);
    }
    fill(blanco);
    textSize(30);
    text("Jugar",160,height/2+25);
    text("Instrucciones",400,height/2+25);
    text("Créditos",640,height/2+25);
  } else if (estado===1) {///// PANTALLA DE JUEGO /////
      if (arranque===true) {   
        if (frameCount%60===0) {
          tiempototal--;
        }
        campodecombate(width/2,height/2,600,450);
        if (keyIsDown(87) || keyIsDown(119)) {/// ("W"||"w")
          if (jugador1y>450/3) {
            jugador1y -= 2;
          }
        } 
        if (keyIsDown(83) || keyIsDown(115)) {/// ("S"||"s")
          if (jugador1y<height-450/3) {
            jugador1y += 2;
          }
        }
        if (keyIsDown(65) || keyIsDown(97)) {/// ("A"||"a")
          if (jugador1x>600/5) {
            jugador1x -= 4;
          }
        }
        if (keyIsDown(68) || keyIsDown(100)) {/// ("D"||"d")
          if (jugador1x<width-600/4 && jugador1x<jugador2x) {
            jugador1x += 4;
          }
        } 
        if (keyIsDown(UP_ARROW) && jugador2y>450/3) {
          jugador2y -= 2;
        }
        if (keyIsDown(DOWN_ARROW) && jugador2y<height-450/3) {
          jugador2y += 2;
        }
        if (keyIsDown(LEFT_ARROW) && jugador2x>600/4 && jugador2x>jugador1x) {
          jugador2x -= 4;
        }
        if (keyIsDown(RIGHT_ARROW) && jugador2x<width-600/5) {
          jugador2x += 4;
        }
        if (keyIsDown(81) || keyIsDown(113)) { /// "Q"||"q"
          push();
          translate(jugador1x,jugador1y);
          rotate(PI/4);
          brazosdejugador1(0,0,255);
          pop();
          if (golpe(jugador1x+95,jugador1y+26,jugador1x+114,jugador1y+7.5,jugador2x,jugador2y,ancho,alto) && golpeado1===false) {
            puntaje1++;
            golpeado1= true;
          }
        } else if (keyIsDown(90) || keyIsDown(122)) { /// "Z"||"z"
            push();
            translate(jugador1x,jugador1y);
            rotate(7*PI/4);
            brazosdejugador1(0,0,255);
            pop();
            if (golpe(jugador1x+95,jugador1y+24,jugador1x+114,jugador1y+42.5,jugador2x,jugador2y,ancho,alto) && golpeado1===false) {
              puntaje1++;
              golpeado1= true;
            }
          } else {
              brazosdejugador1(jugador1x,jugador1y,blanco);
              golpeado1= false;
            }
            cabeza(jugador1x,jugador1y,ancho,alto,blanco);
        if (keyIsDown(76) || keyIsDown(108)) { /// "L"||"l"
          push();
          translate(jugador2x,jugador2y);
          rotate(7*PI/4);
          brazosdejugador2(0,0,0);
          pop();
          if (golpe(jugador2x-45,jugador2y+26,jugador2x-64,jugador2y+7.5,jugador1x,jugador1y,ancho,alto) && golpeado2===false) {
            puntaje2++;
            golpeado2= true;
          }
        } else if(keyIsDown(75) || keyIsDown(107)){ /// "K"||"k"
            push();
            translate(jugador2x,jugador2y);
            rotate(PI/4);
            brazosdejugador2(0,0,0);
            pop();
            if (golpe(jugador2x-45,jugador2y+24,jugador2x-64,jugador2y+42.5,jugador1x,jugador1y,ancho,alto) && golpeado2===false) {
              puntaje2++;
              golpeado2= true;
            }
          } else {
              brazosdejugador2(jugador2x,jugador2y,negro);
              golpeado2= false;
            }
            cabeza(jugador2x,jugador2y,ancho,alto,negro);
            image(imagen[1],0,0);
            sistema(puntaje1,puntaje2,temporizador,tiempototal);
      }
      if (tiempototal<1 || puntaje1===100 || puntaje2===100) {
        arranque= false;
        background(175,255,127);
        campodecombate(width/2,height/2,600,450);
        image(imagen[1],0,0);
        sistema(puntaje1,puntaje2,temporizador,tiempototal);
        textSize(50);
        if (puntaje1>puntaje2) {
          push();
          fill(blanco);
          text("¡Jugador 1 gana!", width/2,height/2);
          pop();
        } else if (puntaje2>puntaje1) {
            push();
            fill(negro);
            text("¡Jugador 2 gana!", width/2,height/2);
            pop();
          }
        boton(width/2-50,height/4+height/2,100,50,0);
        textSize(20);
        fill(blanco);
        text("Reiniciar",width/2,450+25);
      }
    } else if (estado===2) {
        background(190,80,80);
        image(imagen[2],0,0);
      } else if (estado===3) {
          background(80,190,80);
          image(imagen[3],0,0);
        }
}

function mousePressed() {
  if (estado===0) {
    if (pulsaboton(60,height/2,200,50)) {
      variablesoriginales();
    } else if (pulsaboton(300,height/2,200,50)) {
        estado= 2;
      } else if (pulsaboton(540,height/2,200,50)) {
          estado= 3;
        }
  } else if (estado===1) {
      if (tiempototal<1||puntaje1===100||puntaje2===100) {
        if (pulsaboton(width/2-50,height/4+height/2,100,50)) {
          variablesoriginales();
        }
      }
    }
}
  
function keyPressed() {
  if (estado===1) {
    if (tiempototal<1 || puntaje1===100 || puntaje2===100) {
      if (keyIsDown(ESCAPE)) {
        estado= 0;
      }
    }
  } else if (estado===2 || estado===3) {
      if(keyIsDown(ESCAPE)) {
        estado= 0;
      }
    }
}
