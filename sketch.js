var time, fullDate, hr, min, sec, date, mth, yr, inputh, inputm, alarmh, alarmm, alarmsound;

function preload() {
  alarmsound = createAudio('piano_C_sharp.mp3');
  hr = hour();
  mint = minute();
  sec = second();
  if(month() == 1) {
    mth = 'January';
  }else if(month() == 2) {
    mth = 'February';
  }else if(month() == 3) {
    mth = 'March';
  }else if(month() == 4) {
    mth = 'April';
  }else if(month() == 5) {
    mth = 'May';
  }else if(month() == 6) {
    mth = 'June';
  }else if(month() == 7) {
    mth = 'July';
  }else if(month() == 8) {
    mth = 'August';
  }else if(month() == 9) {
    mth = 'September';
  }else if(month() == 10) {
    mth = 'October';
  }else if(month() == 11) {
    mth = 'November';
  }else if(month() == 12) {
    mth = 'December';
  }
  if(day() == 11 || day() == 12) {
    date = day() + 'th';
  }else if(day() % 10 == 1) {
    date = day() + 'st';
  }else if(day() % 10 == 2) {
		date = day() + 'nd';
  }else {
    date = day() + 'th';
  }
  yr = year();
}


function setup() {
  createCanvas(500, 500);
  setInterval(addSec, 1000);
  inputh = createInput();
  inputh.position(0, 380);
  inputm = createInput();
  inputm.position(200, 380);
}

function draw() {
  background(0);
  fill('#0d0');
  textAlign(CENTER);
  textSize(64);
  textStyle(BOLD);
  text(nf(hr, 2, 0) + ':' + nf(mint, 2, 0) + ':' + nf(sec, 2, 0), 200, 200);
  textSize(32);
  text(mth + ' ' + date + ', ' + yr, 200, 264);
  textSize(12);
  text("Set Alarm (Hours - Minutes)", 200, 375);
}

function addSec() {
  sec++;
  if(sec >= 60) {
    sec = 0;
    mint++;
  }
  if(mint >= 60) {
    mint = 0;
    hr++;
  }
  if(hr >= 24) {
    window.location.reload();
  }
  if((hr == alarmh) && (mint == alarmm)) {
    alarmsound.duration(60);
    alarmsound.play();
  }
}

function keyPressed() {
  if(keyCode == ENTER) {
    alarmh = int(inputh.value());
    alarmm = int(inputm.value());
    inputh.value('');
    inputm.value('');
    console.log('Alarm set to ' + nf(alarmh, 2, 0) + ':' + nf(alarmm, 2, 0) + '.');
  }
}