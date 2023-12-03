class Juego{
  constructor(){
    this.estado= 0;
    this.cantidadtotal= 17;
    this.imagenes= new Array(this.cantidadtotal);
    for (let i= 0; i < this.cantidadtotal; i++) {
      this.imagenes[i]= loadImage("data/juego/imagen"+i+".png");
    }
    //this.boton3= new pulsador(650,500,200,50);
    //this.boton4= new pulsador(675,300,300/2,50);
    //this.boton5= new pulsador(650,550,250,50);
    this.boton3= new boton();
    this.johnny1= new personaje(50,165,100,150);
    this.johnny2= new personaje(750,165,100,150);
    this.pied= [];
    for(let p= 0; p < 8; p++){
      this.pied[p]= new piedras(50+p*100,-50);
      this.pied[p].golpeado= true;
    }
    this.vidas= 8;
    //this.aventura= new Aventura();
  }
  
  dibujar(){
    //if(this.estado===0) {
    //  image(this.imagenes[1],0,0);
    //  image(this.imagenes[0],0,-100);
    //  this.boton1.dibujarPulsador("COMENZAR",0,1);
    //} else if(this.estado===1){
    //    image(this.imagenes[2],0,0);
    //    this.boton2.dibujarPulsador("SIGUIENTE",1,2);
      /*//}else*/
         if(this.estado===0){
          image(this.imagenes[3],0,0);
          image(this.imagenes[2],0,0);
          image(this.imagenes[4],0,0);
          image(this.imagenes[1],0,0);
          this.boton3.dibujar(650,500,200,50,"¡VAMOS!",0,1);
        } else if(this.estado===1){
            image(this.imagenes[3],0,0);
            image(this.imagenes[2],0,0);
            image(this.imagenes[4],0,0);
            this.johnny1.dibujarPersonaje(this.imagenes[12],1,2);
            this.llover(2,6,6,5,10);
            this.golpe();
            this.vivo();
            this.muerto();
          } else if(this.estado===2){
              image(this.imagenes[3],0,0);
              image(this.imagenes[5],0,0);
              this.johnny2.dibujarPersonaje(this.imagenes[13],2,3);
              this.llover(0,5,7,5,10);
              this.golpe();
              this.vivo();
              this.muerto();
            } else if(this.estado===3){
                image(this.imagenes[3],0,0); 
                image(this.imagenes[4],0,0);
                this.johnny1.dibujarPersonaje(this.imagenes[12],3,4);
                 this.llover(1,7,8,6,10);
                 this.golpe();
                 this.vivo();
                 this.muerto();
              } else if(this.estado===4){
                  image(this.imagenes[0],0,0);
                  image(this.imagenes[5],0,0);
                  this.johnny2.dibujarPersonaje(this.imagenes[13],4,5);
                  this.vivo();
                } else if(this.estado===5){
                    image(this.imagenes[0],0,0); 
                    image(this.imagenes[4],0,0);
                    this.johnny1.dibujarPersonaje(this.imagenes[12],5,6);
                    this.llover(1,6,9,7,10);
                    this.golpe();
                    this.vivo();
                    this.muerto();
                  } else if(this.estado===6){
                      image(this.imagenes[0],0,0);
                      image(this.imagenes[5],0,0);
                      this.johnny2.dibujarPersonaje(this.imagenes[13],6,7);
                      this.llover(2,7,10,7,10);
                      this.golpe();
                      this.vivo();
                      this.muerto();
                    } else if(this.estado===7){
                        image(this.imagenes[0],0,0); 
                        image(this.imagenes[4],0,0);
                        this.johnny1.dibujarPersonaje(this.imagenes[12],7,8);
                        this.llover(1,8,11,8,10);
                        this.golpe();
                        this.vivo();
                        this.muerto();
                      } else if(this.estado===8){
                          image(this.imagenes[0],0,0);
                          image(this.imagenes[5],0,0);
                          image(this.imagenes[14],0,0);
                          image(this.imagenes[15],0,0);
                          this.johnny2.dibujarPersonaje(this.imagenes[13],8,9);
                          this.llover(0,7,11,8,10);
                          this.golpe();
                          this.vivo();
                          this.muerto();
                        } else if(this.estado===9){
                            this.aventura.dibujar();
                           // background(125,30,125);
                          } else if(this.estado===10){
                              image(this.imagenes[16],0,0);
                              this.boton3.dibujar(650,550,250,50,"VOLVER AL INICIO",10,0);
                          }
                           if (mouseIsPressed) {
                            this.clickear();
                          }  
  }
  
  llover(minimo,maximo,imagenPied,randomMin,randomMax){
    for(let p= minimo; p < maximo; p++){
      this.pied[p].dibujarPiedras(this.imagenes[imagenPied],random(randomMin,randomMax));
      this.pied[p].golpeado= true;
    }
  }
  
  golpe(){
    for(let p= 0; p < 8; p++){
      if(this.colision(this.pied[p].piedx,this.pied[p].piedy,this.johnny1.perx,this.johnny1.pery,this.johnny1.peralto,this.johnny1.peralto)||
        this.colision(this.pied[p].piedx,this.pied[p].piedy,this.johnny2.perx,this.johnny2.pery,this.johnny2.peralto,this.johnny2.peralto)){
          if(this.pied[p].golpeado){
            this.vidas--;
            this.pied[p].golpeado= false;
            this.pied[p].piedy= -50;
          }
        }
      }
  }
  
  vivo(){
    push();
    textSize(20);
    fill(125,0,0,125);
    noStroke();
    rectMode(CENTER);
    rect(700,60,75,5);
    fill(120,60,120);
    text("( HP= "+this.vidas+"/8 )",700,50);
    pop();
  }
  
  muerto(){
    if(this.vidas===0){ 
      this.estado= 10;
    }
  }
  
  colision(px1,py1,px2,py2,ancho2,alto2){
    return px1+ancho2/5>px2 && px1<px2+ancho2/5 && py1+alto2/5>py2 && py1<py2+alto2/5;
  }
  
  reiniciarVariables(){
    this.johnny1= new personaje(50,165,100,150);
    this.johnny2= new personaje(750,165,100,150);
    this.vidas= 8;
  }
  
  clickear(){
    if (this.estado===this.boton3.pulpresente && this.boton3.apretar()) {
      this.estado= this.boton3.pulsiguiente;
      this.reiniciarVariables();
  }
  }
  
  presionar(keyCode){
    if(this.estado===1||this.estado===3||this.estado===5||this.estado===7){
      if(keyCode === LEFT_ARROW){
        this.johnny1.moverIzquierda1();
      } else if(keyCode === RIGHT_ARROW){
          this.johnny1.moverDerecha1();
        }
        if(this.johnny1.perx>850){
          this.estado = this.johnny1.persiguiente;
          this.johnny2= new personaje(750,165,100,150);
        }
    } else if(this.estado===2||this.estado===4||this.estado===6||this.estado===8){
        if(keyCode === LEFT_ARROW){
          this.johnny2.moverIzquierda2();
        } else if(keyCode === RIGHT_ARROW){
            this.johnny2.moverDerecha2();
          }
          if(this.johnny2.perx<-50){
            this.estado = this.johnny2.persiguiente;
            this.johnny1 = new personaje(50,165,100,150);
            if(this.estado===9){
              this.aventura = new Aventura();
              this.pantallaActual=12;/// a pesar de estar puesto, no funciona
            }
          }
      }
    }
  
} 
