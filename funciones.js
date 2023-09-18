function brazosdejugador1(posx,posy,valor) {
  push();
  fill(valor);
  stroke(valor);
  rect(posx-12.5,posy,50-25,50+100);
  rect(posx+25,posy-62.5,50,50-25);
  rect(posx+25,posy+62.5,50,50-25);
  pop();
}

function brazosdejugador2(posx,posy,valor) {
  push();
  translate(posx,posy);
  rotate(2*PI/2);
  fill(valor);
  stroke(valor);
  noStroke();
  brazosdejugador1(0,0,valor);
  pop();
}

function cabeza(posx,posy,anchura,altura,valor) {
  push();
  fill(valor);
  stroke(125);
  ellipse(posx,posy,anchura,altura);
  pop();
}

function boton(posx,posy,anchura,altura) {
  push();
  rectMode(CORNER);
  fill(250,0,40);
  stroke(0,125);
  rect(posx,posy,anchura,altura);
  pop();
}

function campodecombate(posx,posy,anchura,altura) {
  push();
  noFill();
  strokeWeight(10);
  stroke(150,75,0);
  rect(posx,posy,anchura,altura);
  pop();
}

function sistema(puntos1,puntos2,tiempo,segundos) {
  push();
  fill(127,0,0);
  textSize(30);
  text(puntos1,width/5,height/15);
  text(puntos2,width/5+480,height/15);
  textSize(40);
  text(tiempo[segundos],width/2,height/12);
  pop();
}

function variablesoriginales() {
  arranque= true;
  jugador1x= width/5;
  jugador1y= height/2;
  jugador2x= width/5+480;
  jugador2y= height/2;
  estado= 1;
  puntaje1= 0;
  puntaje2= 0;
  tiempototal= 91;
}

function golpe(posx1,posy1,posx2,posy2,cabezax,cabezay,anchura,altura) {
  if (posx1>cabezax && posx1<cabezax+anchura && posy1>cabezay && posy1<cabezay+altura) {
    if (posx2>cabezax && posx2<cabezax+anchura && posy2>cabezay && posy2<cabezay+altura) {
      if (frameCount%5===0) {
        return true;
      }
    }
  } else {
      return false;
    }
}

function pulsaboton(posx,posy,anchura,altura) {
  if (mouseX>posx && mouseX<posx+anchura && mouseY>posy && mouseY<posy+altura) {
    return true;
  } else {
      return false;
    }
}
