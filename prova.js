function preload(){
}

var myCat;


function setup() {
  createCanvas(windowWidth, windowHeight);

  myCat = new Cat(50, 100, 100);
}

function draw() {
  var myMouseX=mouseX;
  var myMouseY=mouseY;
  var myMouseBody=50;
  var myMoyseRad=25;
  background(200);
  myCat.move();
  myCat.display();
  //noLoop();
  fill(255, 140, 200);
  ellipse(myMouseX, myMouseY, myMouseBody);

  var d = dist(myCat.x, myCat.y, myMouseX, myMouseY);
  if(d<myCat.diameter/2+myMoyseRad) {
    myCat.color='blue';
  }else{
    myCat.color='green';
  }

}

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
