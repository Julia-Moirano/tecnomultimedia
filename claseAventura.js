// clase principal que contiene toda la lógica de la aventura y del juego
class Aventura {
  constructor() {
    this.pantallaActual= 0;
    this.totaldeimagenes= 25;
    this.imagenes= new Array(this.totaldeimagenes);
    for (let i= 0; i < this.totaldeimagenes; i++) {
      this.imagenes[i]= loadImage("data/imagen"+i+".jpg");
    }
    this.nombredeboton = ["COMENZAR", "Créditos", "SIGUIENTE", "VOLVER AL INICIO", "ATRÁS", "Seguís esperando", "Bostezás", "Lanzarle comida", "Correr", "Hacerme un sánguche", "Salir"];
    this.textobase= loadStrings("data/narracion.txt");
    this.boton1= new boton();
    this.boton2= new boton();
    this.bloquedetexto1= new bloquedetexto(500,150,5);
    this.anchoboton= 100;
    this.altoboton= 50;
    this.tipografia= loadFont("data/papyrus.vlw");
    this.minijuego= new Juego();
    //this.clickeado= true;
  }

  dibujar() {
    console.log(this.pantallaActual);
    // textFont(this.tipografia);
    switch (this.pantallaActual) {
      case 0:
        image(this.imagenes[0], 0, 0, width, height);
        this.boton1.dibujar(133, 215, this.anchoboton+75, this.altoboton, this.nombredeboton[0], 0, 1);
        break;
      case 25:
        image(this.imagenes[0], 0, 0, width, height);
        this.boton1.dibujar(133, 215, this.anchoboton+75, this.altoboton, this.nombredeboton[0], 26, 0);
        break;
      case 1:
        image(this.imagenes[1], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[0]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 1, 2);
        break;
      case 2:
        image(this.imagenes[2], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[1]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 2, 3);
        break;
      case 3:
        image(this.imagenes[3], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[2]);
        this.boton1.dibujar(375, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 3, 4);
        break;
      case 4:
        image(this.imagenes[4], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[3]);
        this.boton1.dibujar(width/3, height/3, 225, this.altoboton, this.nombredeboton[5], 4, 5);
        this.boton2.dibujar(width-width/3, height/3, 150, this.altoboton, this.nombredeboton[6], 4, 6);
        break;
      case 5:
        image(this.imagenes[5], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[5]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 5, 6);
        break;
      case 6:
        image(this.imagenes[6], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[6]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 6, 7);
        break;
      case 7:
        image(this.imagenes[7], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[7]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 7, 8);
        break;
      case 8:
        image(this.imagenes[8], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[8]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 8, 9);
        break;
      case 9:
        image(this.imagenes[9], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[9]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 9, 10);
        break;
      case 10:
        image(this.imagenes[10], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[10]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 10, 11);
        break;
      case 11:
        this.minijuego.dibujar();
        break;
      default:
      case 12:
        image(this.imagenes[11], 0, 0, width, height);
        this.bloquedetexto1.dibujarBloque(width/5, 425, this.textobase[11]);
        this.boton1.dibujar(500, 425, this.anchoboton+50, this.altoboton, this.nombredeboton[2], 10, 11);
        break;
    }
     if (mouseIsPressed) {
       this.clickear();
     }  
  }

  clickear() {
    if (this.pantallaActual===this.boton1.pulpresente && this.boton1.apretar()) {
     // if(this.clickeado){
      this.pantallaActual= this.boton1.pulsiguiente;
     // this.clickeado= false;
      //}
    } else if (this.pantallaActual===this.boton2.pulpresente && this.boton2.apretar()) {
     // if(this.clickeado){
      this.pantallaActual= this.boton2.pulsiguiente;
      //this.clickeado= false;
  //  }
     }
  }

  usarTecla(keyCode) {
    // llama al método de la sub-clase que usa el keycode
    this.minijuego.presionar(keyCode);
  }
}
