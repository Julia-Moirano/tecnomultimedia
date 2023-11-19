
// clase principal que contiene toda la lógica de la aventura y del juego
class Aventura {

  constructor() {
    this.pantallaActual = 0;
   // this.pantallas = [];
    this.totaldeimagenes= 26;
    this.imagenes= new Array(this.totaldeimagenes);
    for (let i= 0; i < this.totaldeimagenes; i++) {
      this.imagenes [i]= loadImage("data/imagen"+i+".jpg")
    }
    this.nombredeboton = ["COMENZAR", "Créditos", "SIGUIENTE", "VOLVER AL INICIO", "ATRÁS", "Sigues esperando", "Bostezas", "Lanzarle comida", "Correr", "Hacerme un sánguche", "Salir afuera"];

    this.textobase= loadStrings("narracion.txt");
    this.boton1= new boton(400, 400, 300, 50);
  }

  dibujar() {
    switch (this.pantallaActual) {
    case 0:
      image(this.imagenes[0], 0, 0, width, height);
      this.boton.dibujar(this.nombredeboton[0], 0, 1);
      break;
    case 1:
      image(this.imagenes[1], 0, 0, width, height);
      this.boton.dibujar(this.nombredeboton[0], 0, 1);
      break;
    case 2:

      break;
    case 3:

      break;
    default:
    }
  }
  clickear() {
    if (this.pantallaActual===this.boton1.pulpresente && this.boton1.apretar(400, 400, 300, 50)) {
      this.pantallaActual= this.boton1.pulsiguiente;
    }
  }
}


class boton {
  constructor(pulx, puly, pulancho, pulalto) {
    this.pulx= pulx;
    this.puly= puly;
    this.pulancho= pulancho;
    this.pulalto= pulalto;
    textAlign(CENTER, CENTER);
    textSize(this.pulalto/2);
  }

  dibujar(texto, pulpresente, pulsiguiente) {
    push();
    rectMode(CENTER);
    this.pulpresente= pulpresente;
    this.pulsiguiente= pulsiguiente;
    //aventura.pantallaActual = pulpresente;
    this.texto= texto;
    fill(125, 125, 175);
    rect(this.pulx, this.puly, this.pulancho, this.pulalto, 15);
    fill(90, 60, 90);
    text(texto, this.pulx, this.puly);
    pop();
  }

  apretar(pulx, puly, pulancho, pulalto) {
    return mouseX>this.pulx-this.pulancho/2 && mouseX<this.pulx+this.pulancho/2 && mouseY>this.puly-this.pulalto/2 && mouseY<this.puly+this.pulalto/2;
  }
}
