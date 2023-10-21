class juego{
  constructor(){
    this.estado= 0;
    this.cantidadtotal= 20;
    this.imagenes= new Array(this.cantidadtotal);
    for (let i= 0; i < this.cantidadtotal; i++) {
      this.imagenes[i]= loadImage("data/imagen"+i+".png");
    } 
    this.boton1= new boton(400,400,300,50);
    this.boton2= new boton(600,550,300/2,50);
    this.boton3= new boton(650,500,200,50);
    this.boton4= new boton(675,300,300/2,50);
    this.boton5= new boton(650,550,250,50);
    this.johnny1= new personaje(50,165,100,150);
    this.johnny2= new personaje(750,165,100,150);
    this.pied= [];
    for(let p= 0; p < 8; p++){
      this.pied[p]= new piedras(50+p*100,-50);
      this.pied[p].golpeado= true;
    }
    this.vidas= 8;
  }
  
  dibujar(){
    if(this.estado===0) {
      image(this.imagenes[1],0,0);
      image(this.imagenes[0],0,-100);
      this.boton1.dibujarBoton("COMENZAR",0,1);
    } else if(this.estado===1){
        image(this.imagenes[2],0,0);
        this.boton2.dibujarBoton("SIGUIENTE",1,2);
      } else if(this.estado===2){
          image(this.imagenes[5],0,0);
          image(this.imagenes[4],0,0);
          image(this.imagenes[6],0,0);
          image(this.imagenes[3],0,0);
          this.boton3.dibujarBoton("¡VAMOS!",2,3);
        } else if(this.estado===3){
            image(this.imagenes[5],0,0);
            image(this.imagenes[4],0,0);
            image(this.imagenes[6],0,0);
            this.johnny1.dibujarPersonaje(this.imagenes[14],3,4);
            this.llover(2,6,8,5,10);
            this.golpe();
            this.vivo();
            this.muerto();
          } else if(this.estado===4){
              image(this.imagenes[5],0,0);
              image(this.imagenes[7],0,0);
              this.johnny2.dibujarPersonaje(this.imagenes[15],4,5);
              this.llover(0,5,9,5,10);
              this.golpe();
              this.vivo();
              this.muerto();
            } else if(this.estado===5){
                image(this.imagenes[5],0,0); 
                image(this.imagenes[6],0,0);
                this.johnny1.dibujarPersonaje(this.imagenes[14],5,6,50,165);
                 this.llover(1,7,10,6,10);
                 this.golpe();
                 this.vivo();
                 this.muerto();
              } else if(this.estado===6){
                  image(this.imagenes[1],0,0);
                  image(this.imagenes[7],0,0);
                  this.johnny2.dibujarPersonaje(this.imagenes[15],6,7);
                  this.vivo();
                } else if(this.estado===7){
                    image(this.imagenes[1],0,0); 
                    image(this.imagenes[6],0,0);
                    this.johnny1.dibujarPersonaje(this.imagenes[14],7,8);
                    this.llover(1,6,11,7,10);
                    this.golpe();
                    this.vivo();
                    this.muerto();
                  } else if(this.estado===8){
                      image(this.imagenes[1],0,0);
                      image(this.imagenes[7],0,0);
                      this.johnny2.dibujarPersonaje(this.imagenes[15],8,9);
                      this.llover(2,7,12,7,10);
                      this.golpe();
                      this.vivo();
                      this.muerto();
                    } else if(this.estado===9){
                        image(this.imagenes[1],0,0); 
                        image(this.imagenes[6],0,0);
                        this.johnny1.dibujarPersonaje(this.imagenes[14],9,10);
                        this.llover(1,8,13,8,10);
                        this.golpe();
                        this.vivo();
                        this.muerto();
                      } else if(this.estado===10){
                          image(this.imagenes[1],0,0);
                          image(this.imagenes[7],0,0);
                          image(this.imagenes[16],0,0);
                          image(this.imagenes[17],0,0);
                          this.johnny2.dibujarPersonaje(this.imagenes[15],10,11);
                          this.llover(0,7,13,8,10);
                          this.golpe();
                          this.vivo();
                          this.muerto();
                        } else if(this.estado===11){
                            image(this.imagenes[18],0,0);
                            this.boton4.dibujarBoton("TERMINAR",11,0);
                          } else if(this.estado===12){
                              image(this.imagenes[19],0,0);
                              this.boton5.dibujarBoton("VOLVER A JUGAR",12,3);
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
      this.estado= 12;
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
    if(this.estado===this.boton1.bpresente && this.boton1.presionarBoton(400,400,300,50)) {
      this.estado = this.boton1.bsiguiente;
    } else if(this.estado===this.boton2.bpresente && this.boton2.presionarBoton(600,550,300/2,50)) {
        this.estado = this.boton2.bsiguiente;
      } else if(this.estado===this.boton3.bpresente && this.boton3.presionarBoton(650,500,200,50)){
          this.estado = this.boton3.bsiguiente;
          this.reiniciarVariables();
        } else if(this.estado===this.boton4.bpresente && this.boton4.presionarBoton(675,300,200/2,50)){
            this.estado = this.boton4.bsiguiente;
          } else if(this.estado===this.boton5.bpresente && this.boton5.presionarBoton(650,550,250,50)){
              this.estado = this.boton5.bsiguiente;
              this.reiniciarVariables();
            }
  }
  
  presionar(keyCode){
    if(this.estado===3||this.estado===5||this.estado===7||this.estado===9){
      if(keyCode === LEFT_ARROW){
        this.johnny1.moverIzquierda1();
      } else if(keyCode === RIGHT_ARROW){
          this.johnny1.moverDerecha1();
        }
        if(this.johnny1.perx > 850){
          this.estado = this.johnny1.persiguiente;
          this.johnny2= new personaje(750,165,100,150);
        }
    } else if(this.estado===4||this.estado===6||this.estado===8||this.estado===10){
        if(keyCode === LEFT_ARROW){
          this.johnny2.moverIzquierda2();
        } else if(keyCode === RIGHT_ARROW){
            this.johnny2.moverDerecha2();
          }
          if(this.johnny2.perx < -50){
            this.estado = this.johnny2.persiguiente;
            this.johnny1 = new personaje(50,165,100,150);
          }
      }
  }
  
} 
