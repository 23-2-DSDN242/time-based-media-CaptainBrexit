/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  fill(200); // dark grey

  //let Colour = color(0, 255, 0);

  // Sets origin point to centre of display
  translate(width / 2, height / 2);
  angleMode(DEGREES);

  // Assigns time objects to variables
  let Seconds = obj.seconds;
  let Minutes = obj.minutes;
  let Hours = obj.hours;
  let Milliseconds = obj.millis;
  let Alarm =  obj.seconds_until_alarm;

  // Basic Clock in middle (Replace with values on radar blips?)
  var h = nf(Hours, 2, 0);
  var m = nf(Minutes, 2, 0);
  var s = nf(Seconds, 2, 0);
  textSize(20);
  text(h + ' : ' + m + ' : ' + s, - 50, 40);

  for (x = -width; x < width; x += width / 10) {
		for (y = -height; y < height; y += height / 5) {
      stroke(0, 127, 0);
			line(x, -height, x, height);
			line(-width, y, width, y);
		}
	}

  // Seconds Blip, controlling position and transparency
  push();
  	var secondsBlipPosition = map(Seconds, 0 , 60, 0, 1000);
    var transparency = map(((millis()-secondsBlipPosition) % 1000), 0, 1000, 0, 255);
  	var secondAngle = map(Seconds, 0, 60, 0, 360);
		var secondLength = 200;

		rotate(secondAngle);
  	
	  noStroke();
	  push();
      translate(0, - secondLength);
      fill(0, 255, 0, transparency);
      circle(0, 0, 20);
	  pop();
	pop();

  // Minutes Blip, controlling position and transparency
  push();
  var minutesBlipPosition = map(Minutes, 0, 60, 0, 1000);
  var transparency = map(((millis()-minutesBlipPosition) % 1000), 0, 1000, 0, 255);
  var minuteAngle = map(Minutes, 0, 60, 0, 360);
  var minuteLength = 150;

  rotate(minuteAngle);
  
  noStroke();
  push();
    translate(0, - minuteLength);
    fill(0, 255, 0, transparency);
    circle(0, 0, 20);
  pop();
pop();

// Hours Blip, controlling position and transparency
  push();
  var hoursBlipPosition = map(Hours % 12, 0, 12, 0, 1000);
  var transparency = map(((millis()-hoursBlipPosition) % 1000), 0, 1000, 0, 255);
  var hourAngle = map(Hours % 12, 0, 12, 0, 360);
  var hourLength = 100;
  stroke(39, 203, 164);
  
  rotate(hourAngle);
  
  noStroke();
  push();
    translate(0, - hourLength);
    fill(0, 255, 0, transparency);
    circle(0, 0, 20);
  pop();
pop();


// Spinning Radar Arm, controlling angle and speed
  push();
  var spinningArmAngle = map(Milliseconds, 0, 1000, 0, 360);
  var armLength = 225;
  rotate(spinningArmAngle);
  line(0,0,0, - armLength);
  pop();

  // Green radar rings and lines
  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
  circle(0, 0, 450);
  circle(0, 0, 350);
  circle(0, 0, 250);
  circle(0, 0, 150);
  circle(0, 0, 25);
  line(0, -235, 0, 235);
  line(-235, 0, 235, 0);

  



  // When alarm is triggered, change clock colour to red
  //if (Alarm >= 0) {
    if (Alarm != 0) {
    //text ("Alarm not triggered", 100, 100);
  //} else if (Alarm == -1) {
  } else {
    textSize(30);
    push();
    rotate(-40);
    text ("OH MY GOD", -270, -350);
    pop();

    push();
    rotate(40);
    text ("THERE'S SOMETHING", -300, 300);
    text ("ON THE RADAR", -270, 330);
    pop();

    push();
    rotate(40);
    text ("AAAAAAAAAAAAA", 75, -300);
    pop();

    push();
    rotate(-40);
    text ("PANIC", 75, 350);
    pop();
  }
}
