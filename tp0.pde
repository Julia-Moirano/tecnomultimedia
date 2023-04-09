// Moirano Julia
// tp0 comisión 1

PImage paisaje;

void setup() {
size(800,400);
paisaje= loadImage("bateamahuida.jpg");
}

void draw() {
  /// CIELO ///
  fill(125,160,210);
  rect(400,0,400,400);
  
  fill(235,240,245,50);
  noStroke();
  ellipse(600,100,400,300);
  
  fill(235,240,245,50);
  noStroke();
  ellipse(600,200,400,200);
  
  /// NUBES ///
  fill(235,240,245);
  noStroke();
  ellipse(600,175,400,50);
    
  fill(235,240,245);
  noStroke();
  ellipse(575,150,80,40);
  
  fill(235,240,245);
  noStroke();
  ellipse(650,160,140,60);
  
  fill(235,240,245);
  noStroke();
  ellipse(450,160,140,60);
  
  fill(235,240,245);
  noStroke();
  ellipse(750,160,100,60);
  
  fill(235,240,245);
  noStroke();
  ellipse(775,140,50,50);
  
 /// MONTAÑAS LEJANAS (AZUL) ///
 /// MONTAÑA 1
  fill(65,85,115,100);
  noStroke();
  quad(790,175,800,175,800,200,725,185);
  
  /// MONTAÑA 2
   fill(65,85,115,100);
   noStroke();
   quad(675,200,630,190,610,200,644,219);
  
   /// MONTAÑA 3
    fill(65,85,115,100);
    noStroke();
    quad(525,175,550,175,800,304,438,198);
  
    /// MONTAÑA 4
     fill(65,85,115,100);
     noStroke();
     quad(800,230,550,275,700,185,800,200);
  
     fill(65,85,115,100);
     noStroke();
     quad(800,303,640,222,700,185,800,200);
  
     /// MONTAÑA 5
      fill(65,85,115,100);
      noStroke();
      quad(400,400,800,400,800,300,400,190);
  
      /// MONTAÑA 6
       fill(65,85,115,100);
       noStroke();
       triangle(515,225,400,400,400,265);
  
       fill(65,85,115);
       noStroke();
       triangle(515,225,800,300,400,375);
     
       /// MONTAÑA 7
        fill(65,85,115);
        noStroke();
        triangle(800,400,800,235,400,305);
  
  /// MONTAÑA CERCANA (GRIS)  
  fill(65,75,90);
  noStroke();
  quad(400,399,800,399,800,275,400,285);
  
  fill(65,75,90);
  noStroke();
  quad(575,250,600,250,800,275,400,286);
  
  /// ÁRBOLES ///
  fill(45,65,90);
  noStroke();
  quad(585,295,600,250,800,275,800,285);
  
  fill(45,65,90);
  noStroke();
  quad(570,250,590,249,590,265,560,270);
  
  fill(45,65,90);
  noStroke();
  quad(400,280,430,280,545,257,400,300);
  
  fill(45,65,90);
  noStroke();
  quad(490,277,510,272,510,295,480,295);
  
  fill(45,65,90);
  noStroke();
  quad(540,275,560,272,610,285,500,294);
  
  /// SUPERFICIES TERRESTRES ///
  /// TIERRA 1
  fill(55,55,60);
  noStroke();
  ellipse(640,335,300,99);
  
  fill(55,55,60);
  noStroke();
  quad(800,285,800,400,640,400,640,285);
  
  stroke(80,80,80);
  strokeWeight(5);
  line(600,335,797,335);

   /// TIERRA 2
   fill(80,80,80);
   noStroke();
   triangle(400,400,400,315,800,360);

   fill(80,80,80);
   noStroke();
   quad(400,315,400,400,800,400,800,350);
   
  /// IMAGEN DEL PAISAJE ///
  image(paisaje,0,0,400,400);
}
