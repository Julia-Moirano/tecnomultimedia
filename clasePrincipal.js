// clase principal que contiene toda la lógica de la aventura y del juego
class Aventura {
  constructor() {
   // this.pantallas = [];
    this.pantallaActual= 0;
    this.totaldeimagenes= 26;
    this.imagenes= new Array(this.totaldeimagenes);
    for (let i= 0; i < this.totaldeimagenes; i++) {
      this.imagenes[i]= loadImage("data/imagen"+i+".jpg");
    }
    this.nombredeboton = ["COMENZAR", "Créditos", "SIGUIENTE", "VOLVER AL INICIO", "ATRÁS", "Sigues esperando", "Bostezas", "Lanzarle comida", "Correr", "Hacerme un sánguche", "Salir afuera"];
    
    this.textobase= loadStrings("narracion.txt");
    this.boton1= new boton(400, 400, 300, 50);
  }

  dibujar() {
    switch (this.pantallaActual) {
      case 0:
        background(200,50,50);
        image(this.imagenes[0], 0, 0, width, height);
        this.boton1.dibujar(this.nombredeboton[0], 0, 1);
        break;
      case 1:
        image(this.imagenes[1], 0, 0, width, height);
        this.boton1.dibujar(this.nombredeboton[0], 1, 2);
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
