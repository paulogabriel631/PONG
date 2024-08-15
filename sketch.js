let xb = 300;
let yb = 200; 
let diametro = 15;
let raio = diametro/2;

let xr = 5;
let yr = 150;
let ar = 80;
let lr = 7;

let xri = 585;
let yri = 150;

let vxb = 6;
let vyb = 6;

let colideu=false;

let meuspontos = 0;
let pontosdooponente = 0;

let som;
let raquetada;
let ponto;

function setup() {
  createCanvas(600, 400);
  som.loop();
}

function preload(){
  som = loadSound("som.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound ("ponto.mp3");
}

function draw() {
  background(0);
  mexebola();
  mostrabola();
  quicabola();
  mostraraquete(xr,yr,color("blue"));
  mostraraquete(xri,yri,color("red"));
  mexeraquete();
  mexeraqueteinimiga(xr,yr);
  quicabolaraquete(xri,yri); 
  pontos();
  placar();
  letras();
  stroke("rgb(247,247,247)");
  rect(300,0,1,400);
}

function mostrabola(){
  circle(xb,yb,diametro)
}

function mexebola(){
  xb += vxb
  yb += vyb
}

function quicabola(){
  if (xb + raio > width || xb - raio < 0){
   vxb *= -1;
   }
   if (yb + raio > height || yb - raio < 0){
 vyb *= -1;
   }
}

function mostraraquete(x,y,color){
  fill(color);
  rect(x,y,lr,ar)
}

function mexeraquete(){
  if (keyIsDown(UP_ARROW))
      yr -= 10;
      
  if (keyIsDown(DOWN_ARROW))
      yr += 10;   
}
  
function mexeraqueteinimiga(){
  if (keyIsDown(87))//s
      yri -= 10;
      
  if (keyIsDown(83))//w
      yri += 10;  
}

function quicabolaraquete(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xb,yb,raio);
  
  if (colidiu){
    vxb *= -1
    raquetada.play();
  }
}

function placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(16);
  fill("rgb(0,255,190)")
  rect(150,10,40,20);
  fill("white")
  text(meuspontos, 170,15);
  
   fill("rgb(216,202,20)")
  rect(430,10,40,20);
  fill("white")
  text(pontosdooponente, 450,15);
}


function pontos(){
    if (xb > 590){
    meuspontos += 1;
      ponto.play();
 }
     if (xb < 11){
     pontosdooponente += 1;
      ponto.play();
     }
  
 }

function letras(){
  let frase = "MEUS PONTOS";
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase, 90,40);
  
  let frase2 = "PONTOS OPONENTE";
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase2, 345,40);
}
