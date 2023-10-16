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
    this.per = new personaje();
  }
  
  dibujar(){
    if(this.estado===0) {
      image(imagenes[1],0,0);
      image(imagenes[0],0,-100);
     // this.per.dibujarJugador();
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
      //  image(imagenes[13],0,0);
        this.per.dibujarPersonaje(50,50); //x-100, y-50
        //image();
      }
  }

  clickear(){
  if (this.boton1.presionarBoton(400,400,this.anchuraBoton,this.alturaBoton) && this.estado===this.boton1.presente) {
      this.estado = this.boton1.siguiente;
    } else if(this.boton4.presionarBoton(450,550,this.anchuraBoton/2,this.alturaBoton) && this.estado===this.boton4.presente) {
      this.estado = this.boton4.siguiente;
    }
  }
  
  presionar(tecla){
    this.tec= tecla;
    if(this.tec === RIGHT_ARROW){
      this.per.moverDerecha();
    }
  }
  
} 
