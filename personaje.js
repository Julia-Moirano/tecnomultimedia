class personaje{
  constructor(){
  }
  
  dibujarPersonaje(perx,pery){
    this.perx= perx;
    this.pery= pery;
    image(imagenes[13],perx,pery);
  }
  
   moverDerecha(){
    this.perx += 100;
   // this.posy+=50;
  }
   moverIzquierda(){
    this.perx -= 100;
   // this.posy-=50;
  }
}
