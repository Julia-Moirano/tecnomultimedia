class pulsador{
  constructor(pulx,puly,pulancho,pulalto){
    this.pulx= pulx;
    this.puly= puly;
    this.pulancho= pulancho;
    this.pulalto= pulalto;
    textAlign(CENTER,CENTER);
    textSize(this.pulalto/2);
  }
  
  dibujarPulsador(texto,pulpresente,pulsiguiente){
    push();
    rectMode(CENTER);
    this.pulpresente= pulpresente;
    this.pulsiguiente= pulsiguiente;
    this.texto= texto;
    fill(125,125,175);
    rect(this.pulx,this.puly,this.pulancho,this.pulalto,15);
    fill(90,60,90);
    text(texto,this.pulx,this.puly);
    pop();
  }
  
  apretarPulsador(pulx,puly,pulancho,pulalto){
    return mouseX>this.pulx-this.pulancho/2 && mouseX<this.pulx+this.pulancho/2 && mouseY>this.puly-this.pulalto/2 && mouseY<this.puly+this.pulalto/2;
  }
}
