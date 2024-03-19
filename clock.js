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

  translate(width/2, height/2);
  angleMode(DEGREES);

  let Seconds = obj.seconds;
  let Minutes = obj.minutes;
  let Hours = obj.hours;
  let Milliseconds = obj.millis;
  let Alarm =  obj.seconds_until_alarm;

  var h = nf(Hours, 2, 0);
  var m = nf(Minutes, 2, 0);
  var s = nf(Seconds, 2, 0);
  textSize(20);
  text(h+' : '+m+' : '+s,-50,40);

  push();
  	var triggerposition = map(Seconds, 0,60,0,1000)
    var transparency = map(((millis()-triggerposition)%1000),0,1000,0,255)
  	var secondAngle = map(Seconds,0,60,0,360)
		var secondLength = 200;

		rotate(secondAngle);
  	
	  noStroke();
	  push();
      translate(0,-secondLength);
      fill(0, 255, 0, transparency);
      circle(0, 0, 20);
	  pop();
	pop();

  push();
  var triggerposition = map(Minutes, 0,60,0,1000)
  var transparency = map(((millis()-triggerposition)%1000),0,1000,0,255)
  var minuteAngle = map(Minutes,0,60,0,360)
  var minuteLength = 185;


  rotate(minuteAngle);
  
  noStroke();
  push();
    translate(0,-minuteLength*0.8);
    fill(0, 255, 0, transparency);
    circle(0, 0, 20);
  pop();
pop();



  push();
  var triggerposition = map(Hours % 12, 0,12,0,1000)
  var transparency = map(((millis()-triggerposition)%1000),0,1000,0,255)
  var hourAngle = map(Hours % 12,0,12,0,360)
  var hourLength = 145;
  stroke(39, 203, 164);
  
  rotate(hourAngle);
  
  noStroke();
  push();
    translate(0,-hourLength*0.7);
    fill(0, 255, 0, transparency);
    circle(0, 0, 20);
  pop();
pop();

  push();
  var spinningArmAngle = map(Milliseconds, 0, 1000, 0, 360);
  var armLength = 225;
  rotate(spinningArmAngle);
  line(0,0,0,-armLength);
  pop();


  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
  circle(0, 0, 450);
  circle(0, 0, 350);
  circle(0, 0, 250);
  circle(0, 0, 150);
  fill(0, 255, 0);
  circle(0, 0, 25);

}
