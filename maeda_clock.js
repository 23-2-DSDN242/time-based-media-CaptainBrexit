// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  //pixeloid = loadFont('pixeloid-font/PixeloidSans-mLxMm.tff');
  //textFont(pixeloid);
  angleMode(DEGREES);
  translate(400, 250);

  fill(0);
  translate(100, -160);
  textSize(200);
  rotate(140);
  text("42", 0, 0);

  translate(160, -10);
  rotate(-90);
  fill(255);
  textSize(120);
  text("20", 0, 0);

  fill(255, 0, 0);
  translate(20, 10);
  textSize(160);
  text("4", 0, 0);
}
