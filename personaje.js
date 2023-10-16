class personaje{
   constructor(perx,pery){
    this.perx= perx;
    this.pery= pery;
  }
  
  dibujarPersonaje1(perpresente,persiguiente){
    this.perpresente=perpresente;
    this.persiguiente=persiguiente;
    image(imagenes[13],this.perx,this.pery);
  }
  
  dibujarPersonaje2(perpresente,persiguiente){
    this.perpresente=perpresente;
    this.persiguiente=persiguiente;
    image(imagenes[14],this.perx,this.pery);
  }
  
  moverIzquierda1(){
    this.perx-=100;
    this.pery-=50;
  }
  moverDerecha1(){
    this.perx+=100;
    this.pery+=50;
  }
  
  moverIzquierda2(){
    this.perx-=100;
    //console.log(this.perx);
    this.pery+=50;
  }
  moverDerecha2(){
    this.perx+=100;
    //console.log(this.perx);
    this.pery-=50;
  }
}
