// Moirano Julia
// tp1 comisión 1

PImage a;
PImage b;
PImage c;
PImage d;
PImage e;
PFont fuente;
int segundos= 0;
int estado= 0;
float apertura;
float opacidad;
float tamtexto;
float velocidad;//(usado solamente con tamtexto)
float pX,pY;
boolean arranque;

void setup() {
 size(640,480);
 a= loadImage("grandcanyon1.jpg");
 b= loadImage("grandcanyon2.jpg");
 c= loadImage("grandcanyon3.jpg");
 d= loadImage("grandcanyon4.jpg");
 e= loadImage("grandcanyon5.jpg");
 fuente= loadFont("garamondb.vlw");
 textFont(fuente,48);
 apertura= 255;
 opacidad= 0;
 tamtexto= 30;
 velocidad= 0.5;
 pX= 0;
 pY= 0;
}

void draw() {
 if(arranque==true){
 //Tiempo//
 if(frameCount%60==0){
   segundos++;
 }
 }
  /// PRIMERA PANTALLA
  if(estado==0){
  image(a,0,0,640,480);
  
  noStroke();
  fill(15,30,55);
  rect(60,200,522.5,65);
  
  opacidad=opacidad+2;
  pX=pX+4;
  if(segundos<=2){
    opacidad=0;
    pX=75;
  } else if(pX==567){
    pX=pX-4;
  }
  stroke(170,110,0,opacidad);
  strokeWeight(10);
  line(75,250,pX,250);
  
  fill(170,110,0,opacidad);
  textSize(40);
  text("El Gran Cañón del Colorado",75,240);
 
  fill(255,255,250,opacidad);
  textSize(30);
  text("Por Julia Moirano",70,295);
  
    //Pantalla de inicio//
   if(segundos<=0){
     apertura=255;
   } else {
     apertura--;
   }
   fill(0,0,0,apertura);
   rect(-10,-10,660,500);
   
    if(mouseX>505 && mouseX<620 && mouseY>420 && mouseY<460){
     fill(170,110,0,apertura);
    } else {
     fill(15,30,55,apertura);
    }
     noStroke();
     rect(505,420,115,40);
     
     fill(255,255,250,apertura);
     textSize(25);
     text("Iniciar",527,447);
   //********-**-******//
  }
  ///
  /// SEGUNDA PANTALLA
  if(estado==1){
  background(50,115,190);
  image(b,150,20,width/2+width/4,440);
  
  pX=pX+5;
  if(segundos<=6){
    pX=0;
  } else if(pX==300){
    pX=pX-5;
  }
  noStroke();
  fill(255,255,250);
  rect(40,50,pX,115);
  noStroke();
  fill(255,255,250);
  rect(40,175,pX-40,115);
  
  opacidad=opacidad+2;
  if(segundos<=7){
    opacidad=0;
  }
  fill(15,30,55,opacidad);
  textSize(20);
  text("Es un valle fluvial de la Meseta",50,75);
  text("del Colorado que puedes",50,100);
  text("encontrar en Arizona de",50,125);
  text("Estados Unidos.",50,150);
  text("Se destaca por sus grandes",50,200);
  text("fisuras, además de poseer",50,225);
  text("varias capas terrestres de",50,250);
  text("colores cálidos.",50,275);
  
  noStroke();
  fill(15,30,55);
  rect(0,50,40,240);
  }
  ///
  /// TERCERA PANTALLA
  if(estado==2){
  background(100,100,125);
  image(c,300,20,320,440);
  
  pY=pY+5;
  if(segundos<=15){
    pY=-150;
  } else if(pY==175){
    pY=pY-5;
  }
  noStroke();
  fill(255,255,250);
  rect(30,pY-25,240,140);
  
  fill(15,30,55);
  textSize(20);
  text("Alrededor de 2 mil",40,pY);
  text("millones de años atrás, la",40,pY+25);
  text("mayoría de las paredes",40,pY+50);
  text("rocosas estaban cubiertas",40,pY+75);
  text("por un voluminoso río.",40,pY+100);
  
  opacidad=opacidad+2;
  if(segundos<=19){
    opacidad=0;
  }
  fill(255,255,250,opacidad);
  textSize(20);
  text("(Con una altura que",75,360);
  text("alcanzaba los bordes",75,380);
  text("de las mesetas).",75,400);
  }
  ///
  /// CUARTA PANTALLA
  if(estado==3){
  background(150,85,60);
  image(d,10,10,620,460);
  
  noStroke();
  fill(255,255,250);
  rect(0,350,640,100);
  
  pX=pX-5;
  if(segundos<=24){
    pX=640;
  } else if(pX==50){
    pX=pX+5;
  }
  fill(15,30,55);
  textSize(20);
  text("Con el paso del tiempo, el nivel del agua bajó constantemente,",pX,375);
  text("generando así una significativa erosión,",pX,395);
  text("pero lo suficiente como para conservar en buen estado",pX,415);
  text("las gigantescas formaciones naturales.",pX,435);
  
  noStroke();
  fill(15,30,55);
  rect(0,350,40,100);
  }
  ///
  /// QUINTA PANTALLA
  if(estado==4){
  background(200,75,30);
  image(e,10,10,620,460);
  noStroke();
  fill(170,110,0,125);
  rect(10,10,620,460);
    
  if(segundos<=33){
    tamtexto=1;
  } else {
    tamtexto=tamtexto+velocidad/2/2;
  }
  if(segundos>=38){
    tamtexto=30;
  }
  fill(255,255,250);
  textSize(tamtexto);
  text("Al principio fue protegido",-10+tamtexto,350-tamtexto);
  text("como monumento nacional",-10+tamtexto,375-tamtexto);
  text("en 1893, y no fue hasta el",-10+tamtexto,400-tamtexto);
  text("26 de febrero de 1919 que",-10+tamtexto,425-tamtexto);
  text("se hizo un parque nacional,",-10+tamtexto,450-tamtexto);
  text("el cual sigue estando",-10+tamtexto,475-tamtexto);
  text("abierto hoy en día.",-10+tamtexto,500-tamtexto);

   //Opción de reinicio//
   if(segundos==42){
    arranque=false;
    fill(255,255,250,125);
    rect(0,0,640,480);
     
    if(mouseX>505 && mouseX<620 && mouseY>420 && mouseY<460){
     fill(170,110,0);
    } else {
     fill(15,30,55);
    }
     rect(505,420,115,40);
     
     textSize(25);
     fill(255,255,250);
     textSize(25);
     text("Reiniciar",512,447);
    }
   //******-**-********//
  }
  ////
  //Estados//
 if(segundos<6){
   estado=0;
 }
 if(segundos>=6 && segundos<=15){
   estado=1;
 }
 if(segundos>=15 && segundos<=24){
   estado=2;
 }
 if(segundos>=24 && segundos<=33){
   estado=3;
 }
 if(segundos>=33 && segundos<=42){
   estado=4;
 } 
}

void mousePressed() {
if(mouseX>505 && mouseX<620 && mouseY>420 && mouseY<460){
 segundos=0;
 arranque=true;
  }
 estado=0;
}
