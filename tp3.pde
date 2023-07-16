// Moirano Julia
// tp3 comisión 1
// link del video: 

int totaldeimagenes= 26;
int lineasdetexto= 25;
int estado= 0;
float anchoboton, altoboton;
PFont fuente;
PImage [] imagenes= new PImage [totaldeimagenes];
String [] textobase= new String [lineasdetexto];
String [] nombredeboton= {"COMENZAR","Créditos","SIGUIENTE","VOLVER AL INICIO","ATRÁS","Sigues esperando","Bostezas","Lanzarle comida","Correr","Hacerme un sanguche","Salir afuera"};

void setup(){
  size(600,600);
  background(0);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  anchoboton= 100;
  altoboton= 50;
  fuente= loadFont("papyrus.vlw");
  textFont(fuente);
  for(int i= 0; i < totaldeimagenes; i++){
    imagenes [i]= loadImage("imagen"+i+".jpg");
  }
  textobase = loadStrings("narracion.txt");
}

void draw(){
  float distsuperior= dist(0,0,0,200);
  float distinferior= dist(0,0,0,400);
  float bloquesuperior= map(distsuperior,0,600,0,300);
  float bloqueinferior= map(distinferior,0,600,300,600);
  textSize(17);
    
  if(estado==0){////// PANTALLA DE INICIO //////
    image(imagenes[0],0,0,600,600);
    decoracion(width/2,height/5+10,400,100,0);
    fill(125,125,190);
    textSize(80);
    text("La sirena",width/2,height/5);
    for(int y= 215; y < 335; y += 90){
      boton(33,y,anchoboton+75,altoboton,15);
    }
    textSize(20);
    escritura(nombredeboton[0],width/5,height/2.5,anchoboton+75,altoboton);
    escritura(nombredeboton[1],width/5,height/2+30,anchoboton+75,altoboton);
  } else if(estado==1){//////
      image(imagenes[1],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[0],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==2){//////
      image(imagenes[2],0,0,600,600);;
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[1],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==3){//////
      image(imagenes[3],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[2],width/2,height/2-200,450,150);
      boton(425,160,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,185,anchoboton+50,altoboton);
  } else if(estado==4){//////
      image(imagenes[4],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[3],width/2,height/2-200,450,150);
      for(int y= 215; y < 335; y += 90){
        boton(450,y,anchoboton,altoboton,15);
      }
      textSize(15);
      escritura(nombredeboton[5],500,height/2.5,anchoboton,altoboton);
      textSize(20);
      escritura(nombredeboton[6],500,height/2+30,anchoboton,altoboton);
  } else if(estado==5){//////
      image(imagenes[5],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[4],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==6){//////
      image(imagenes[6],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[5],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==7){//////
      image(imagenes[7],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[6],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==8){//////
      image(imagenes[8],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[7],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==9){//////
      image(imagenes[9],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[8],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==10){//////
      image(imagenes[10],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[9],width/2,height/2-200,450,150);
      for(int x= 300; x < 510; x += 150){
        boton(x,height/3,anchoboton,altoboton,15);
      }
      textSize(15);
      escritura(nombredeboton[7],350,height/3+25,anchoboton,altoboton);
      textSize(20);
      escritura(nombredeboton[8],500,height/3+25,anchoboton,altoboton);
  } else if(estado==11){//////
      image(imagenes[11],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[10],width/2,height/2-200,450,150);
      boton(425,160,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,185,anchoboton+50,altoboton);
  } else if(estado==12){//////
      image(imagenes[12],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[11],width/2,height/2-200,450,150);
      boton(425,160,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,185,anchoboton+50,altoboton);
  } else if(estado==13){//////
      image(imagenes[13],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[12],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==14){//////
      image(imagenes[14],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[13],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==15){////// FINAL 1 //////
      image(imagenes[15],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[14],width/2,height/2-200,450,150);
      boton(212,460,anchoboton+75,altoboton+25,15);
      escritura(nombredeboton[3],width/2,495,anchoboton+75,altoboton+25);
  } else if(estado==16){//////
      image(imagenes[16],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[15],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==17){//////
      image(imagenes[17],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[16],width/2,height/2-200,450,150);
      for(int x= 300; x < 540; x += 180){
        boton(x,height/2,anchoboton,altoboton,15);
      }
      textSize(15);
      escritura(nombredeboton[9],350,height/2+25,anchoboton,altoboton);
      escritura(nombredeboton[10],530,height/2+25,anchoboton,altoboton);
  } else if(estado==18){//////
      image(imagenes[18],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[17],width/2,height/2-200,450,150);
      boton(425,160,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,185,anchoboton+50,altoboton);
  } else if(estado==19){//////
      image(imagenes[19],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[18],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==20){//////
      image(imagenes[20],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[19],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==21){//////
      image(imagenes[21],0,0,600,600);
      bloquedetexto(300,bloqueinferior,500,150,5);
      escritura(textobase[20],width/2,height/2+200,450,150);
      boton(425,390,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,415,anchoboton+50,altoboton);
  } else if(estado==22){////// FINAL 2 //////
      image(imagenes[22],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[21],width/2,height/2-200,450,150);
      boton(212,460,anchoboton+75,altoboton+25,15);
      escritura(nombredeboton[3],width/2,495,anchoboton+75,altoboton+25);
  } else if(estado==23){//////
      image(imagenes[23],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[22],width/2,height/2-200,450,150);
      boton(425,160,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,185,anchoboton+50,altoboton);
  } else if(estado==24){//////
      image(imagenes[24],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[23],width/2,height/2-200,450,150);
      boton(425,160,anchoboton+50,altoboton,15);
      escritura(nombredeboton[2],500,185,anchoboton+50,altoboton);
  } else if(estado==25){////// FINAL 3 //////
      image(imagenes[25],0,0,600,600);
      bloquedetexto(300,bloquesuperior,500,150,5);
      escritura(textobase[24],width/2,height/2-200,450,150);
      boton(212,460,anchoboton+75,altoboton+25,15);
      escritura(nombredeboton[3],width/2,495,anchoboton+75,altoboton+25);
  } else if(estado==26){////// PANTALLA DE CRÉDITOS //////
      image(imagenes[0],0,0,600,600);
      decoracion(width/2,height/2,600,600,0);
      boton(450,500,anchoboton,altoboton,15);
      escritura(nombredeboton[4],500,525,anchoboton,altoboton);
      textSize(25);
      fill(125,125,190);
      text("Materia: Tecnología Multimedial I",400,50);
      text("Alumna: Julia Moirano",450,100);
      text("Legajo: 94719/0",475,150);
      text("Autor original: Ray Bradbury",200,450);
  }
}
