void bloquedetexto(int posx, float posy, int anchura, int altura, int radio){
  stroke(15,15,15);
  fill(15,30,55);
  rect(posx,posy,anchura,altura,radio);
}

void escritura(String texto, float posx, float posy, float altura, float anchura){
  fill(125,125,190);
  text(texto,posx,posy,altura,anchura);
}

void boton(int posx, int posy, float anchura, float altura, int radio){
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

void decoracion(int posx, int posy, int anchura, int altura, int radio){
  noStroke();
  fill(0,190);
  rect(posx,posy,anchura,altura,radio);
}

boolean pulsaboton(int posx, int posy, float anchura, float altura){
  if(mouseX>posx && mouseX<posx+anchura && mouseY>posy && mouseY<posy+altura){
    return true;
  } else {
    return false;
  }
}
