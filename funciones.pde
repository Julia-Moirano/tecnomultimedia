void bloquedetexto(int posx, float posy, int anchura, int altura, int radio){
  stroke(15,15,15);
  fill(15,30,55);
  rect(posx,posy,anchura,altura,radio);
}

void boton(int posx, int posy, float anchura, float altura, int radio){
  push();
  rectMode(CORNER);
  if(pulsaboton(posx,posy,anchura,altura)){
    fill(60,60,95);
  } else {
    fill(60,60,95,125);
  }
  rect(posx,posy,anchura,altura,radio);
  pop();
}

void filtrodefondo(int posx, int posy, int extension){
  noStroke();
  fill(0,190);
  square(posx,posy,extension);
}

boolean pulsaboton(int posx, int posy, float anchura, float altura){
  if(mouseX>posx && mouseX<posx+anchura && mouseY>posy && mouseY<posy+altura){
    return true;
  } else {
    return false;
  }
}
void mousePressed(){
    if(estado==0){
      if(pulsaboton(70,215,anchoboton,altoboton)){
        estado= 1;
    } else if(pulsaboton(70,305,anchoboton,altoboton)){
        estado= 26;
  }
    } else if(estado==1){
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 2;
    }
    } else if(estado==2){
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 3;
      }
    } else if(estado==3){
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 4;
      }
    } else if(estado==4){
      if(pulsaboton(450,215,anchoboton,altoboton)){
        estado= 5;
      } else if(pulsaboton(450,305,anchoboton,altoboton)){
        estado= 16;
      }
    } else if(estado==5){
       if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 6;
       }
    } else if(estado==6){
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 7;
      }
    } else if(estado==7){
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 8;
      }
    } else if(estado==8){
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 9;
      }
    } else if(estado==9){
       if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 10;
       }
    } else if(estado==10){
       if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 11;
       }
    } else if(estado==11){
       if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 12;
       }
    } else if(estado==12){
       if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 13;
       }
    } else if(estado==13){
       if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 14;
       }
    } else if(estado==14){
       if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 15;
       }
    } else if(estado==15){
    if(pulsaboton(212,460,anchoboton+75,altoboton+25)){
        estado= 0;
    }
    } else if(estado==16){
    if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 17;
    }
    } else if(estado==17){
      if(pulsaboton(width/2,height/2,anchoboton,altoboton)){
        estado= 18;
    }
} 
}
void keyPressed(){
  estado= 26;
}
