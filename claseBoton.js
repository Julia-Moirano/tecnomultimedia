class boton{
  constructor(bx,by,bancho,balto){
    this.bx= bx;
    this.by= by;
    this.bancho= bancho;
    this.balto= balto;
    textAlign(CENTER,CENTER);
    textSize(this.balto/2);
  }
  
  dibujarBoton(texto,bpresente,bsiguiente){
    push();
    rectMode(CENTER);
    this.bpresente= bpresente;
    this.bsiguiente= bsiguiente;
    this.texto= texto;
    fill(125,125,175);
    rect(this.bx,this.by,this.bancho,this.balto,15);
    fill(90,60,90);
    text(texto,this.bx,this.by);
    pop();
  }
  
  presionarBoton(bx,by,bancho,balto){
    return mouseX>this.bx-this.bancho/2 && mouseX<this.bx+this.bancho/2 && mouseY>this.by-this.balto/2 && mouseY<this.by+this.balto/2;
  }
}
