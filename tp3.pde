// Moirano Julia
// tp3 comisión 1
// link del video: 

int totaldeimagenes= 26;
int estado= 0;
float anchoboton, altoboton;
PImage [] imagenes= new PImage [totaldeimagenes];
PFont fuente;
String [] textobase= {"Era una tarde fría y gris de noviembre, y el señor McDunn y yo conversabamos dentro del faro. Como al día siguiente iba a volver a tierra, le había preguntado en qué suele pensar cuando está sólo. 'En los misterios del mar.', me responde.",
"No estaba seguro a que se refería exactamente, pero durante todo ese día se veía nervioso. Para romper con la intriga, mi compañero decide acompañarme a subir hacia la sala del gran ojo",
"Me decía que en esta época del año, 'algo' viene a visitar el faro. Tenía mucha curiosidad, ¿de qué me estará hablando?",
"De cualquier manera, decidimos esperar. Pasó media hora y sólo nos murmuramos unas pocas frases.",
"Mientras me explicaba algunas de sus ideas sobre el origen de la sirena del faro, McDunn de repente presenció una figura moviendose a lo lejos. A pesar de la niebla, también lo pude contemplar",
"Del mar, salió una criatura oscura de tamaño colosal, con un cuello bastante largo y una cabeza grande de ojos inmensos, que caminaba majestuosamente. Me quedé perplejo. No podía creer lo que estaba observando",
"McDunn y yo nos quedamos contemplando el intercambio vocal entre la sirena y el monstruo. Los rugidos de dicho último eran tan angustiosos que me hacía pensar que probablemente estaba completamente solo",
"En ese momento, McDunn decidió a apagar la sirena para ver que ocurría. Cada vez que lo recuerdo, pienso en que debería haberlo detenido, por que lo que ocurrió a continuación fue caótico",
"El monstruo se abalanceó hacia el faro. Antes de que McDunn pudiese prenderla de vuelta, la criatura ya había abrazado la torre con sus garras, suplicando salvajemente por una respuesta.",
"Estaba tan asustado, que incluso el tambaleo de la torre me dejaba inmóvil. No tenía mucho tiempo para pensar, necesitaba hacer algo.",
"'¡Rápido!¡Abajo!', me gritó McDunn. Corrimos por las escaleras de la manera más cautelosa posible, tratando de evitar el riesgo de resbalarnos, mientras una lluvia de piedras caian sobre nosotros.",
"Nos metimos en el pequeño sótano que estaba debajo las escaleras y cerramos la puerta. Después de eso, solo hubo oscuridad y movimientos bruscos.",
"Lo último que recuerdo del monstruo era su alarido. Después de eso, solamente habían venido la patrulla de rescate para sacarnos del faro, pero decidimos no contarles la verdad.",
"Pasó un año y en noviembre ya habían construido otra torre en reemplazo a la anterior. En ese momento, decidí visitar  a mi compañero nuevamente, quién me confirmo que el monstruo no volvió luego de lo que pasó la última vez",
"A pesar de que había regresado a su mundo, no podía evitar escuhar el rugido del monstruo cada vez que escuchaba a la sirena mientras estaba sentado en mi coche.",
"Aunque me esforzaba para ganarle al aburrimiento, empecé a sentirme cansado, asi que decidí bajar a la cocina. McDunn, sin embargo, me advirtió que estemos atentos.",
"Cuando llegué a la cocina, tenía solo algo en mente:"};
String [] nombredeboton= {"Comenzar","Créditos","SIGUIENTE","VOLVER AL INICIO","Sigues esperando","Bostezas","Hacerme un sanguche","Salir afuera","El sanguche"};
void setup(){
  size(600,600);
  background(0);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  anchoboton= 100;
  altoboton= 50;
  for(int i= 0; i < totaldeimagenes; i++){
  imagenes [i]= loadImage("imagen"+i+".jpg");
  }
  fuente= loadFont("papyrus.vlw");
  textFont(fuente);
  for(int t=0; t<textobase.length; t++){ 
    fill(125,125,190);
    text(textobase[t],400,100);
}
  for(int b=0; b<nombredeboton.length; b++){
     fill(125,125,190);
    text(textobase[b],400,100);
}
}

