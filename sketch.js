
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rock;
var boy

function preload() 
{
    boyimg=loadImage("boy.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Box(600,height,1200,20);
    
    mango1 = new Mango(700,260,50,50);
    mango2 = new Mango(920,310,50,50);
    mango3 = new Mango(750,320,50,50);
    mango4 = new Mango(810,260,50,50);
    mango5 = new Mango(740,200,50,50);
    mango6 = new Mango(880,260,50,50);
    mango7 = new Mango(900,200,50,50);
    mango8 = new Mango(830,200,50,50);


    //CREATE FEW MORE MANGOES


    tree = new Tree(800,350,400,390);
    
    rock = new Rock(135,515);
    sling= new Sling(rock.body, {x:140, y:515});    
}

function draw(){
    background("white");
    Engine.update(engine);
     
    ground.display();
    
    tree.display();
    
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();

    //DISPLAY FEW MORE MANGOES
    
    sling.display();
    
    rock.display();    
    collide(rock, mango1)
    collide(rock, mango2)
    collide(rock, mango3)
    collide(rock, mango4)

    //COLLIDE FEW MORE MANGOES
    
    image(boyimg, 200,550,150,150)
}

function keyPressed(){

    if(keyCode===32){
        Matter.Body.setPosition(rock.body, {x:400,y:200})//changed
        sling.attach(rock.body);
    }
}


function mouseDragged()
{
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})   
}

function  mouseReleased()
{
    sling.fly();
}

function collide(object1,object2){
   // var A= object2.body.position.x - object1.body.position.x;//wall.x-car.x =50
    //var B = object1.width/2 + object2.width/2//  25+ 25=50

    if(object2.body.position.x - object1.body.position.x <= object1.width/2 + object2.width/2){
        Matter.Body.setStatic(object2.body, false)
    }



}
