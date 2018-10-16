function preload(){
}

var cats= [];
var myCat;
var gameover=false;
var img;
var catWidth=50;
var catHeight=62;
var bouncyCatRatio=3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cat.png");
  imageMode(CENTER);
  var catNumber= 7;
  for (var i=0; i<catNumber; i++) {
    var myCat = new Cat(random(0, width), random(0, height), 10);
    myCat.diameter=random(10,50);
    myCat.speed=random(0.1, 0.8);
    //myCat.color=color(random(255), random(255), random(255));
    myCat.stroke=noStroke();
    myCat.color=color(61, 69, 119, 140);
    cats.push(myCat);
  }
}


  function draw() {
    if(!gameover){

    var myMouseX=mouseX;
    var myMouseY=mouseY;
    var myMouseBody=50;
    var myMoyseRad=25;

    background(218, 215, 208);
    fill('white');
    textSize(15);
    text('Run away from the evil cats', 65, 80);
    textSize(30);
    text('WATCH OUT', 70, 60);
    //cats.move();
    //cats.display();
    //noLoop();
    fill(246, 242, 93);
    ellipse(myMouseX, myMouseY, myMouseBody);

    for (var j=0; j<cats.length; j++) {
      if(j%bouncyCatRatio==0){
        cats[j].randomMove();
      }else{
        cats[j].move();
      }

      cats[j].display();
      cats[j].diameter += 0.05;
      cats[j].speed += 0.003;
      //cats[j].color=color(random(255), random(255), random(255));
      //var d = dist (cats[j].x, cats[j].y, myMouseX, myMouseY);
      var xOffset;
      var yOffset;
      if(cats[j].x>myMouseX){
        xOffset=cats[j].x-myMouseX;
      }else{
        xOffset=myMouseX-cats[j].x;
      }
      if(cats[j].y>myMouseY){
        yOffset=cats[j].y-myMouseY;
      }else{
        yOffset=myMouseY-cats[j].y;
      }
      //console.log('cats.x=' + cats[j].x);
      if((xOffset<=(myMouseBody/2+catWidth/2))&&(yOffset<=(myMouseBody/2+catHeight/2))) {
        //cats[j].color='blue';
        fill('white');
        textSize(30);
        text('Click to restart', width/2-100, height/2+50);
        textSize(50);
        text('CATS HAVE TAKEN OVER THE WORLD', width/2-450, height/2);
        gameover=true;
        //mouseClicked();
      }else{
        //cats[j].color='green';
      }
    }
  }else{
    gameover=true;
  }
}

function Cat(bodyX, bodyY, bodyDiameter) {
  this.x = bodyX;
  this.y = bodyY;
  this.diameter = bodyDiameter;
  this.color = 'green';
  this.speed = 0.5;
  var yDir = 1;
  var xDir = 1;


  this.randomMove=function() {

    this.x += this.speed * xDir;
    this.y += this.speed * yDir;
    if(this.y>height || this.y<0) {
      yDir=yDir * -1;
    }
    if(this.x>width || this.x<0){
      xDir=xDir * -1;
    }

}

  this.move = function() {

    var deadZone = 15;
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
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY= this.y - mouseY;
        if(towardsY >= deadZone){
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
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY=this.y - mouseY;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x -= moveX;
        this.y -= moveY;

      }
    }

  }

  this.display = function() {
    fill(this.color);
    //ellipse(this.x, this.y, this.diameter);
    image(img, this.x, this.y);
  }
  this.mousePressed = function() {

  }


}
function mouseClicked() {
  if(gameover){
   location.reload()}
}