void draw(){
  println(mouseY);
    float distsuperior= dist(0,0,0,200);
    float distinferior= dist(0,0,0,400);
    float bloquesuperior= map(distsuperior,0,600,0,300);
    float bloqueinferior= map(distinferior,0,600,300,600);
    textSize(17);
  if(estado==0){///
    image(imagenes[0],0,0,600,600);
    fill(125,125,190);
    textSize(80);
    text("La sirena",300,120);
    for(int y= 215; y < 335; y += 90){
      boton(70,y,anchoboton,altoboton,15);
    }
    textSize(20);
    text(nombredeboton[0],width/5,height/2.5);
    text(nombredeboton[1],width/5,height/2+30);
  } else if(estado==1){///
    image(imagenes[1],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[0],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==2){///
    image(imagenes[2],0,0,600,600);;
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[1],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==3){///
    image(imagenes[3],0,0,600,600);
    bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[2],width/2,height/2-200,450,150);
     boton(425,160,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,185);
  } else if(estado==4){///
    image(imagenes[4],0,0,600,600);
    bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[3],width/2,height/2-200,450,150);
    for(int y= 215; y < 335; y += 90){
      boton(450,y,anchoboton,altoboton,15);
    }
     textSize(15);
     text(nombredeboton[4],500,height/2.5,100,50);
     textSize(20);
     text(nombredeboton[5],500,height/2+30,100,50);
  } else if(estado==5){///
   image(imagenes[5],0,0,600,600);
   bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[4],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==6){///
    image(imagenes[6],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[5],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==7){///
    image(imagenes[7],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[6],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==8){///
    image(imagenes[8],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[7],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==9){///
    image(imagenes[9],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[8],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==10){///
    image(imagenes[10],0,0,600,600);
    bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[9],width/2,height/2-200,450,150);
     boton(425,160,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,185);
  } else if(estado==11){///
    image(imagenes[11],0,0,600,600);
    bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[10],width/2,height/2-200,450,150);
     boton(425,160,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,185);
  } else if(estado==12){///
    image(imagenes[12],0,0,600,600);
    bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[11],width/2,height/2-200,450,150);
     boton(425,160,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,185);
  } else if(estado==13){///
   image(imagenes[13],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[12],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==14){///
     image(imagenes[14],0,0,600,600);
    bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[13],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==15){/// FINAL 1 ///
     image(imagenes[15],0,0,600,600);
    bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[14],width/2,height/2-200,450,150);
     boton(212,460,anchoboton+75,altoboton+25,15);
     text(nombredeboton[3],width/2,495,150,150);
  } else if(estado==16){///
     image(imagenes[16],0,0,600,600);
     bloquedetexto(300,bloqueinferior,500,150,5);
    fill(125,125,190);
    text(textobase[15],width/2,height/2+200,450,150);
     boton(425,390,anchoboton+50,altoboton,15);
     text(nombredeboton[2],500,415);
  } else if(estado==17){///
  image(imagenes[17],0,0,600,600);
   bloquedetexto(300,bloquesuperior,500,150,5);
    fill(125,125,190);
    text(textobase[16],width/2,height/2-200,450,150);
    for(int x= 300; x < 540; x += 180){
      boton(x,height/2,anchoboton,altoboton,15);
    }
     textSize(15);
     text(nombredeboton[6],350,height/2+25,100,50);
     text(nombredeboton[7],530,height/2+25,100,50);
  } else if(estado==18){
    image(imagenes[18],0,0,600,600);
  }else if(estado==19){
    image(imagenes[19],0,0,600,600);
  }else if(estado==20){
    image(imagenes[20],0,0,600,600);
  }else if(estado==21){
    image(imagenes[21],0,0,600,600);
  }else if(estado==22){
    image(imagenes[22],0,0,600,600);
  }else if(estado==23){
    image(imagenes[23],0,0,600,600);
  }else if(estado==24){
    image(imagenes[24],0,0,600,600);
  }else if(estado==25){
    image(imagenes[25],0,0,600,600);
  } else if(estado==26){
    image(imagenes[0],0,0,600,600);
    filtrodefondo(width/2,height/2,600);
  }
}
