function preload(){
}

var cats= [];
var myCat;
var gameover=false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  var catNumber= 5;
  for (var i=0; i<catNumber; i++) {
    var myCat = new Cat(random(0, width), random(0, height), 10);
    myCat.diameter=random(10,50);
    myCat.speed=random(0.1, 0.8);
    //myCat.color=color(random(255), random(255), random(255));
    myCat.color='green';
    cats.push(myCat);
  }
}

if(!gameover){
  function draw() {

    var myMouseX=mouseX;
    var myMouseY=mouseY;
    var myMouseBody=50;
    var myMoyseRad=25;

    background(200);
    //cats.move();
    //cats.display();
    //noLoop();
    fill(255, 140, 200);
    ellipse(myMouseX, myMouseY, myMouseBody);

    for (var j=0; j<cats.length; j++) {
      cats[j].move();
      cats[j].display();
      //cats[j].diameter += 1;
      //cats[j].color=color(random(255), random(255), random(255));
      var d = dist (cats[j].x, cats[j].y, myMouseX, myMouseY);
      //console.log('cats.x=' + cats[j].x);
      if(d<cats[j].diameter/2+25) {
        cats[j].color='blue';
        gameover=true;
        fill('white');
        textSize(30);
        text('Run away from the evil balls', width/2 - 170, height/2 + 30);
        textSize(90);
        text('WATCH OUT', width/2 - 190, height/2 - 30);

      }else{
        cats[j].color='green';
      }
    }
  }
}else{gameover=true}

function Cat(bodyX, bodyY, bodyDiameter) {
  this.x = bodyX;
  this.y = bodyY;
  this.diameter = bodyDiameter;
  this.color = 'green';
  this.speed = 0.5;

  this.move = function() {

    var deadZone = 20;
    var moveX = 0;
    var moveY = 0;
    var towardsHyp;
    var towardsX;
    var towardsY;
    var pippo = 0.1;


    if(mouseY>this.y){

      if(mouseX>this.x){
        //bottom right
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=mouseX - this.x;
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }
        else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY=mouseY - this.y;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x += moveX;
        this.y += moveY;

      }
      else {
        //bottom left
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=this.x - mouseX;
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY=mouseY - this.y;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x -= moveX;
        this.y += moveY;


      }
    }
    else {
      if(mouseX>this.x){
        //top right
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=mouseX - this.x;
        if(towardsX >= 20){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY= this.y - mouseY;
        if(towardsY >= 20){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x += moveX;
        this.y -= moveY;

      }
      else {
        //top left
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=this.x - mouseX;
        if(towardsX >= 20){
          moveX=(this.speed*towardsHyp)/towardsX;
        }

        towardsY=this.y - mouseY;
        if(towardsY >= 20){
          moveY=(this.speed*towardsHyp)/towardsY;
        }

        this.x -= moveX;
        this.y -= moveY;

      }
    }

  }

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }


}
