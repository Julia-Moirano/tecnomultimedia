function mousePressed(){
 if(estado===0){
    arranque=true;
    estado=1;
    puntaje1=0;
    puntaje2=0;
    tiempototal=91;
  } else if(estado===1){
   if(pulsaboton(width/4,height/4+height/2,100,50,0)){
    estado=0;
  }
  }
}

function brazosdejugador1(posx,posy,valor){
  push();
  fill(valor);
  stroke(valor);
  rect(posx-12.5,posy,50-25,50+100);//brazos
  rect(posx+25,posy-62.5,50,50-25);//puños
  rect(posx+25,posy+62.5,50,50-25);//puños
  pop();
}

function brazosdejugador2(posx,posy,valor){
  push();
  translate(posx,posy);
  rotate(2*PI/2);
  fill(valor);
  stroke(valor);
  noStroke();
  brazosdejugador1(0,0,valor);
  pop();
}

function cabeza(posx,posy,anchura,altura,valor){
  push();
  fill(valor);
  stroke(125);
  ellipse(posx,posy,anchura,altura);
  pop();
}

function boton(posx,posy,anchura,altura,radio){
  push();
  rectMode(CORNER);
  if(pulsaboton(posx,posy,anchura,altura)){
    fill(60,60,95);
  } else {
    fill(60,60,95,125);
  }
  stroke(15,15,15);
  rect(posx,posy,anchura,altura,radio);
  pop();
}

function contacto(posx1,posy1,posx2,posy2,cabezax,cabezay,ancho,altura){
  if(posx1>cabezax && posx1<cabezax+ancho && posy1>cabezay && posy1<cabezay+altura){
    if(posx2>cabezax && posx2<cabezax+ancho && posy2>cabezay && posy2<cabezay+altura){
    if(frameCount%5===0){
    return true;
    }
    }
  } else {
    return false;
  }
}

function pulsaboton(posx,posy,anchura,altura){
  if(mouseX>posx && mouseX<posx+anchura && mouseY>posy && mouseY<posy+altura){
    return true;
  } else {
    return false;
  }
}
