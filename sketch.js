var mR,fR;


function setup() {
  createCanvas(800,400);
 fR= createSprite(400, 200, 150, 250);
 fR.shapeColor="green";
 fR.debug=true;

 mR= createSprite(200, 200, 50, 50);
 mR.shapeColor="green";
 mR.debug=true;

}

function draw() {
  background(0);  
  mR.x=mouseX;
  mR.y=mouseY;

  console.log("Dis b/w the rects :" +(mR.x-fR.x));

  if(mR.x-fR.x<=(mR.width+fR.width)/2 && fR.x-mR.x<=(mR.width+fR.width)/2&&
  mR.y-fR.y<=(mR.height+fR.height)/2&&fR.y-mR.y<=(mR.height+fR.height)/2){
    mR.shapeColor="red";
    fR.shapeColor="red";
  }else {
    mR.shapeColor="green";
    fR.shapeColor="green"
  }

  drawSprites();
}