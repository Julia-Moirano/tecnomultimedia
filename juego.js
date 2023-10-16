class juego{
  
  constructor(){
    this.estado = 0;
  //  this.cantidadtotal = 3;
    for (let i= 0; i < cantidadtotal; i++) {
      imagenes[i]= loadImage("data/imagen"+i+".png");
    } 
    this.anchuraBoton= 300;
    this.alturaBoton= 50;
    this.boton1= new boton(400,400,this.anchuraBoton,this.alturaBoton);
    this.boton2= new boton(400,475,this.anchuraBoton,this.alturaBoton);
    this.boton3= new boton(400,550,this.anchuraBoton,this.alturaBoton);
    this.boton4= new boton(450,550,this.anchuraBoton/2,this.alturaBoton);
    this.boton5= new boton(450,550,this.anchuraBoton,this.alturaBoton);
    this.per1 = new personaje(-350,-150);
    this.per2 = new personaje(350,-150);
  }
  
  dibujar(){
    if(this.estado===0) {
      image(imagenes[1],0,0);
      image(imagenes[0],0,-100);
      this.boton1.dibujarBoton(0,1);
      this.boton2.dibujarBoton();
      this.boton3.dibujarBoton();
    } else if (this.estado===1){
        image(imagenes[2],0,0);
        this.boton4.dibujarBoton(1,2);
      } else if(this.estado===2){
        image(imagenes[4],0,0);
        image(imagenes[3],0,0);
        image(imagenes[5],0,0);
        this.per1.dibujarPersonaje1(2,3); //x-100, y-50
        } else if(this.estado===3){
            image(imagenes[4],0,0);
            image(imagenes[6],0,0);
            this.per2.dibujarPersonaje2(3,4);
          } else if(this.estado===4){
              image(imagenes[4],0,0); 
              image(imagenes[5],0,0);
              this.per1.dibujarPersonaje1(4,5);
            } else if(this.estado===5){
                image(imagenes[1],0,0);
                image(imagenes[6],0,0);
                this.per2.dibujarPersonaje2(5,6);
              } else if(this.estado===6){
                  image(imagenes[1],0,0); 
                  image(imagenes[5],0,0);
                  this.per1.dibujarPersonaje1(6,7);
                } else if(this.estado===7){
                    image(imagenes[1],0,0);
                    image(imagenes[6],0,0);
                    this.per2.dibujarPersonaje2(7,8);
                  } else if(this.estado===8){
                      image(imagenes[1],0,0); 
                      image(imagenes[5],0,0);
                      this.per1.dibujarPersonaje1(8,9);
                    } else if(this.estado===9){
                        image(imagenes[1],0,0);
                        image(imagenes[6],0,0);
                        image(imagenes[15],0,0);
                        image(imagenes[16],0,0);
                        this.per2.dibujarPersonaje2(9,10);
                      } else if(this.estado===10){
                          image(imagenes[17],0,0);
                          this.boton4.dibujarBoton(10,0);
                        }
  }

  clickear(){
    if (this.boton1.presionarBoton(400,400,this.anchuraBoton,this.alturaBoton)) {
      this.estado = this.boton1.bsiguiente;
    } else if(this.boton4.presionarBoton(450,550,this.anchuraBoton/2,this.alturaBoton)) {
        this.estado = this.boton4.bsiguiente;
      }
  }
  
 presionar(keyCode){
    if(this.estado===2||this.estado===4||this.estado===6||this.estado===8){
      if(keyCode === LEFT_ARROW){
        this.per1.moverIzquierda1();
      } else if(keyCode === RIGHT_ARROW){
          this.per1.moverDerecha1();
        }
          if(this.per1.perx > 450){
            this.estado = this.per1.persiguiente;
            this.per2 = new personaje(350,-150);
        }
        
    } else if(this.estado===3||this.estado===5||this.estado===7||this.estado===9){
        if(keyCode === LEFT_ARROW){
          this.per2.moverIzquierda2();
        } else if(keyCode === RIGHT_ARROW){
            this.per2.moverDerecha2();
        }
            if(this.per2.perx < -450){
              this.estado = this.per2.persiguiente;
              this.per1 = new personaje(-350,-150);
        }
    }
  }
  
} 
