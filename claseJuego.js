// clase principal que contiene toda la lógica de la aventura y del juego
class Aventura {
  constructor() {
    this.pantallaActual= 0;
    this.totaldeimagenes= 26;
    this.imagenes= new Array(this.totaldeimagenes);
    for (let i= 0; i < this.totaldeimagenes; i++) {
      this.imagenes[i]= loadImage("data/imagen"+i+".jpg");
    }
    this.nombredeboton = ["COMENZAR", "Créditos", "SIGUIENTE", "VOLVER AL INICIO", "ATRÁS", "Sigues esperando", "Bostezas", "Lanzarle comida", "Correr", "Hacerme un sánguche", "Salir afuera"];
    this.textobase= loadStrings("data/narracion.txt");
    this.boton1= new boton();
    this.bloquedetexto1= new bloquedetexto(500,150,5);
    this.anchoboton= 100;
    this.altoboton= 50;
  }

  dibujar() {
    switch (this.pantallaActual) {
      case 0:
        image(this.imagenes[0], 0, 0, width, height);
        this.boton1.dibujar(133, 215, this.anchoboton+75, this.altoboton, this.nombredeboton[0], 0, 1);
        break;
      case 1:
        image(this.imagenes[1], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(50, 425, this.textobase[0]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 1, 2);
        break;
      case 2:
        image(this.imagenes[2], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(50, 425, this.textobase[1]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 2, 3);
        break;
      case 3:
        image(this.imagenes[3], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(50, 425, this.textobase[2]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 3, 4);
        break;
      case 4:
        image(this.imagenes[4], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(50, 425, this.textobase[3]);
        this.boton1.dibujar(150, 200, this.anchoboton, this.altoboton, this.nombredeboton[5], 4, 5);
        break;
      case 5:
        image(this.imagenes[5], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(50, 425, this.textobase[4]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 4, 5);
        break;
      default:
    }
  }
  clickear() {
    if (this.pantallaActual===this.boton1.pulpresente && this.boton1.apretar()) {
      this.pantallaActual= this.boton1.pulsiguiente;
    }
  }
  
}
