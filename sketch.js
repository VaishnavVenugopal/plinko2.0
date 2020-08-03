const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine ,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  var canvas =createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,height,1200,20);
  division1= new Divisions(200,700,5,200);
  plinko1 = new Plinko(200,100,10);
  particle1 = new Particle(200,0,10);

  if(frameCount %60 ===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
   }

  for (var j = 40;j<=width;j = j+50){
    plinkos.push(new Plinko(j,75,20));
  }

  for (var j = 15;j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,175,20));
  }
  
   for( var k =0;k<=width;k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
   
   
   
   for (var j = 0;j<particles.length;j ++){
   particles[j].display();
   }
   for (var k = 0;j<divisions.length;k ++){
    divisions[k].display();
   }  
   


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground1.display();
  division1.display();
  plinko1.display();
  particle1.display();
  for (var i = 0;i<plinkos.length;i = i+1){
    plinkos[i].display();
    
}



}
  

  
 






