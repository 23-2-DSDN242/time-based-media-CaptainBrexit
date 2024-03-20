/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  background(50); 
  fill(200); 


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
  stroke(0);
  textSize(20);
  text(h + ' : ' + m + ' : ' + s, - 50, 40);


  // Draws the darker background grid
  for (x = -width; x < width; x += width / 10) {
		for (y = -height; y < height; y += height / 5) {
      if (Alarm != 0) {
        stroke (0, 127, 0);
      } else {
        stroke (127, 0, 0);
      }
			line(x, -height, x, height);
			line(-width, y, width, y);
		}
	}


  // Seconds Blip, controlling position and transparency
  push();
  	var secondsBlipPosition = map(Seconds, 0 , 60, 0, 1000);
    var transparency = map(((millis() - secondsBlipPosition) % 1000), 0, 1000, 255, 0);
  	var secondAngle = map(Seconds, 0, 60, 0, 360);
		var secondLength = 200;

		rotate(secondAngle);
  	
	  noStroke();
	  push();
      translate(0, - secondLength);
      if (Alarm != 0) {
      fill(0, 255, 0, transparency);
      } else {
        fill (255, 0, 0, transparency);
      }
      circle(0, 0, 20);
	  pop();
	pop();


  // Minutes Blip, controlling position and transparency
  push();
  var minutesBlipPosition = map(Minutes, 0, 60, 0, 1000);
  var transparency = map(((millis() - minutesBlipPosition) % 1000), 0, 1000, 255, 0);
  var minuteAngle = map(Minutes, 0, 60, 0, 360);
  var minuteLength = 150;

  rotate(minuteAngle);
  
  noStroke();
  push();
    translate(0, - minuteLength);
    if (Alarm != 0) {
    fill(0, 255, 0, transparency);
    } else {
      fill (255, 0, 0, transparency);
    }
    circle(0, 0, 20);
  pop();
pop();


// Hours Blip, controlling position and transparency
  push();
  var hoursBlipPosition = map(Hours % 12, 0, 12, 0, 1000);
  var transparency = map(((millis() - hoursBlipPosition) % 1000), 0, 1000, 255, 0);
  var hourAngle = map(Hours % 12, 0, 12, 0, 360);
  var hourLength = 100;
  
  rotate(hourAngle);
  
  noStroke();
  push();
    translate(0, - hourLength);
    if (Alarm != 0) {
    fill(0, 255, 0, transparency);
    } else {
      fill (255, 0, 0, transparency);
    }
    circle(0, 0, 20);
  pop();
pop();


// Spinning Radar Arm, controlling angle and speed
    if (Alarm != 0) {
      stroke(0, 255, 0);
      } else {
        if(Milliseconds < 999 / 2 ) {
          stroke(0, 255, 0);
        } else {
          stroke(255, 0, 0);
        }
      }
  strokeWeight(3);
  push();
  var spinningArmAngle = map(Milliseconds, 0, 1000, 0, 360);
  var armLength = 225;
  rotate(spinningArmAngle);
  line(0,0,0, - armLength);
  pop();


  // Green radar rings and lines
  noFill();
  circle(0, 0, 450);
  circle(0, 0, 350);
  circle(0, 0, 250);
  circle(0, 0, 150);
  circle(0, 0, 25);
  line(0, -235, 0, 235);
  line(-235, 0, 235, 0);

  
  // When alarm is triggered, display alarm text and alternate colours between red and green
    if (Alarm != 0) {
  } else {
    if(Milliseconds < 999 / 2 ) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
      stroke(255, 0, 0);
    }

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
