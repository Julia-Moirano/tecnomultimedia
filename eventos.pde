void mousePressed(){
    if(estado==0){//////
      if(pulsaboton(33,215,anchoboton+75,altoboton)){
        estado= 1;
      } else if(pulsaboton(33,305,anchoboton+75,altoboton)){
          estado= 26;
      }
  } else if(estado==1){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 2;
      }
  } else if(estado==2){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 3;
      }
  } else if(estado==3){//////
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 4;
      }
  } else if(estado==4){//////
      if(pulsaboton(450,215,anchoboton,altoboton)){
        estado= 5;
      } else if(pulsaboton(450,305,anchoboton,altoboton)){
          estado= 16;
      }
  } else if(estado==5){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 6;
      }
  } else if(estado==6){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 7;
      }
  } else if(estado==7){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 8;
      }
  } else if(estado==8){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 9;
      }
  } else if(estado==9){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 10;
      }
  } else if(estado==10){//////
      if(pulsaboton(450,height/3,anchoboton,altoboton)){
        estado= 11;
      } else if(pulsaboton(width/2,height/3,anchoboton,altoboton)){
          estado= 20;
      }
  } else if(estado==11){//////
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 12;
      }
  } else if(estado==12){//////
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 13;
      }
  } else if(estado==13){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 14;
      }
  } else if(estado==14){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 15;
      }
  } else if(estado==15 || estado==22 || estado==25){//////
      if(pulsaboton(212,460,anchoboton+75,altoboton+25)){
        estado= 0;
      }
  } else if(estado==16){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 17;
      }
  } else if(estado==17){//////
      if(pulsaboton(width/2,height/2,anchoboton,altoboton)){
        estado= 18;
      } else if(pulsaboton(480,height/2,anchoboton,altoboton)){
          estado= 23;
      }
  } else if(estado==18){//////
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 19;
      }
  } else if(estado==19){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 6;
      }
  } else if(estado==20){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 21;
      }
  } else if(estado==21){//////
      if(pulsaboton(425,390,anchoboton+50,altoboton)){
        estado= 22;
      }
  } else if(estado==23){//////
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 24;
      }
  } else if(estado==24){//////
      if(pulsaboton(425,160,anchoboton+50,altoboton)){
        estado= 25;
      }
  } else if(estado==26){//////
      if(pulsaboton(450,500,anchoboton+50,altoboton)){
        estado= 0;
      }
  }
}
