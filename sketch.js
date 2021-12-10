const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismo, mundo, bola, solo, solo_opcao, bola_opcao, rocha,rocha_opcao,parede;

function setup() {
    createCanvas(400,400);
    mecanismo = Engine.create();
    mundo = mecanismo.world;

    bola_opcao = {
        restitution: 1.0,
        frictionAir: 0.01
    }


    bola = Bodies.circle(100,10,20,bola_opcao);
    World.add(mundo, bola);

    solo_opcao = {
        isStatic: true
    }

    solo = Bodies.rectangle(200,390,400,20,solo_opcao);
    World.add(mundo, solo);

    rocha_opcao = {
        restitution: 0.85
    }

    rocha = Bodies.circle(200,10,20,rocha_opcao);
    World.add(mundo, rocha);

    parede = Bodies.rectangle(300,200,200,20,solo_opcao);
    World.add(mundo,parede);
}

function draw() 
{
    background(0);
    Engine.update(mecanismo);

    ellipseMode(RADIUS);
    ellipse(bola.position.x, bola.position.y, 30);

    rectMode(CENTER);
    fill("yellow");
    rect(solo.position.x, solo.position.y, 400,20);
  
    ellipseMode(RADIUS);
    ellipse(rocha.position.x,rocha.position.y,20);

    rect(parede.position.x,parede.position.y,200,20);
}

