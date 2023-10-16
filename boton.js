class boton{
  
  constructor(bx,by,bancho,balto){
    this.bx=bx;
    this.by=by;
    this.bancho=bancho;
    this.balto=balto;
    rectMode(CENTER);
  }
  
  dibujarBoton(presente,siguiente){
    this.presente=presente;
    this.siguiente=siguiente;
    fill(150,150,150);
    rect(this.bx,this.by,this.bancho,this.balto);
  }
  
  presionarBoton(bx,by,bancho,balto){
    return mouseX>this.bx-this.bancho/2 && mouseX<this.bx+this.bancho/2 && mouseY>this.by-this.balto/2 && mouseY<this.by+this.balto/2;
  }
}
